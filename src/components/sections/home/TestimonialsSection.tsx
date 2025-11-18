// src/components/sections/home/TestimonialsSection.tsx
import TestimonialsGrid, {
    Testimonial,
} from '@/components/feedback/TestimonialsGrid';

const testimonials: Testimonial[] = [
    {
        quote: 'Skillprobe gave me the platform to connect with aspiring developers. The process is smooth, and the dashboard makes mentoring truly effortless.',
        name: 'Siddhant Jain',
        role: 'Senior Software Developer',
        org: 'Skillprobe',
        rating: 5,
        badge: 'Mentor',
    },
    {
        quote: 'The mentor tools on Skillprobe are exactly what professionals need. I can manage sessions, provide feedback, and track mentee progress easily.',
        name: 'Abdul Samad Kirmani',
        role: 'Software Developer',
        rating: 5,
        badge: 'Mentor',
    },
    {
        quote: 'Wonderful platform to connect with aspiring developers. The mentorship experience is a game-changer for both mentors and mentees.',
        name: 'Ruchika Singh',
        role: 'Business Analyst',
        rating: 4,
        badge: 'Mentor',
    },
    // add more as needed
];

export default function TestimonialsSection() {
    return (
        <TestimonialsGrid
            title='Loved by Mentors & Mentees'
            subtitle='See what our community has to say about their experience'
            items={testimonials}
            variant='card'
            columns={{ base: 1, md: 2, xl: 3 }}
            className='gradient-bg'
        />
    );
}
