'use client';

import { Button } from '@/components/ui/button2';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CAHero() {
    return (
        <section className='relative gradient-bg pt-24 pb-14'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <div className='grid lg:grid-cols-2 gap-10 items-center'>
                    <div>
                        <h1 className='text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight'>
                            Earn While You Learn — Become a Skillprobe
                            Ambassador.
                        </h1>
                        <p className='mt-5 text-lg text-neutral-600 max-w-xl'>
                            Join the Skillprobe Campus Ambassador Program to
                            represent your campus, grow your network, and earn
                            by spreading opportunities that matter.
                        </p>

                        <div className='mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md'>
                            <Link
                                href='/signup?role=ambassador'
                                className='w-full'
                            >
                                <Button
                                    variant='primary'
                                    size='lg'
                                    className='w-full h-14'
                                >
                                    Become an Ambassador <ArrowRight />
                                </Button>
                            </Link>
                            <Link href='#how-it-works' className='w-full'>
                                <Button
                                    variant='secondary'
                                    size='lg'
                                    className='w-full h-14'
                                >
                                    See How It Works
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className='relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] bg-linear-to-br from-primary-500 via-primary-600 to-accent-teal-500'>
                        <Image
                            fill
                            src='/campus-ambassador.jpg'
                            alt='Skillprobe Logo'
                            className='object-fill'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
