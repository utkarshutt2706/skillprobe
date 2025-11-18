'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export type Testimonial = {
    id?: string | number;
    quote: string;
    name: string;
    role?: string;
    org?: string;
    avatarUrl?: string;
    rating?: 1 | 2 | 3 | 4 | 5; // optional 1–5
    badge?: string; // e.g., “Mentor”, “Student”, “Ambassador”
};

export type TestimonialsGridProps = {
    title?: string;
    subtitle?: string;
    items: Testimonial[];
    variant?: 'card' | 'compact' | 'gradient';
    columns?: { base?: 1 | 2; md?: 1 | 2 | 3; xl?: 1 | 2 | 3 | 4 };
    showQuoteIcon?: boolean;
    className?: string;
};

const Stars = ({ rating = 0 }: { rating?: number }) => {
    const r = Math.round(rating);
    return (
        <div
            className='flex items-center gap-0.5'
            aria-label={`${r} star rating`}
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={cn(
                        'w-4 h-4',
                        i < r
                            ? 'fill-accent-orange-500 text-accent-orange-500'
                            : 'fill-neutral-200 text-neutral-200'
                    )}
                    viewBox='0 0 20 20'
                >
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.954L10 0l2.946 5.956 6.564.954-4.755 4.635 1.123 6.545z' />
                </svg>
            ))}
        </div>
    );
};

export default function TestimonialsGrid({
    title,
    subtitle,
    items,
    variant = 'card',
    columns = { base: 1, md: 2, xl: 2 },
    showQuoteIcon = true,
    className,
}: TestimonialsGridProps) {
    const gridCols = cn(
        'grid gap-6',
        columns.base === 2 ? 'grid-cols-2' : 'grid-cols-1',
        columns.md === 2 && 'md:grid-cols-2',
        columns.md === 3 && 'md:grid-cols-3',
        columns.xl === 2 && 'xl:grid-cols-2',
        columns.xl === 3 && 'xl:grid-cols-3',
        columns.xl === 4 && 'xl:grid-cols-4'
    );

    return (
        <section className={cn('section-padding', className)}>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                {title && (
                    <>
                        <h2 className='text-3xl md:text-4xl font-display font-bold text-neutral-900'>
                            {title}
                        </h2>
                        {subtitle && (
                            <p className='mt-3 text-neutral-600 max-w-2xl'>
                                {subtitle}
                            </p>
                        )}
                    </>
                )}

                <div className={cn('mt-8', gridCols)}>
                    {items.map((t, i) => (
                        <motion.article
                            key={t.id ?? i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                                delay: i * 0.05,
                            }}
                            className={cn(
                                variant === 'card' &&
                                    'bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-shadow p-6 relative',
                                variant === 'compact' &&
                                    'bg-white rounded-xl border border-neutral-200 p-5',
                                variant === 'gradient' &&
                                    'rounded-2xl p-6 relative overflow-hidden border border-white/20 bg-gradient-to-br from-white to-neutral-50'
                            )}
                        >
                            {showQuoteIcon && (
                                <Quote
                                    className={cn(
                                        'absolute right-5 top-5 w-8 h-8',
                                        variant === 'gradient'
                                            ? 'text-primary-300/60'
                                            : 'text-primary-200'
                                    )}
                                />
                            )}

                            <div className='space-y-4'>
                                {typeof t.rating === 'number' && (
                                    <Stars rating={t.rating} />
                                )}

                                <p className='text-neutral-800 leading-relaxed'>
                                    “{t.quote}”
                                </p>

                                <div className='h-px bg-neutral-200' />

                                <div className='flex items-start gap-3'>
                                    {t.avatarUrl ? (
                                        <div className='relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 shrink-0'>
                                            <Image
                                                src={t.avatarUrl}
                                                alt={t.name}
                                                fill
                                                className='object-cover'
                                            />
                                        </div>
                                    ) : (
                                        <div className='w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold shrink-0 select-none'>
                                            {t.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')
                                                .slice(0, 2)}
                                        </div>
                                    )}

                                    <div className='min-w-0'>
                                        <p className='font-semibold text-neutral-900 truncate'>
                                            {t.name}
                                        </p>
                                        <p className='text-sm text-neutral-600 truncate'>
                                            {[t.role, t.org]
                                                .filter(Boolean)
                                                .join(' · ')}
                                        </p>
                                        {t.badge && (
                                            <span className='mt-1 inline-block text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary-700'>
                                                {t.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
