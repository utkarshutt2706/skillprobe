import { BookOpen, Megaphone, Video } from 'lucide-react';

const ACTIONS = [
    {
        icon: Video,
        label: 'Join Live Session',
        desc: 'Access your live classes',
        href: '/live-sessions',
    },
    {
        icon: BookOpen,
        label: 'Browse Courses',
        desc: 'Explore available courses',
        href: '/courses',
    },
    {
        icon: Megaphone,
        label: 'Become Ambassador',
        desc: 'Earn by referring friends',
        href: '/campus-ambassador',
    },
];

export default function QuickActions() {
    return (
        <section className='bg-white rounded-2xl border border-neutral-200 shadow-sm'>
            <div className='px-4 py-3 border-b border-neutral-200'>
                <h3 className='font-semibold text-neutral-900'>
                    Quick Actions
                </h3>
            </div>
            <ul className='p-3 space-y-3'>
                {ACTIONS.map((a) => (
                    <li key={a.label}>
                        <a
                            href={a.href}
                            className='flex items-center gap-3 rounded-xl p-3 hover:bg-neutral-50 transition-colors'
                        >
                            <span className='w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center'>
                                <a.icon className='w-5 h-5' />
                            </span>
                            <div className='min-w-0'>
                                <p className='font-medium text-neutral-900'>
                                    {a.label}
                                </p>
                                <p className='text-sm text-neutral-600'>
                                    {a.desc}
                                </p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
