'use client';

import { useNavigation } from '@/hooks/useNavigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';

const Navbar = () => {
    const { links, isAuthenticated } = useNavigation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleResize = () => {
            // if viewport is now >= md, close menu
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                    <div className='flex items-center justify-between h-20'>
                        {/* Logo */}
                        <Link href='/' className='flex items-center space-x-2'>
                            <div className='relative w-40 h-12'>
                                <Image
                                    src='/logo.png'
                                    alt='Skillprobe Logo'
                                    fill
                                    className='object-contain'
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center space-x-8'>
                            {links.map((link) => (
                                <NavLink key={link.href} {...link} />
                            ))}
                        </div>

                        {/* Desktop Auth Buttons */}
                        <div className='hidden md:flex items-center space-x-4'>
                            <AuthButtons
                                isAuthenticated={isAuthenticated}
                                variant='horizontal'
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className='md:hidden p-2 text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 rounded-lg transition-colors'
                            aria-label='Open mobile menu'
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
