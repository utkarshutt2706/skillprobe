'use client';

import { Card } from '@/components/ui/card2';

export default function CAEarnings() {
    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Earn Money Online While You Learn
                </h2>
                <p className='mt-3 text-neutral-600 max-w-2xl'>
                    Transparent, performance-based earning model with bonuses.
                </p>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <Card padding='lg'>
                        <p className='text-sm text-neutral-600'>Per Signup</p>
                        <p className='mt-2 text-3xl font-bold text-neutral-900'>
                            ₹50
                        </p>
                        <p className='mt-2 text-neutral-600'>
                            + monthly bonus slabs
                        </p>
                    </Card>
                    <Card padding='lg'>
                        <p className='text-sm text-neutral-600'>
                            Conversion Bonus
                        </p>
                        <p className='mt-2 text-3xl font-bold text-neutral-900'>
                            ₹100 + 10%
                        </p>
                        <p className='mt-2 text-neutral-600'>
                            Per qualified conversion
                        </p>
                    </Card>
                    <Card padding='lg'>
                        <p className='text-sm text-neutral-600'>
                            Milestone Rewards
                        </p>
                        <p className='mt-2 text-3xl font-bold text-neutral-900'>
                            ₹—
                        </p>
                        <p className='mt-2 text-neutral-600'>
                            Leaderboard & achievement bonuses
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
