'use client';

import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants/nav-links';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { MobileMenuProps } from './types';

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
                    />

                    {/* Menu */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        className='fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden'
                    >
                        <div className='flex flex-col h-full'>
                            {/* Header */}
                            <div className='flex items-center justify-between p-6 border-b border-neutral-200'>
                                <h2 className='text-xl font-display font-semibold text-neutral-900'>
                                    Menu
                                </h2>
                                <button
                                    onClick={onClose}
                                    className='p-2 hover:bg-neutral-100 rounded-lg transition-colors'
                                >
                                    <X size={24} className='text-neutral-700' />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className='flex-1 px-6 py-8 space-y-6 overflow-y-auto'>
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={onClose}
                                        className='block text-lg font-medium text-neutral-700 hover:text-primary-500 transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* CTA Buttons */}
                            <div className='p-6 space-y-3 border-t border-neutral-200'>
                                <Link
                                    href='/login'
                                    onClick={onClose}
                                    className='block'
                                >
                                    <Button
                                        variant='outline'
                                        className='w-full'
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link
                                    href='/signup'
                                    onClick={onClose}
                                    className='block'
                                >
                                    <Button
                                        variant='primary'
                                        className='w-full'
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
