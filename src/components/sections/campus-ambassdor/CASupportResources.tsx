'use client';

import { Card } from '@/components/ui/Card';
import { BookOpen, LifeBuoy, Megaphone } from 'lucide-react';

const RES = [
    {
        icon: BookOpen,
        title: 'Training & Guides',
        desc: 'Templates and examples to get started fast.',
    },
    {
        icon: Megaphone,
        title: 'Marketing Assistance',
        desc: 'Campaign ideas and placement support.',
    },
    {
        icon: LifeBuoy,
        title: 'Technical Support',
        desc: 'Help with tracking, links, and dashboard.',
    },
];

export default function CASupportResources() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Support & Resources
                </h2>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
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
