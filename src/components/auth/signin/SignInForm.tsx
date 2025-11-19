'use client';

import { Button } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FormInput from '../shared/FormInput';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Demo auth
        if (email === 'demo@skillprobe.co.in' && pass === 'password123') {
            window.location.href = '/dashboard';
        } else {
            setError('Invalid email or password.');
        }
        setLoading(false);
    }

    return (
        <div className='w-full max-w-md'>
            <div className='flex flex-col items-center mb-8'>
                <Image
                    src='/logo.png'
                    width={160}
                    height={48}
                    alt='Skillprobe'
                    className='mb-4'
                />
                <h2 className='text-3xl font-display font-bold text-neutral-900'>
                    Welcome Back
                </h2>
                <p className='text-neutral-600 mt-2'>
                    Don&apos;t have an account?{' '}
                    <Link
                        href='/signup'
                        className='text-primary-600 hover:underline font-medium'
                    >
                        Create one here
                    </Link>
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
                <FormInput
                    id='email'
                    name='email'
                    label='Email Address'
                    type='email'
                    placeholder='Enter your email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='email'
                />

                <FormInput
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete='current-password'
                />

                {/* Remember me & Forgot password */}
                <div className='flex items-center justify-between'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type='checkbox'
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className='w-4 h-4 accent-primary-600 rounded'
                        />
                        <span className='text-sm text-neutral-700'>
                            Remember me
                        </span>
                    </label>
                    <Link
                        href='/forgot-password'
                        className='text-sm text-primary-600 hover:underline font-medium'
                    >
                        Forgot password?
                    </Link>
                </div>

                {/* Error */}
                {error && (
                    <div className='text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2 border border-red-200'>
                        {error}
                    </div>
                )}

                {/* Submit */}
                <Button
                    variant='primary'
                    size='lg'
                    className='w-full'
                    type='submit'
                    isLoading={loading}
                >
                    Sign In
                </Button>

                {/* Terms */}
                <p className='text-xs text-center text-neutral-500'>
                    By signing in, you agree to our{' '}
                    <Link
                        href='/terms'
                        className='text-primary-600 hover:underline'
                    >
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                        href='/privacy'
                        className='text-primary-600 hover:underline'
                    >
                        Privacy Policy
                    </Link>
                </p>
            </form>
        </div>
    );
}
