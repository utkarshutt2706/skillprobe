'use client';

import { useUser } from '@/context/UserContext';
import { cn } from '@/lib/cn';
import type { UserRole } from '@/types/roles';
import { LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';

const roles: { value: UserRole; label: string }[] = [
    { value: 'student', label: 'Student' },
    { value: 'mentor', label: 'Mentor' },
    { value: 'ambassador', label: 'Campus Ambassador' },
];

export default function ProfileMenu() {
    const { user, activeRole, setActiveRole, signOut } = useUser();
    const [open, setOpen] = useState(false);

    if (!user) {
        // Fallback: show Sign In (public pages)
        return (
            <a
                href='/signin'
                className='inline-flex items-center h-10 px-4 rounded-lg bg-primary-600 text-white hover:bg-primary-700'
            >
                Sign In
            </a>
        );
    }

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
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className='h-10 w-10 rounded-full object-cover'
                    />
                ) : (
                    <span className='text-sm font-semibold'>{initials}</span>
                )}
            </button>

            {open && (
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
                        <p className='text-sm text-neutral-600'>{user.email}</p>
                    </div>

                    {/* View Profile */}
                    <a
                        href='/profile'
                        role='menuitem'
                        className='block px-4 py-3 hover:bg-neutral-50'
                    >
                        <div className='flex items-center gap-3'>
                            <UserIcon className='w-4 h-4 text-neutral-700' />
                            <span className='text-sm text-neutral-800'>
                                View Profile
                            </span>
                        </div>
                    </a>

                    {/* Role switcher */}
                    <div className='px-4 py-3 border-t border-neutral-200'>
                        <p className='text-xs font-semibold text-neutral-500'>
                            Dashboard
                        </p>
                        <div className='mt-2 grid grid-cols-1 gap-2'>
                            {roles
                                .filter((r) => user.roles.includes(r.value))
                                .map((r) => (
                                    <label
                                        key={r.value}
                                        className={cn(
                                            'flex items-center justify-between rounded-lg border px-3 py-2 cursor-pointer transition-colors',
                                            activeRole === r.value
                                                ? 'border-primary-300 bg-primary-50'
                                                : 'border-neutral-300 hover:bg-neutral-50'
                                        )}
                                    >
                                        <span className='text-sm text-neutral-800'>
                                            {r.label}
                                        </span>
                                        <input
                                            type='radio'
                                            name='activeRole'
                                            value={r.value}
                                            checked={activeRole === r.value}
                                            onChange={() => {
                                                setOpen(false);
                                                // Update role context; refresh data if needed
                                                setActiveRole(r.value);
                                                // If server data depends on role, trigger a client refresh:
                                                if (
                                                    typeof window !==
                                                    'undefined'
                                                )
                                                    window.location.reload();
                                            }}
                                            className='accent-primary-600 h-4 w-4'
                                            aria-label={`Switch to ${r.label} dashboard`}
                                        />
                                    </label>
                                ))}
                        </div>
                    </div>

                    {/* Sign out */}
                    <button
                        role='menuitem'
                        onClick={() => signOut()}
                        className='w-full px-4 py-3 text-left hover:bg-neutral-50 border-t border-neutral-200'
                    >
                        <div className='flex items-center gap-3 text-red-600'>
                            <LogOut className='w-4 h-4' />
                            <span className='text-sm'>Sign Out</span>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}
