'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Siddhant Jain',
            role: 'Senior Software Developer',
            company: 'Skillprobe',
            image: '👨‍💻',
            rating: 5,
            text: 'Skillprobe gave me the platform to connect with aspiring developers. The process is smooth, and the dashboard makes mentoring truly effortless.',
        },
        {
            name: 'Abdul Samad Kirmani',
            role: 'Software Developer',
            company: 'Tech Corp',
            image: '👨‍💼',
            rating: 5,
            text: 'The mentor tools on Skillprobe are exactly what professionals need. I can manage sessions, provide feedback, and track mentee progress easily.',
        },
        {
            name: 'Priya Sharma',
            role: 'Product Manager',
            company: 'Innovation Labs',
            image: '👩‍💼',
            rating: 5,
            text: 'As a mentee, Skillprobe connected me with the perfect mentor who helped me transition into product management. Life-changing experience!',
        },
    ];

    return (
        <section className='section-padding gradient-bg'>
            <div className='max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4'>
                        Loved by{' '}
                        <span className='text-gradient'>Mentors & Mentees</span>
                    </h2>
                    <p className='text-xl text-neutral-600 max-w-2xl mx-auto'>
                        See what our community has to say about their experience
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                hover
                                padding='lg'
                                className='h-full relative'
                            >
                                <Quote className='absolute top-6 right-6 w-8 h-8 text-primary-200' />

                                <div className='space-y-4'>
                                    <div className='flex items-center gap-1'>
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className='w-5 h-5 fill-accent-orange-500 text-accent-orange-500'
                                                />
                                            )
                                        )}
                                    </div>

                                    <p className='text-neutral-700 leading-relaxed'>
                                        &quot;{testimonial.text}&quot;
                                    </p>

                                    <div className='flex items-center space-x-4 pt-4 border-t border-neutral-200'>
                                        <div className='w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-2xl'>
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <p className='font-semibold text-neutral-900'>
                                                {testimonial.name}
                                            </p>
                                            <p className='text-sm text-neutral-600'>
                                                {testimonial.role}
                                            </p>
                                            <p className='text-xs text-neutral-500'>
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
