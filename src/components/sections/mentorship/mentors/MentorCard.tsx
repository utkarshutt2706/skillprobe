'use client';

import { Button } from '@/components/ui/button2';
import { Mentor } from '@/types/mentor';
import { Briefcase, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
    mentor: Mentor;
};

export default function MentorCard({ mentor }: Props) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/mentorship/mentors/${mentor.id}`);
    };

    const handleBookClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div
            className='card p-5 h-full flex flex-col cursor-pointer transition-shadow hover:shadow-xl focus:outline-none'
            onClick={handleCardClick}
            tabIndex={0}
            role='button'
            aria-label={`View profile for ${mentor.name}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCardClick();
            }}
        >
            <div className='flex items-center gap-4'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden bg-primary-100'>
                    <Image
                        src={mentor.avatar || '/images/avatars/placeholder.png'}
                        alt={mentor.name}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='min-w-0'>
                    <h3 className='font-semibold text-neutral-900 truncate'>
                        {mentor.name}
                    </h3>
                    <p className='text-sm text-neutral-600 truncate'>
                        {mentor.title}
                    </p>
                    <p className='text-xs text-neutral-500 flex items-center gap-1 mt-0.5'>
                        <Briefcase className='w-3.5 h-3.5' /> {mentor.company}
                    </p>
                </div>
            </div>

            {/* Expertise pills */}
            <div className='mt-4 flex flex-wrap gap-2'>
                {mentor.expertise.slice(0, 4).map((tag) => (
                    <span
                        key={tag}
                        className='px-2.5 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700'
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Bio */}
            <p className='mt-4 text-sm text-neutral-600 line-clamp-3'>
                {mentor.bio}
            </p>

            {/* Stats */}
            <div className='mt-4 flex items-center justify-between text-sm'>
                <div className='flex items-center gap-1 text-neutral-800'>
                    <Star className='w-4 h-4 fill-accent-orange-500 text-accent-orange-500' />
                    <span className='font-medium'>
                        {mentor.rating.toFixed(1)}
                    </span>
                    <span className='text-neutral-500'>
                        ({mentor.totalSessions})
                    </span>
                </div>
                <div className='text-neutral-800'>
                    <span className='font-semibold'>
                        ${mentor.pricePerSession}
                    </span>
                    <span className='text-neutral-500'> / session</span>
                </div>
            </div>

            {/* Actions */}
            <div className='mt-5 flex items-center gap-3'>
                <Link
                    href={`/signup?intent=book&mentor=${mentor.id}`}
                    className='flex-1'
                    passHref
                >
                    <Button
                        variant='secondary'
                        size='md'
                        className='w-full'
                        onClick={handleBookClick}
                        tabIndex={0}
                    >
                        Book Session
                    </Button>
                </Link>
            </div>
        </div>
    );
}
