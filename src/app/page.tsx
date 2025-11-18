'use client';

import {
    CTASection,
    FeaturesSection,
    HeroSection,
    HowItWorksSection,
    StatsSection,
    TestimonialsSection,
} from '@/components/sections/home';

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}
