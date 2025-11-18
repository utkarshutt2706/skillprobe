'use client';

import { CheckCircle2 } from 'lucide-react';

const REQS = [
    '1+ years of professional experience in your domain',
    'Clear communication and reliable availability',
    'Ability to structure outcomes for sessions',
    'Compliance with platform guidelines and policies',
    'Willingness to provide actionable feedback',
];

export default function RequirementsMentor() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-6'>
                    Mentor Requirements
                </h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {REQS.map((r) => (
                        <li key={r} className='flex items-start gap-3'>
                            <CheckCircle2 className='w-5 h-5 text-success-600 mt-0.5' />
                            <span className='text-neutral-700'>{r}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
