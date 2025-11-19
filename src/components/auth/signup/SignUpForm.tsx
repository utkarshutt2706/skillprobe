'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FormInput from '../shared/FormInput';

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        referralCode: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters.');
            setLoading(false);
            return;
        }

        // TODO: Replace with actual signup API call
        console.log('Sign up data:', formData);

        // Demo: redirect to dashboard after "signup"
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 1000);
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
                    Create Account
                </h2>
                <p className='text-neutral-600 mt-2'>
                    Already have an account?{' '}
                    <Link
                        href='/signin'
                        className='text-primary-600 hover:underline font-medium'
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
                {/* First Name & Last Name */}
                <div className='grid grid-cols-2 gap-4'>
                    <FormInput
                        id='firstName'
                        name='firstName'
                        label='First Name'
                        type='text'
                        placeholder='First name'
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        autoComplete='given-name'
                    />
                    <FormInput
                        id='lastName'
                        name='lastName'
                        label='Last Name'
                        type='text'
                        placeholder='Last name'
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete='family-name'
                    />
                </div>

                {/* Email */}
                <FormInput
                    id='email'
                    name='email'
                    label='Email Address'
                    type='email'
                    placeholder='Enter your email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete='email'
                />

                {/* Phone */}
                <FormInput
                    id='phone'
                    name='phone'
                    label='Phone Number'
                    type='tel'
                    placeholder='Enter your phone number'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete='tel'
                />

                {/* Password */}
                <FormInput
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    placeholder='Create a password'
                    required
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete='new-password'
                />

                {/* Confirm Password */}
                <FormInput
                    id='confirmPassword'
                    name='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    placeholder='Confirm your password'
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete='new-password'
                />

                {/* Referral Code (Optional) */}
                <div>
                    <label
                        htmlFor='referralCode'
                        className='block text-sm font-semibold text-neutral-900 mb-2'
                    >
                        Referral Code{' '}
                        <span className='text-neutral-500 font-normal'>
                            (Optional)
                        </span>
                    </label>
                    <input
                        id='referralCode'
                        name='referralCode'
                        type='text'
                        value={formData.referralCode}
                        onChange={handleChange}
                        placeholder='Enter referral code'
                        className='w-full rounded-xl border-2 border-primary-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white'
                    />
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
                    Create Account
                </Button>

                {/* Terms */}
                <p className='text-xs text-center text-neutral-500'>
                    By creating an account, you agree to our{' '}
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
