'use client';

const TIPS = [
    {
        n: '01',
        t: 'Be Authentic',
        d: 'Share your real perspective; authenticity builds trust.',
    },
    {
        n: '02',
        t: 'Target the Right Audience',
        d: 'Focus on clubs, cohorts, and groups that benefit most.',
    },
    {
        n: '03',
        t: 'Use Multiple Channels',
        d: 'Mix reels, groups, posters, and peer invites for reach.',
    },
];

export default function CATips() {
    return (
        <section className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Tips for Success
                </h2>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {TIPS.map((x) => (
                        <div
                            key={x.n}
                            className='bg-white rounded-2xl border border-neutral-200 p-6'
                        >
                            <p className='w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold'>
                                {x.n}
                            </p>
                            <p className='mt-2 font-semibold text-neutral-900'>
                                {x.t}
                            </p>
                            <p className='text-neutral-600'>{x.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
