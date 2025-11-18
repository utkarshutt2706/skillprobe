'use client';

import { Card } from '@/components/ui/card2';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Calendar,
    Shield,
    TrendingUp,
    UserCheck,
    Video,
} from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: UserCheck,
            title: 'Expert Mentor Matching',
            description:
                'Get paired with industry professionals tailored to your career goals and interests.',
            color: 'primary',
        },
        {
            icon: Calendar,
            title: 'Flexible Scheduling',
            description:
                'Book sessions at your convenience with mentors across different time zones.',
            color: 'accent-teal',
        },
        {
            icon: Video,
            title: '1-on-1 Video Sessions',
            description:
                'Private, personalized mentorship calls for career advice and skill-building.',
            color: 'accent-pink',
        },
        {
            icon: TrendingUp,
            title: 'Progress Tracking',
            description:
                'Monitor your growth, session history, and goals through an intuitive dashboard.',
            color: 'success',
        },
        {
            icon: BookOpen,
            title: 'Skill-Based Learning',
            description:
                'Follow curated paths designed by mentors based on in-demand industry skills.',
            color: 'accent-orange',
        },
        {
            icon: Shield,
            title: 'Verified Mentors',
            description:
                'All mentors are vetted professionals from top companies with proven expertise.',
            color: 'info',
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: Record<string, string> = {
            primary: 'bg-primary-50 text-primary-500',
            'accent-teal': 'bg-accent-teal-50 text-accent-teal-600',
            'accent-pink': 'bg-accent-pink-50 text-accent-pink-600',
            success: 'bg-success-50 text-success-600',
            'accent-orange': 'bg-accent-orange-50 text-accent-orange-600',
            info: 'bg-info-50 text-info-600',
        };
        return colorMap[color] || colorMap.primary;
    };

    return (
        <section className='section-padding bg-neutral-50'>
            <div className='max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4'>
                        Everything You Need to{' '}
                        <span className='text-gradient'>Succeed</span>
                    </h2>
                    <p className='text-xl text-neutral-600 max-w-2xl mx-auto'>
                        Powerful features designed to accelerate your career
                        growth through personalized mentorship
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card hover padding='lg' className='h-full'>
                                <div className='space-y-4'>
                                    <div
                                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${getColorClasses(
                                            feature.color
                                        )}`}
                                    >
                                        <feature.icon className='w-7 h-7' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-neutral-900'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-neutral-600 leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
