// src/components/sections/mentorship/CTABandMentorship.tsx
'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function CTABandMentorship() {
    return (
        <section className='section-padding bg-linear-to-br from-primary-600 via-primary-500 to-accent-teal-500'>
            <div className='max-w-4xl mx-auto text-center px-6'>
                <h2 className='text-3xl md:text-4xl font-display font-bold text-white'>
                    Ready to Start Mentoring?
                </h2>
                <p className='mt-3 text-white/90'>
                    Join professionals already building successful mentoring
                    practices on Skillprobe.
                </p>

                <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
                    <Link
                        href='/signup?role=mentor'
                        className='w-full sm:w-auto'
                    >
                        <Button
                            variant='secondary'
                            size='lg'
                            className='w-full sm:w-auto h-14 bg-white text-primary-600 hover:bg-neutral-50 shadow-xl'
                        >
                            Become a Mentor
                        </Button>
                    </Link>
                    <Link href='/mentors' className='w-full sm:w-auto'>
                        <Button
                            variant='ghost'
                            size='lg'
                            className='w-full sm:w-auto h-14 text-white border-2 border-white hover:bg-white/10'
                        >
                            Browse Mentors
                        </Button>
                    </Link>
                </div>

                <p className='mt-3 text-sm text-white/80'>
                    No long forms. Get started in minutes.
                </p>
            </div>
        </section>
    );
}
