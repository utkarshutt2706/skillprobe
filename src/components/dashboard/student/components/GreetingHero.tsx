import { BadgeCheck } from 'lucide-react';

export default function GreetingHero({
    name,
    roleBadge,
    completedSessions,
}: {
    name: string;
    roleBadge: string;
    completedSessions: number;
}) {
    return (
        <section className='rounded-3xl p-6 md:p-8 bg-linear-to-r from-primary-600 to-primary-500 text-white shadow-[0_20px_60px_-20px_rgba(94,23,235,0.45)]'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                <div>
                    <p className='text-sm/6 text-white/80'>{`Good evening, ${name}!`}</p>
                    <h1 className='mt-1 text-2xl md:text-3xl font-display font-bold'>
                        Ready to continue your learning adventure?
                    </h1>
                    <div className='mt-4 flex flex-wrap gap-3'>
                        <span className='inline-flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1.5'>
                            <BadgeCheck className='w-4 h-4' />
                            {roleBadge}
                        </span>
                        <span className='inline-flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1.5'>
                            {completedSessions} Sessions Completed
                        </span>
                    </div>
                </div>

                <div className='w-[120px] h-[120px] rounded-2xl bg-white/15 shadow-inner' />
            </div>
        </section>
    );
}
