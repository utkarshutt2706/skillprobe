'use client';

import { useUser } from '@/context/UserContext';
import { LogOut, User as UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RoleSwitcher from './RoleSwitcher';

export default function ProfileMenu() {
    const { user, signOut } = useUser();
    const [open, setOpen] = useState(false);

    if (!user) return null;

    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className='relative'>
            <button
                onClick={() => setOpen((o) => !o)}
                className='h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300'
                aria-haspopup='menu'
                aria-expanded={open}
                aria-label='User menu'
            >
                {user.avatarUrl ? (
                    <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        className='h-10 w-10 rounded-full object-cover'
                    />
                ) : (
                    <span className='text-sm font-semibold'>{initials}</span>
                )}
            </button>

            {open && (
                <>
                    {/* Backdrop for closing */}
                    <div
                        className='fixed inset-0 z-40'
                        onClick={() => setOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <div
                        role='menu'
                        aria-label='User menu'
                        className='absolute right-0 mt-2 w-72 rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden z-50'
                    >
                        {/* Header */}
                        <div className='px-4 py-3 border-b border-neutral-200'>
                            <p className='font-semibold text-neutral-900'>
                                {user.name}
                            </p>
                            <p className='text-sm text-neutral-600'>
                                {user.email}
                            </p>
                        </div>

                        {/* View Profile */}
                        <Link
                            href='/profile'
                            role='menuitem'
                            className='block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-200'
                        >
                            <div className='flex items-center gap-3'>
                                <UserIcon className='w-4 h-4 text-neutral-700' />
                                <span className='text-sm text-neutral-800'>
                                    View Profile
                                </span>
                            </div>
                        </Link>

                        {/* Role Switcher */}
                        <div className='px-4 py-3 border-b border-neutral-200'>
                            <RoleSwitcher
                                variant='compact'
                                onRoleChange={() => setOpen(false)}
                            />
                        </div>

                        {/* Sign out */}
                        <button
                            role='menuitem'
                            onClick={() => signOut()}
                            className='cursor-pointer w-full px-4 py-3 text-left hover:bg-neutral-50'
                        >
                            <div className='flex items-center gap-3 text-red-600'>
                                <LogOut className='w-4 h-4' />
                                <span className='text-sm'>Sign Out</span>
                            </div>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
