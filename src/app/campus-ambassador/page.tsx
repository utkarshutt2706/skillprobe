import {
    CABenefits,
    CACTABand,
    CAEarnings,
    CAFaq,
    CAHero,
    CAHowItWorks,
    CARequirements,
    CASuccessStories,
    CASupportResources,
    CATips,
    CAWhyJoin,
} from '@/components/sections/campus-ambassdor';

export const metadata = {
    title: 'Campus Ambassador Program | Skillprobe',
    description:
        'Earn while you learn. Become a Skillprobe Campus Ambassador and grow your network, skills, and income.',
};

export default function CampusAmbassadorPage() {
    return (
        <>
            <CAHero />
            <CAWhyJoin />
            <CAHowItWorks />
            <CAEarnings />
            <CABenefits />
            <CASupportResources />
            <CARequirements />
            <CASuccessStories />
            <CATips />
            <CAFaq />
            <CACTABand />
        </>
    );
}
