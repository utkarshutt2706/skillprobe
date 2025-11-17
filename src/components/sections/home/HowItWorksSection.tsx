'use client';

import { motion } from 'framer-motion';
import { Calendar, Search, TrendingUp, Video } from 'lucide-react';

const HowItWorksSection = () => {
    const steps = [
        {
            icon: Search,
            title: 'Find Your Mentor',
            description:
                'Browse through our curated list of expert mentors and find the perfect match for your goals.',
            step: '01',
        },
        {
            icon: Calendar,
            title: 'Book a Session',
            description:
                'Choose a convenient time slot and book your personalized 1-on-1 mentorship session.',
            step: '02',
        },
        {
            icon: Video,
            title: 'Connect & Learn',
            description:
                'Join the video call, discuss your challenges, and get actionable insights from your mentor.',
            step: '03',
        },
        {
            icon: TrendingUp,
            title: 'Grow Your Career',
            description:
                'Apply what you learned, track your progress, and continue growing with ongoing support.',
            step: '04',
        },
    ];

    return (
        <section className='section-padding bg-white'>
            <div className='max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4'>
                        How It <span className='text-gradient'>Works</span>
                    </h2>
                    <p className='text-xl text-neutral-600 max-w-2xl mx-auto'>
                        Get started in minutes and transform your career with
                        expert guidance
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className='relative'
                        >
                            {/* Connection Line */}
                            {index < steps.length - 1 && (
                                <div className='hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-200 -z-10' />
                            )}

                            <div className='text-center space-y-4'>
                                <div className='relative inline-block'>
                                    <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto shadow-lg shadow-primary-500/30'>
                                        <step.icon className='w-10 h-10 text-white' />
                                    </div>
                                    <div className='absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-orange-500 text-white text-sm font-bold flex items-center justify-center'>
                                        {step.step}
                                    </div>
                                </div>

                                <h3 className='text-xl font-semibold text-neutral-900'>
                                    {step.title}
                                </h3>
                                <p className='text-neutral-600 leading-relaxed'>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
