'use client';

import { Card } from '@/components/ui/card2';
import { BarChart3, CreditCard, Headphones, Megaphone } from 'lucide-react';

const BENEFITS = [
    {
        icon: CreditCard,
        title: 'Integrated Payments',
        desc: 'Seamless, secure payments for your sessions with transparent reporting.',
    },
    {
        icon: BarChart3,
        title: 'Session Analytics',
        desc: 'Track session volume, ratings, and revenue to grow effectively.',
    },
    {
        icon: Megaphone,
        title: 'Marketing Support',
        desc: 'Reach relevant learners with curated placements and discovery.',
    },
    {
        icon: Headphones,
        title: 'Technical Support',
        desc: 'Reliable support for scheduling, video, and session workflows.',
    },
];

export default function BenefitsMentor() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-3'>
                    What You Get as a Mentor
                </h2>
                <p className='text-neutral-600 mb-10 max-w-2xl'>
                    Dedicated tools to help you deliver great sessions and build
                    a sustainable mentorship practice.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {BENEFITS.map((b) => (
                        <Card
                            key={b.title}
                            hover
                            padding='lg'
                            className='h-full'
                        >
                            <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600'>
                                <b.icon className='w-6 h-6' />
                            </div>
                            <h3 className='mt-4 text-lg font-semibold text-neutral-900'>
                                {b.title}
                            </h3>
                            <p className='mt-2 text-neutral-600'>{b.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
