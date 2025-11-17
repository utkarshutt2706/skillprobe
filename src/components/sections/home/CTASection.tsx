'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
    return (
        <section className='section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-accent-teal-500 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className='max-w-4xl mx-auto text-center relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='space-y-8'
                >
                    <div className='inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2'>
                        <Sparkles className='w-4 h-4 text-white' />
                        <span className='text-sm font-medium text-white'>
                            Limited Time Offer
                        </span>
                    </div>

                    <h2 className='text-4xl lg:text-5xl font-display font-bold text-white'>
                        Ready to Transform Your Career?
                    </h2>

                    <p className='text-xl text-white/90 max-w-2xl mx-auto'>
                        Join thousands of professionals who have accelerated
                        their growth with expert mentorship. Get your first
                        session free!
                    </p>

                    <div className='flex flex-wrap gap-4 justify-center pt-4'>
                        <Link href='/signup'>
                            <Button
                                variant='secondary'
                                size='lg'
                                rightIcon={<ArrowRight />}
                                className='bg-white text-primary-600 hover:bg-neutral-50 shadow-xl'
                            >
                                Start Your Journey
                            </Button>
                        </Link>
                        <Link href='/mentors'>
                            <Button
                                variant='ghost'
                                size='lg'
                                className='text-white border-2 border-white hover:bg-white/10'
                            >
                                Browse Mentors
                            </Button>
                        </Link>
                    </div>

                    <p className='text-sm text-white/80'>
                        No credit card required • Free interview prep session
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
