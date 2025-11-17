import { FOOTER_LINKS } from '@/lib/constants';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from './FooterSection';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-neutral-900 text-neutral-300'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
                    {/* Brand Section */}
                    <div className='lg:col-span-2 space-y-6'>
                        <Link href='/' className='inline-block'>
                            <div className='relative w-40 h-12'>
                                <Image
                                    src='/logo-white.png'
                                    alt='Skillprobe Logo'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </Link>
                        <p className='text-neutral-400 leading-relaxed max-w-md'>
                            Empowering learners to unlock their true potential
                            through personalized mentorship and verified
                            capabilities.
                        </p>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3 text-sm'>
                                <Mail size={18} className='text-primary-400' />
                                <a
                                    href='mailto:contact@skillprobe.co.in'
                                    className='hover:text-primary-400 transition-colors'
                                >
                                    contact@skillprobe.co.in
                                </a>
                            </div>
                            <div className='flex items-center space-x-3 text-sm'>
                                <Phone size={18} className='text-primary-400' />
                                <span>+91 XXX XXX XXXX</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <FooterSection
                        title='Product'
                        links={FOOTER_LINKS.product}
                    />
                    <FooterSection
                        title='Company'
                        links={FOOTER_LINKS.company}
                    />
                    <FooterSection
                        title='Resources'
                        links={FOOTER_LINKS.resources}
                    />
                </div>

                {/* Bottom Bar */}
                <div className='mt-16 pt-8 border-t border-neutral-800'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <p className='text-sm text-neutral-500'>
                            © {currentYear} Skillprobe. All rights reserved.
                        </p>
                        <div className='flex items-center space-x-6'>
                            {FOOTER_LINKS.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='text-sm text-neutral-500 hover:text-primary-400 transition-colors'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
