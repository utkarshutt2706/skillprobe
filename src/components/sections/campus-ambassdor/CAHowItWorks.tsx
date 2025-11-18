'use client';

const STEPS = [
    { n: '1', t: 'Apply', d: 'Share your details and motivation.' },
    {
        n: '2',
        t: 'Get Your Code',
        d: 'Receive your unique referral code and dashboard access.',
    },
    {
        n: '3',
        t: 'Promote',
        d: 'Share opportunities and events with your peers.',
    },
    {
        n: '4',
        t: 'Track Referrals',
        d: 'Monitor signups and conversions in real time.',
    },
    {
        n: '5',
        t: 'Earn & Grow',
        d: 'Get payouts, bonuses, and resume-worthy experience.',
    },
];

export default function CAHowItWorks() {
    return (
        <section id='how-it-works' className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    How It Works
                </h2>
                <ol className='mt-8 grid lg:grid-cols-5 gap-6'>
                    {STEPS.map((s) => (
                        <li
                            key={s.n}
                            className='bg-white rounded-2xl border border-neutral-200 p-5'
                        >
                            <div className='w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold'>
                                {s.n}
                            </div>
                            <p className='mt-3 font-semibold text-neutral-900'>
                                {s.t}
                            </p>
                            <p className='text-neutral-600'>{s.d}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
