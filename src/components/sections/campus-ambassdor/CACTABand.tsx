'use client';

import { Button } from '@/components/ui/button2';
import Link from 'next/link';

export default function CACTABand() {
    return (
        <section className='section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-accent-teal-500'>
            <div className='max-w-4xl mx-auto text-center px-6'>
                <h2 className='text-3xl md:text-4xl font-display font-bold text-white'>
                    Ready to Become an Ambassador?
                </h2>
                <p className='mt-3 text-white/90'>
                    Join students who are already building successful
                    initiatives on campus.
                </p>

                <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
                    <Link
                        href='/signup?role=ambassador'
                        className='w-full sm:w-auto'
                    >
                        <Button
                            variant='secondary'
                            size='lg'
                            className='w-full sm:w-auto h-14 bg-white text-primary-600 hover:bg-neutral-50 shadow-xl'
                        >
                            Apply Now
                        </Button>
                    </Link>
                    <Link href='#how-it-works' className='w-full sm:w-auto'>
                        <Button
                            variant='ghost'
                            size='lg'
                            className='w-full sm:w-auto h-14 text-white border-2 border-white hover:bg-white/10'
                        >
                            How It Works
                        </Button>
                    </Link>
                </div>

                <p className='mt-3 text-sm text-white/80'>
                    No fees. Quick onboarding.
                </p>
            </div>
        </section>
    );
}
