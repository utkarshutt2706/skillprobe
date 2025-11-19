import { CheckCircle2 } from 'lucide-react';
import type { AuthFeature } from '../types';

type AuthLeftPanelProps = {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: AuthFeature[];
    stats?: { value: string; label: string }[];
};

export default function AuthLeftPanel({
    badge,
    title,
    titleHighlight,
    description,
    features,
    stats = [],
}: AuthLeftPanelProps) {
    return (
        <aside className='hidden lg:flex lg:w-1/2 items-center bg-linear-to-br from-primary-600 via-primary-500 to-primary-700 p-8'>
            {/* Compact card container */}
            <div className='w-full max-w-lg h-fit mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-7 flex flex-col gap-5 shadow-2xl'>
                {/* Top Section */}
                <div>
                    <div className='inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 mb-4'>
                        <CheckCircle2 className='w-3.5 h-3.5 text-white' />
                        <span className='text-xs font-medium text-white'>
                            {badge}
                        </span>
                    </div>

                    <h1 className='text-2xl font-display font-bold text-white mb-3 leading-tight'>
                        {title} <br />
                        <span className='text-accent-orange-300'>
                            {titleHighlight}
                        </span>
                    </h1>
                    <p className='text-white/70 text-sm leading-relaxed'>
                        {description}
                    </p>
                </div>

                {/* Stats */}
                {stats.length > 0 && (
                    <div className='grid grid-cols-2 gap-3'>
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className='bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10'
                            >
                                <p className='text-xl font-bold text-white mb-0.5'>
                                    {stat.value}
                                </p>
                                <p className='text-xs text-white/70'>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Feature List - compact */}
                <div className='space-y-2.5'>
                    {features.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                className='flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10'
                            >
                                <div className='w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0'>
                                    <Icon className='w-4.5 h-4.5 text-white' />
                                </div>
                                <div className='min-w-0'>
                                    <p className='font-semibold text-white text-sm leading-tight'>
                                        {f.title}
                                    </p>
                                    <p className='text-xs text-white/70 leading-snug mt-0.5'>
                                        {f.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
