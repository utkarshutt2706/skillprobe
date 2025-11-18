import MentorsExplorer from '@/components/sections/mentorship/mentors/MentorsExplorer';
import { mentors } from './data';

export const metadata = {
    title: 'Find Mentors | Skillprobe',
    description:
        'Browse verified mentors, filter by expertise, rating, and price, and book 1-on-1 sessions tailored to your goals.',
};

export default function MentorsPage() {
    return (
        <div className='pt-24 section-padding'>
            <div className='max-w-7xl mx-auto'>
                <header className='mb-8'>
                    <h1 className='text-3xl md:text-4xl font-display font-bold text-neutral-900'>
                        Find Mentors
                    </h1>
                    <p className='mt-3 text-neutral-600'>
                        Explore verified professionals and book personalized
                        sessions.
                    </p>
                </header>

                <MentorsExplorer initialMentors={mentors} />
            </div>
        </div>
    );
}
