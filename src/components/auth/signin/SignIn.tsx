'use client';

import { Award, Briefcase, Video } from 'lucide-react';
import AuthLayout from '../shared/AuthLayout';
import AuthLeftPanel from '../shared/AuthLeftPanel';
import type { AuthFeature } from '../types';
import SignInForm from './SignInForm';

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

export default function SignIn() {
    return (
        <AuthLayout
            leftPanel={
                <AuthLeftPanel
                    badge='Welcome Back!'
                    title='Continue Your'
                    titleHighlight='Learning Journey'
                    description='Access your courses, track progress, and connect with mentors to accelerate your career growth.'
                    features={FEATURES}
                    stats={STATS}
                />
            }
            rightPanel={<SignInForm />}
        />
    );
}
