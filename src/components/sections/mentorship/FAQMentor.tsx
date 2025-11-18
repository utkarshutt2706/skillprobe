// src/components/sections/mentorship/FAQMentor.tsx
'use client';

import { Accordion, AccordionItem } from '@/components/ui/accordion';

const FAQ: AccordionItem[] = [
    {
        id: '1',
        title: 'Do I need prior mentoring experience?',
        description:
            'Not strictly, but professional experience and clear communication are essential.',
    },
    {
        id: '2',
        title: 'How are payouts handled?',
        description:
            'Earnings are summarized in your dashboard and paid out on a regular schedule.',
    },
    {
        id: '3',
        title: 'What formats can I offer?',
        description:
            '1‑on‑1 sessions, small groups, and structured guidance with defined outcomes.',
    },
    {
        id: '4',
        title: 'Can I set my own price?',
        description:
            'Yes. You control pricing, availability, and session duration.',
    },
];

export default function FAQMentor() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-3xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-6'>
                    Frequently Asked Questions
                </h2>

                <Accordion items={FAQ}></Accordion>
            </div>
        </section>
    );
}
