// src/components/sections/mentorship/FAQMentor.tsx
'use client';

const FAQ = [
    {
        q: 'Do I need prior mentoring experience?',
        a: 'Not strictly, but professional experience and clear communication are essential.',
    },
    {
        q: 'How are payouts handled?',
        a: 'Earnings are summarized in your dashboard and paid out on a regular schedule.',
    },
    {
        q: 'What formats can I offer?',
        a: '1‑on‑1 sessions, small groups, and structured guidance with defined outcomes.',
    },
    {
        q: 'Can I set my own price?',
        a: 'Yes. You control pricing, availability, and session duration.',
    },
];

export default function FAQMentor() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-3xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900 mb-6'>
                    Frequently Asked Questions
                </h2>

                <div className='divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden'>
                    {FAQ.map((f) => (
                        <details key={f.q} className='group'>
                            <summary className='cursor-pointer list-none px-5 py-4 flex items-center justify-between'>
                                <span className='font-medium text-neutral-900'>
                                    {f.q}
                                </span>
                                <span className='ml-4 text-neutral-400 group-open:rotate-45 transition-transform text-xl select-none'>
                                    +
                                </span>
                            </summary>
                            <div className='px-5 pb-5 text-neutral-700'>
                                {f.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
