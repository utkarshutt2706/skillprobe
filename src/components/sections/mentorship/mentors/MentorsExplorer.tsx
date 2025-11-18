'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { Mentor } from '@/types/mentor';
import { SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import MentorCard from './MentorCard';
import MentorFilters from './MentorFilters';

type Props = {
    initialMentors: Mentor[];
};

type SortKey =
    | 'relevance'
    | 'priceAsc'
    | 'priceDesc'
    | 'ratingDesc'
    | 'sessionsDesc';

const ALL_TAGS = [
    'React',
    'Next.js',
    'System Design',
    'Interview Prep',
    'Node.js',
    'TypeScript',
    'APIs',
    'Career Guidance',
    'Product Management',
    'Roadmaps',
    'UX',
    'Full-Stack',
    'Performance',
    'Cloud',
    'Databases',
    'Data Engineering',
    'SQL',
    'ETL',
];

export default function MentorsExplorer({ initialMentors }: Props) {
    const [query, setQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(100);
    const [minRating, setMinRating] = useState<number>(0);
    const [sort, setSort] = useState<SortKey>('relevance');
    const [showFilters, setShowFilters] = useState(false);

    // compute filtered mentors
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        let res = initialMentors.filter((m) => {
            const matchesQuery =
                !q ||
                m.name.toLowerCase().includes(q) ||
                m.title.toLowerCase().includes(q) ||
                m.company.toLowerCase().includes(q) ||
                m.expertise.some((e) => e.toLowerCase().includes(q));

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((t) =>
                    m.expertise
                        .map((x) => x.toLowerCase())
                        .includes(t.toLowerCase())
                );

            const matchesPrice = m.pricePerSession <= maxPrice;
            const matchesRating = m.rating >= minRating;

            return matchesQuery && matchesTags && matchesPrice && matchesRating;
        });

        switch (sort) {
            case 'priceAsc':
                res = res.sort((a, b) => a.pricePerSession - b.pricePerSession);
                break;
            case 'priceDesc':
                res = res.sort((a, b) => b.pricePerSession - a.pricePerSession);
                break;
            case 'ratingDesc':
                res = res.sort((a, b) => b.rating - a.rating);
                break;
            case 'sessionsDesc':
                res = res.sort((a, b) => b.totalSessions - a.totalSessions);
                break;
            default:
                // relevance: prioritize rating + sessions lightly
                res = res.sort(
                    (a, b) =>
                        b.rating * 10 +
                        b.totalSessions * 0.1 -
                        (a.rating * 10 + a.totalSessions * 0.1)
                );
        }

        return res;
    }, [initialMentors, maxPrice, minRating, query, selectedTags, sort]);

    // mobile filter badge count
    const activeCount =
        (query ? 1 : 0) +
        (selectedTags.length ? 1 : 0) +
        (maxPrice < 100 ? 1 : 0) +
        (minRating > 0 ? 1 : 0) +
        (sort !== 'relevance' ? 1 : 0);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
            {/* Sidebar */}
            <aside className='lg:col-span-3'>
                {/* Mobile open filters button */}
                <div className='lg:hidden mb-4'>
                    <Button
                        variant='outline'
                        className='w-full'
                        onClick={() => setShowFilters((s) => !s)}
                        leftIcon={<SlidersHorizontal size={18} />}
                    >
                        Filters{activeCount ? ` • ${activeCount}` : ''}
                    </Button>
                </div>

                <div
                    className={cn('lg:block', showFilters ? 'block' : 'hidden')}
                >
                    <MentorFilters
                        tags={ALL_TAGS}
                        query={query}
                        setQuery={setQuery}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        minRating={minRating}
                        setMinRating={setMinRating}
                        sort={sort}
                        setSort={setSort}
                        onCloseMobile={() => setShowFilters(false)}
                        mentorLength={filtered.length}
                    />
                </div>
            </aside>

            {/* Results */}
            <section className='lg:col-span-9'>
                {/* Results header */}
                <div className='flex items-center justify-between mb-4 lg:hidden'>
                    <p className='text-sm text-neutral-600'>
                        Showing{' '}
                        <span className='font-medium text-neutral-900'>
                            {filtered.length}
                        </span>{' '}
                        mentors
                    </p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {filtered.map((m) => (
                        <MentorCard key={m.id} mentor={m} />
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className='mt-10 bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center'>
                        <p className='font-semibold text-neutral-900'>
                            No mentors match your filters
                        </p>
                        <p className='text-neutral-600 mt-1'>
                            Try removing some filters or broadening your search.
                        </p>
                        <div className='mt-4 flex flex-col sm:flex-row gap-3 justify-center'>
                            <Button
                                variant='outline'
                                onClick={() => setSelectedTags([])}
                            >
                                Clear tags
                            </Button>
                            <Button
                                variant='outline'
                                onClick={() => setMinRating(0)}
                            >
                                Clear rating
                            </Button>
                            <Button
                                variant='outline'
                                onClick={() => setMaxPrice(100)}
                            >
                                Reset price
                            </Button>
                            <Button
                                variant='outline'
                                onClick={() => setQuery('')}
                            >
                                Reset search
                            </Button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
