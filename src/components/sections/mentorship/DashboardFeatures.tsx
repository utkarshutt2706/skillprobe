'use client';

import { Card } from '@/components/ui/card2';
import { LayoutGrid, Users, Video, Wallet } from 'lucide-react';

const ITEMS = [
    {
        icon: LayoutGrid,
        title: 'Session & Offer Tools',
        points: [
            'Build 1‑on‑1 or small-group sessions',
            'Define duration, price, prerequisites',
            'Publish drafts when ready',
        ],
    },
    {
        icon: Users,
        title: 'Learner Management',
        points: [
            'Track bookings and history',
            'Respond to messages quickly',
            'Manage availability easily',
        ],
    },
    {
        icon: Video,
        title: 'Live Session Workflow',
        points: [
            'Calendar & reminders',
            'Integrated video links',
            'Structured agendas & notes',
        ],
    },
    {
        icon: Wallet,
        title: 'Revenue Dashboard',
        points: [
            'Payout summaries',
            'Earnings by session',
            'Transparent fees & reports',
        ],
    },
];

export default function DashboardFeatures() {
    return (
        <section className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-3'>
                    Mentor Dashboard Features
                </h2>
                <p className='text-neutral-600 mb-10 max-w-2xl'>
                    Explore the tools that help you scale your impact and manage
                    your practice.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {ITEMS.map((it) => (
                        <Card
                            key={it.title}
                            hover
                            padding='lg'
                            className='h-full'
                        >
                            <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600'>
                                <it.icon className='w-6 h-6' />
                            </div>
                            <h3 className='mt-4 text-lg font-semibold text-neutral-900'>
                                {it.title}
                            </h3>
                            <ul className='mt-3 text-neutral-600 space-y-2'>
                                {it.points.map((p) => (
                                    <li key={p} className='pl-4 relative'>
                                        <span className='absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary-400' />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
