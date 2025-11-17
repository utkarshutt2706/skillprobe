'use client';

import { motion } from 'framer-motion';
import { Award, Star, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            icon: Users,
            value: '100+',
            label: 'Expert Mentors',
            description: 'From top companies worldwide',
        },
        {
            icon: Award,
            value: '500+',
            label: 'Success Stories',
            description: 'Career transformations',
        },
        {
            icon: TrendingUp,
            value: '85%',
            label: 'Career Growth',
            description: 'Within 6 months',
        },
        {
            icon: Star,
            value: '4.9/5',
            label: 'Average Rating',
            description: 'From satisfied mentees',
        },
    ];

    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='text-center space-y-4'
                        >
                            <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50'>
                                <stat.icon className='w-8 h-8 text-primary-500' />
                            </div>
                            <div>
                                <p className='text-4xl font-bold text-neutral-900'>
                                    {stat.value}
                                </p>
                                <p className='text-lg font-semibold text-neutral-800 mt-2'>
                                    {stat.label}
                                </p>
                                <p className='text-sm text-neutral-600 mt-1'>
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
