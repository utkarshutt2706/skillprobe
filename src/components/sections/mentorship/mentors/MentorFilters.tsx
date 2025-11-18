'use client';

import { Button } from '@/components/ui/button2';
import { Search, X } from 'lucide-react';
import { useMemo } from 'react';

type SortKey =
    | 'relevance'
    | 'priceAsc'
    | 'priceDesc'
    | 'ratingDesc'
    | 'sessionsDesc';

type Props = {
    tags: string[];
    query: string;
    setQuery: (v: string) => void;

    selectedTags: string[];
    setSelectedTags: (v: string[]) => void;

    maxPrice: number;
    setMaxPrice: (v: number) => void;

    minRating: number;
    setMinRating: (v: number) => void;

    sort: SortKey;
    setSort: (v: SortKey) => void;

    onCloseMobile?: () => void;

    mentorLength: number;
};

export default function MentorFilters({
    tags,
    query,
    setQuery,
    selectedTags,
    setSelectedTags,
    maxPrice,
    setMaxPrice,
    minRating,
    setMinRating,
    sort,
    setSort,
    onCloseMobile,
    mentorLength,
}: Props) {
    const toggleTag = (t: string) => {
        setSelectedTags(
            selectedTags.includes(t)
                ? selectedTags.filter((x) => x !== t)
                : [...selectedTags, t]
        );
    };

    const appliedCount =
        (query ? 1 : 0) +
        (selectedTags.length ? 1 : 0) +
        (maxPrice < 100 ? 1 : 0) +
        (minRating > 0 ? 1 : 0) +
        (sort !== 'relevance' ? 1 : 0);

    const topTags = useMemo(() => tags.slice(0, 10), [tags]);

    return (
        <div className='card p-5'>
            {/* Header (mobile close) */}
            <div className='flex items-center justify-between mb-4'>
                <h2 className='font-semibold text-neutral-900'>Filters</h2>
                {onCloseMobile && (
                    <button
                        onClick={onCloseMobile}
                        className='lg:hidden p-2 rounded-md hover:bg-neutral-100'
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            <div className='hidden items-center justify-between mb-4 lg:flex'>
                <p className='text-sm text-neutral-600'>
                    Showing{' '}
                    <span className='font-medium text-neutral-900'>
                        {mentorLength}
                    </span>{' '}
                    mentors
                </p>
            </div>

            {/* Search (mobile) */}
            <div className='mb-4'>
                <div className='relative'>
                    <Search className='w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2' />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search mentors, skills, companies'
                        className='pl-9 pr-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white text-sm w-full'
                    />
                </div>
            </div>

            {/* Sort */}
            <div className='mb-5'>
                <label className='text-sm font-medium text-neutral-700'>
                    Sort by
                </label>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className='mt-2 w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300'
                >
                    <option value='relevance'>Relevance</option>
                    <option value='ratingDesc'>Rating (high to low)</option>
                    <option value='sessionsDesc'>Most sessions</option>
                    <option value='priceAsc'>Price (low to high)</option>
                    <option value='priceDesc'>Price (high to low)</option>
                </select>
            </div>

            {/* Price */}
            <div className='mb-5'>
                <label className='text-sm font-medium text-neutral-700'>
                    Max price per session ($)
                </label>
                <div className='mt-2 flex items-center gap-3'>
                    <input
                        type='range'
                        min={10}
                        max={100}
                        step={1}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                        className='w-full'
                    />
                    <span className='text-sm text-neutral-700 w-10 tabular-nums'>
                        {maxPrice}
                    </span>
                </div>
            </div>

            {/* Rating */}
            <div className='mb-5'>
                <label className='text-sm font-medium text-neutral-700'>
                    Minimum rating
                </label>
                <div className='mt-2 flex items-center gap-2'>
                    {[0, 4.0, 4.5].map((r) => (
                        <button
                            key={r}
                            onClick={() => setMinRating(r)}
                            className={
                                'px-3 py-1.5 rounded-md text-sm border ' +
                                (minRating === r
                                    ? 'bg-primary-50 border-primary-300 text-primary-700'
                                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50')
                            }
                        >
                            {r === 0 ? 'Any' : `${r}+`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className='mb-5'>
                <label className='text-sm font-medium text-neutral-700'>
                    Expertise
                </label>
                <div className='mt-2 flex flex-wrap gap-2'>
                    {topTags.map((t) => (
                        <button
                            key={t}
                            onClick={() => toggleTag(t)}
                            className={
                                'px-3 py-1.5 rounded-full text-sm border ' +
                                (selectedTags.includes(t)
                                    ? 'bg-primary-50 border-primary-300 text-primary-700'
                                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50')
                            }
                        >
                            {t}
                        </button>
                    ))}
                </div>
                {/* Expand note */}
                {tags.length > topTags.length && (
                    <p className='mt-2 text-xs text-neutral-500'>
                        Additional tags load dynamically.
                    </p>
                )}
            </div>

            {/* Applied & reset */}
            <div className='mt-6 flex items-center justify-between'>
                <p className='text-xs text-neutral-500'>
                    {appliedCount ? `${appliedCount} active` : 'No filters'}
                </p>
                <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => {
                        setQuery('');
                        setSelectedTags([]);
                        setMaxPrice(100);
                        setMinRating(0);
                        setSort('relevance' as SortKey);
                    }}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}
