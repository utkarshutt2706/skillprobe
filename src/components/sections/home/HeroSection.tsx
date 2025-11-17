'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className='relative min-h-screen gradient-bg flex items-center overflow-hidden pt-20'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className='absolute top-20 right-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl'
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className='absolute bottom-20 left-10 w-96 h-96 bg-accent-teal-300/20 rounded-full blur-3xl'
                />
            </div>

            <div className='relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='space-y-8'
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className='inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2'
                        >
                            <Sparkles className='w-4 h-4 text-primary-500' />
                            <span className='text-sm font-medium text-primary-600'>
                                Free 1-on-1 Interview Prep Available
                            </span>
                        </motion.div>

                        <h1 className='text-5xl lg:text-7xl font-display font-bold leading-tight'>
                            Grow your skills,{' '}
                            <span className='text-gradient'>
                                define your future
                            </span>
                        </h1>

                        <p className='text-xl text-neutral-600 leading-relaxed'>
                            Connect with experienced mentors, showcase
                            real-world skills, and unlock meaningful career
                            opportunities through personalized guidance.
                        </p>

                        {/* Fixed Button Container */}
                        <div className='flex flex-wrap items-center gap-4'>
                            <Link href='/signup'>
                                <Button
                                    variant='primary'
                                    size='lg'
                                    className='h-14'
                                >
                                    <span className='flex items-center gap-2'>
                                        Get Started Free
                                        <ArrowRight className='w-5 h-5' />
                                    </span>
                                </Button>
                            </Link>
                            <Link href='/mentors'>
                                <Button
                                    variant='secondary'
                                    size='lg'
                                    className='h-14'
                                >
                                    Explore Mentors
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Hero Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='relative'
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className='relative w-full h-[500px] lg:h-[600px]'
                        >
                            {/* Replace with actual hero image */}
                            <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-teal-500 flex items-center justify-center'>
                                <div className='text-center text-white p-8'>
                                    <div className='text-6xl mb-4'>🎯</div>
                                    <p className='text-2xl font-bold'>
                                        Your Success Journey
                                    </p>
                                    <p className='text-lg opacity-90 mt-2'>
                                        Starts Here
                                    </p>
                                </div>
                            </div>

                            {/* Floating Achievement Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className='absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-neutral-200'
                            >
                                <div className='flex items-center space-x-3'>
                                    <div className='w-12 h-12 rounded-full bg-success-100 flex items-center justify-center'>
                                        <span className='text-2xl'>✓</span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-neutral-900'>
                                            Session Completed
                                        </p>
                                        <p className='text-sm text-neutral-600'>
                                            +50 XP earned
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                                className='absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-neutral-200'
                            >
                                <div className='flex items-center space-x-3'>
                                    <div className='w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center'>
                                        <span className='text-2xl'>🎓</span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-neutral-900'>
                                            New Mentor Match
                                        </p>
                                        <p className='text-sm text-neutral-600'>
                                            95% compatibility
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
