import { ComponentType } from 'react';

export type Stat = {
    id: string;
    label: string;
    value: string | number;
    sublabel?: string;
    icon: ComponentType<{ className?: string }>;
    accent?: string; // tailwind color class suffix
};

export default function StatTiles({ stats }: { stats: Stat[] }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {stats.map((s) => {
                const Icon = s.icon;
                return (
                    <div
                        key={s.id}
                        className='bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm'
                    >
                        <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                s.accent ?? 'bg-primary-50 text-primary-600'
                            }`}
                        >
                            <Icon className='w-5 h-5' />
                        </div>
                        <p className='mt-3 text-sm text-neutral-500'>
                            {s.label}
                        </p>
                        <p className='text-2xl font-bold text-neutral-900'>
                            {s.value}
                        </p>
                        {s.sublabel && (
                            <p className='text-xs text-neutral-500 mt-1'>
                                {s.sublabel}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
