import { mentors } from '../data';

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params) {
    const { id } = await params;
    const m = mentors.find((x) => x.id === id);
    return {
        title: m ? `${m.name} | Mentor Profile` : 'Mentor | Skillprobe',
        description: m
            ? `${m.name} — ${m.title} at ${m.company}. Book a 1-on-1 mentorship session.`
            : 'Mentor profile at Skillprobe.',
    };
}

export default async function MentorProfile({ params }: Params) {
    const { id } = await params;
    const m = mentors.find((x) => x.id === id);
    if (!m) {
        return (
            <div className='pt-24 section-padding'>
                <div className='max-w-3xl mx-auto'>
                    <h1 className='text-3xl font-display font-bold text-neutral-900'>
                        Mentor not found
                    </h1>
                    <p className='mt-2 text-neutral-600'>
                        Please return to the mentors list and try again.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='pt-24 section-padding'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-3xl font-display font-bold text-neutral-900'>
                    {m.name}
                </h1>
                <p className='text-neutral-600 mt-1'>
                    {m.title} · {m.company} · {m.yearsOfExperience} yrs
                    experience
                </p>
                <p className='mt-6 text-neutral-700'>{m.bio}</p>
                {/* Build full profile layout here: availability, reviews, sessions, etc. */}
            </div>
        </div>
    );
}
