import { Clock } from 'lucide-react';

export type ActivityItem = {
    id: string;
    label: string;
    when: string; // friendly, e.g., "2 hours ago"
};

export default function RecentActivity({ items }: { items: ActivityItem[] }) {
    return (
        <section className='bg-white rounded-2xl border border-neutral-200 shadow-sm'>
            <div className='px-4 py-3 border-b border-neutral-200'>
                <h3 className='font-semibold text-neutral-900'>
                    Recent Activity
                </h3>
            </div>
            <ul className='p-3 space-y-3'>
                {items.map((it) => (
                    <li key={it.id} className='flex items-start gap-3'>
                        <span className='w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center'>
                            <Clock className='w-5 h-5' />
                        </span>
                        <div>
                            <p className='text-sm text-neutral-800'>
                                {it.label}
                            </p>
                            <p className='text-xs text-neutral-500'>
                                {it.when}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
