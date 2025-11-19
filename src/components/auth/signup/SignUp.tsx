'use client';

import { Award, Briefcase, Video } from 'lucide-react';
import AuthLayout from '../shared/AuthLayout';
import AuthLeftPanel from '../shared/AuthLeftPanel';
import type { AuthFeature } from '../types';
import SignUpForm from './SignUpForm';

const FEATURES: AuthFeature[] = [
    {
        icon: Video,
        title: 'Live Interactive Classes',
        subtitle: 'Real-time learning with experts',
    },
    {
        icon: Award,
        title: 'Industry Certifications',
        subtitle: 'Recognized by top companies',
    },
    {
        icon: Briefcase,
        title: 'Career Support',
        subtitle: 'Job placement assistance',
    },
];

const STATS = [
    { value: '98%', label: 'Success Rate' },
    { value: '500+', label: 'Expert Mentors' },
];

export default function SignUp() {
    return (
        <AuthLayout
            leftPanel={
                <AuthLeftPanel
                    badge='Join 50,000+ Students'
                    title='Transform Your'
                    titleHighlight='Career Journey'
                    description='Learn from industry experts, get certified, and land your dream job with our comprehensive skill development platform.'
                    features={FEATURES}
                    stats={STATS}
                />
            }
            rightPanel={<SignUpForm />}
        />
    );
}
