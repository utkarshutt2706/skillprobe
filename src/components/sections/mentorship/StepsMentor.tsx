// src/components/sections/mentorship/StepsMentor.tsx
'use client';

import Image from 'next/image';

const STEPS = [
    {
        n: '1',
        t: 'Apply',
        d: 'Share your experience, expertise, and availability.',
    },
    {
        n: '2',
        t: 'Verification',
        d: 'We validate your profile and finalize onboarding.',
    },
    {
        n: '3',
        t: 'Profile Setup',
        d: 'Create a compelling mentor profile and offerings.',
    },
    {
        n: '4',
        t: 'Create First Session',
        d: 'Set pricing, duration, and format with clear outcomes.',
    },
    {
        n: '5',
        t: 'Launch & Earn',
        d: 'Go live and start delivering impactful mentorship.',
    },
];

export default function StepsMentor() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-10'>
                    Getting Started is Simple
                </h2>

                <div className='grid lg:grid-cols-2 gap-10 items-start'>
                    <ol className='space-y-6'>
                        {STEPS.map((s) => (
                            <li key={s.n} className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold'>
                                    {s.n}
                                </div>
                                <div>
                                    <p className='font-semibold text-neutral-900'>
                                        {s.t}
                                    </p>
                                    <p className='text-neutral-600'>{s.d}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className='relative w-full h-80 rounded-2xl overflow-hidden shadow-xl bg-neutral-100'>
                        <Image
                            src='/mentorship-steps.jpg'
                            alt='Mentorship getting started'
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
