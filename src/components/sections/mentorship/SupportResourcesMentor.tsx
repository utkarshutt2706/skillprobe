// src/components/sections/mentorship/SupportResourcesMentor.tsx
'use client';

import { Card } from '@/components/ui/card';
import { GraduationCap, LifeBuoy, Megaphone } from 'lucide-react';

const RES = [
    {
        icon: GraduationCap,
        title: 'Mentor Training',
        desc: 'Guides and templates to structure high‑impact sessions.',
    },
    {
        icon: Megaphone,
        title: 'Marketing Assistance',
        desc: 'Discovery placements and campaigns to reach learners.',
    },
    {
        icon: LifeBuoy,
        title: 'Technical Support',
        desc: 'Help with scheduling, video, and account questions.',
    },
];

export default function SupportResourcesMentor() {
    return (
        <section className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-10'>
                    Support & Resources
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {RES.map((r) => (
                        <Card
                            key={r.title}
                            hover
                            padding='lg'
                            className='h-full'
                        >
                            <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600'>
                                <r.icon className='w-6 h-6' />
                            </div>
                            <h3 className='mt-4 text-lg font-semibold text-neutral-900'>
                                {r.title}
                            </h3>
                            <p className='mt-2 text-neutral-600'>{r.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
