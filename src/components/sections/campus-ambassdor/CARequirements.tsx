'use client';

import { CheckCircle2 } from 'lucide-react';

const REQS = [
    'Active student with strong campus presence',
    'Good communication & outreach skills',
    'Interest in tech, careers, or mentorship',
    'Ability to run small events or campaigns',
    'Consistency in weekly outcomes',
];

export default function CARequirements() {
    return (
        <section className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Ambassador Requirements
                </h2>
                <ul className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
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
