import TestimonialsGrid, {
    Testimonial,
} from '@/components/feedback/TestimonialsGrid';

const stories: Testimonial[] = [
    {
        quote: 'Skillprobe makes mentoring seamless. The booking workflow and reminders let me focus on delivering value.',
        name: 'Siddhant Jain',
        role: 'Senior Software Developer',
        badge: 'Mentor',
        rating: 5,
    },
    {
        quote: 'The dashboard and payouts are transparent. It’s easy to manage sessions and keep track of impact.',
        name: 'Abdul Samad Kirmani',
        role: 'Software Developer',
        badge: 'Mentor',
        rating: 4,
    },
];

export default function SuccessStoriesMentor() {
    return (
        <TestimonialsGrid
            title='Mentor Success Stories'
            subtitle='Real mentors. Real impact. Real growth.'
            items={stories}
            variant='card'
            columns={{ base: 1, md: 2 }}
            className='bg-neutral-50'
        />
    );
}
