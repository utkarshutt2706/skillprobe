import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';
import LocalDate from './LocalDate';

export type Session = {
    id: string;
    title: string;
    track: string; // e.g., Advanced React
    date: string; // ISO
    timeLabel: string; // e.g., In 1h 55m
    status: 'Scheduled' | 'Live soon';
    cta: { label: string; href: string };
};

export default function UpcomingSessions({
    sessions,
}: {
    sessions: Session[];
}) {
    return (
        <section className='bg-white rounded-2xl border border-neutral-200 shadow-sm'>
            <div className='flex items-center justify-between border-b border-neutral-200 p-4'>
                <div className='flex items-center gap-2'>
                    <CalendarClock className='w-5 h-5 text-primary-600' />
                    <h3 className='font-semibold text-neutral-900'>
                        Upcoming Live Sessions
                    </h3>
                </div>
                <a
                    href='/live-sessions'
                    className='text-sm text-primary-600 hover:text-primary-700'
                >
                    View all →
                </a>
            </div>

            <ul className='divide-y divide-neutral-200'>
                {sessions.map((s) => (
                    <li key={s.id} className='p-4 flex items-center gap-4'>
                        <div className='w-8 h-8 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center text-sm font-semibold'>
                            {s.id}
                        </div>
                        <div className='min-w-0 flex-1'>
                            <p className='font-medium text-neutral-900 truncate'>
                                {s.title}
                            </p>
                            <p className='text-xs text-neutral-500'>
                                {s.track} • <LocalDate iso={s.date} />
                            </p>
                            <div className='mt-1 text-xs text-amber-600'>
                                {s.timeLabel}
                            </div>
                        </div>
                        <span className='text-xs bg-emerald-50 text-emerald-700 rounded-full px-2 py-1 border border-emerald-200'>
                            {s.status}
                        </span>
                        <a href={s.cta.href} className='w-[104px]'>
                            <Button
                                variant='primary'
                                size='sm'
                                className='w-full'
                            >
                                {s.cta.label}
                            </Button>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
