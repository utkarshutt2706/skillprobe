// src/app/mentorship/page.tsx
import {
    BenefitsMentor,
    CTABandMentorship,
    DashboardFeatures,
    FAQMentor,
    HeroMentorship,
    RequirementsMentor,
    StepsMentor,
    SuccessStoriesMentor,
    SupportResourcesMentor,
} from '@/components/sections/mentorship';

export const metadata = {
    title: 'Mentorship | Share Expertise, Inspire Learners, Earn Revenue',
    description:
        'Create sessions, earn revenue, and grow your impact with Skillprobe’s mentorship platform.',
};

export default function MentorshipPage() {
    return (
        <>
            <HeroMentorship />
            <BenefitsMentor />
            <DashboardFeatures />
            <StepsMentor />
            <SuccessStoriesMentor />
            <RequirementsMentor />
            <SupportResourcesMentor />
            <FAQMentor />
            <CTABandMentorship />
        </>
    );
}
