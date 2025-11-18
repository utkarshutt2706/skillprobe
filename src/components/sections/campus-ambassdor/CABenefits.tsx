'use client';

import { Card } from '@/components/ui/Card';
import { Award, GraduationCap, Megaphone, Users } from 'lucide-react';

const BENEFITS = [
    {
        icon: Award,
        title: 'Certificates & Perks',
        desc: 'Stand out with verifiable achievements.',
    },
    {
        icon: Megaphone,
        title: 'Marketing Playbook',
        desc: 'Ready-to-use assets for campaigns.',
    },
    {
        icon: Users,
        title: 'Community Access',
        desc: 'Peer group, events, and exclusive channels.',
    },
    {
        icon: GraduationCap,
        title: 'Mentor Guidance',
        desc: 'Periodic sessions from Skillprobe mentors.',
    },
];

export default function CABenefits() {
    return (
        <section className='section-padding bg-primary-600/10'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Ambassador Benefits
                </h2>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
