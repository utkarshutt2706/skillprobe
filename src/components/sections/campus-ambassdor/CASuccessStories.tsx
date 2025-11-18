'use client';

import TestimonialsGrid, {
    Testimonial,
} from '@/components/feedback/TestimonialsGrid';

const ITEMS: Testimonial[] = [
    {
        quote: 'Being an ambassador helped me learn outreach and event planning, and I built a strong network across campuses.',
        name: 'Aditi Gupta',
        role: 'Campus Ambassador',
        badge: 'Ambassador',
        rating: 5,
    },
    {
        quote: 'The dashboard and tracking made it easy to see my progress and payouts. Highly recommend the program.',
        name: 'Rahul Verma',
        role: 'Campus Ambassador',
        badge: 'Ambassador',
        rating: 5,
    },
];

export default function CASuccessStories() {
    return (
        <TestimonialsGrid
            title='Success Stories'
            subtitle='Real ambassadors. Real impact. Real growth.'
            items={ITEMS}
            variant='card'
            columns={{ base: 1, md: 2 }}
            className='bg-white'
        />
    );
}
