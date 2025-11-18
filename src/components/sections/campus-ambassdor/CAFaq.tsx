'use client';

import { Accordion } from '@/components/ui/accordion';

const FAQ = [
    {
        id: '1',
        title: 'How long does the program last?',
        description: 'Semesters or academic year, with flexible renewals.',
    },
    {
        id: '2',
        title: 'Is there a joining fee?',
        description: 'No. It’s completely free to join.',
    },
    {
        id: '3',
        title: 'How are payouts tracked?',
        description: 'Through your unique code and dashboard reports.',
    },
    {
        id: '4',
        title: 'Can I add this to my resume?',
        description:
            'Yes — you’ll receive certificates and verifiable outcomes.',
    },
];

export default function CAFaq() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-3xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-6'>
                    Frequently Asked Questions
                </h2>
                <Accordion items={FAQ} />
            </div>
        </section>
    );
}
