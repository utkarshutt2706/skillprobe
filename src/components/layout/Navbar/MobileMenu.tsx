'use client';

import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';
import { LogOut, UserIcon, X } from 'lucide-react';
import Link from 'next/link';
import RoleSwitcher from './RoleSwitcher';

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const { links, isAuthenticated, signOut, user } = useNavigation();

    if (!isOpen) return null;

    const handleSignOut = async () => {
        onClose();
        await signOut();
    };

    return (
        <div className='fixed inset-0 z-50 md:hidden'>
            {/* Backdrop */}
            <div
                className='fixed inset-0 bg-black/50 backdrop-blur-sm'
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className='fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl'>
                <div className='flex flex-col h-full'>
                    {/* Header */}
                    <div className='flex items-center justify-between p-6 border-b border-neutral-200'>
                        <h2 className='text-lg font-semibold text-neutral-900'>
                            Menu
                        </h2>
                        <button
                            onClick={onClose}
                            className='p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer'
                            aria-label='Close menu'
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* User Info (if logged in) */}
                    {user && (
                        <div className='px-6 py-4 border-b border-neutral-200 bg-neutral-50'>
                            <p className='font-semibold text-neutral-900'>
                                {user.name}
                            </p>
                            <p className='text-sm text-neutral-600'>
                                {user.email}
                            </p>
                        </div>
                    )}

                    <Link
                        href='/profile'
                        className='px-6 py-4 border-b border-neutral-200'
                        onClick={onClose}
                    >
                        <div className='flex items-center gap-3'>
                            <UserIcon className='w-4 h-4 text-neutral-700' />
                            <span className='text-sm text-neutral-800'>
                                View Profile
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <nav className='flex-1 overflow-y-auto p-6'>
                        <div className='space-y-2'>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                    className='block px-4 py-3 text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 rounded-lg transition-colors'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Role Switcher (only show when logged in) */}
                        {isAuthenticated && (
                            <div className='mt-6 pt-6 border-t border-neutral-200'>
                                <RoleSwitcher onRoleChange={onClose} />
                            </div>
                        )}
                    </nav>

                    {/* CTA Buttons */}
                    <div className='p-6 border-t border-neutral-200'>
                        {isAuthenticated ? (
                            <div className='space-y-3'>
                                <Button
                                    variant='outline'
                                    className='w-full border-red-600 text-red-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50'
                                    onClick={handleSignOut}
                                    leftIcon={<LogOut size={16} />}
                                >
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <div className='space-y-3'>
                                <Link href='/signin' onClick={onClose}>
                                    <Button
                                        variant='outline'
                                        className='w-full'
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href='/signup' onClick={onClose}>
                                    <Button
                                        variant='primary'
                                        className='w-full'
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
