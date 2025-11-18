// src/components/sections/mentorship/HeroMentorship.tsx
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroMentorship() {
    return (
        <section className='relative gradient-bg pt-24 pb-14'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <div className='grid lg:grid-cols-2 gap-10 items-center'>
                    <div>
                        <h1 className='text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight'>
                            Share Your Expertise, <br /> Inspire Learners,{' '}
                            <br /> Earn Revenue.
                        </h1>
                        <p className='mt-5 text-lg text-neutral-600 max-w-xl'>
                            Join Skillprobe’s mentorship platform and monetize
                            your knowledge with live sessions or structured
                            guidance. Keep full control of your schedule and
                            offerings.
                        </p>

                        {/* Equal-size, wrap-friendly CTAs */}
                        <div className='mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md'>
                            <Link href='/signup?role=mentor' className='w-full'>
                                <Button
                                    variant='primary'
                                    size='lg'
                                    className='w-full h-14'
                                >
                                    <span className='inline-flex items-center gap-2'>
                                        Become a Mentor
                                    </span>
                                </Button>
                            </Link>
                            <Link href='/mentorship/mentors' className='w-full'>
                                <Button
                                    variant='secondary'
                                    size='lg'
                                    className='w-full h-14'
                                >
                                    Explore Mentors
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual placeholder; replace with branded artwork if available */}
                    <div className='relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] bg-linear-to-br from-primary-500 via-primary-600 to-accent-teal-500'>
                        <Image
                            fill
                            src='/mentor-hero.jpg'
                            alt='Skillprobe Logo'
                            className='object-fill'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
