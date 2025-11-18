'use client';

import { Card } from '@/components/ui/card';
import { PiggyBank, Share2, Target, Users2 } from 'lucide-react';

const ITEMS = [
    {
        icon: PiggyBank,
        title: 'Earn While You Learn',
        desc: 'Stipends, bonuses, and performance-based rewards.',
    },
    {
        icon: Users2,
        title: 'Grow Your Network',
        desc: 'Connect with mentors, peers, and industry leaders.',
    },
    {
        icon: Share2,
        title: 'Build Your Portfolio',
        desc: 'Lead initiatives, events, and partnerships on campus.',
    },
    {
        icon: Target,
        title: 'Develop Leadership',
        desc: 'Own outcomes with guidance from the Skillprobe team.',
    },
];

export default function CAWhyJoin() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Why Become an Ambassador?
                </h2>
                <p className='mt-3 text-neutral-600 max-w-2xl'>
                    Grow, earn, and get real-world experience while making an
                    impact on your campus.
                </p>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {ITEMS.map((x) => (
                        <Card
                            key={x.title}
                            hover
                            padding='lg'
                            className='h-full'
                        >
                            <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600'>
                                <x.icon className='w-6 h-6' />
                            </div>
                            <h3 className='mt-4 text-lg font-semibold text-neutral-900'>
                                {x.title}
                            </h3>
                            <p className='mt-2 text-neutral-600'>{x.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
