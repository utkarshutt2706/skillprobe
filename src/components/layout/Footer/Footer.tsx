import { FOOTER_LINKS } from '@/lib/constants/footer-links';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from './FooterSection';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-neutral-900 text-neutral-300'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-14'>
                {/* Brand Section */}
                <div className='mb-10 md:mb-12 lg:mb-14'>
                    <div className='flex justify-center'>
                        <div className='relative w-40 h-12'>
                            <Image
                                src='/logo-white.png'
                                alt='Skillprobe Logo'
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>

                    <p className='mt-6 text-neutral-400 leading-relaxed max-w-xl md:max-w-2xl lg:max-w-3xl text-center mx-auto'>
                        Empowering learners to unlock their true potential
                        through personalized mentorship and verified
                        capabilities.
                    </p>

                    {/* Contact - stacked on mobile, centered on tablet */}
                    <div className='mt-6 flex flex-col gap-3 items-center'>
                        <a
                            href='mailto:contact@skillprobe.co.in'
                            className='inline-flex items-center gap-3 text-sm text-neutral-300 hover:text-primary-300 transition-colors'
                        >
                            <Mail size={18} className='text-primary-400' />
                            contact@skillprobe.co.in
                        </a>
                        <span className='inline-flex items-center gap-3 text-sm text-neutral-300'>
                            <Phone size={18} className='text-primary-400' />
                            +91 XXX XXX XXXX
                        </span>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-10'>
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
                <div className='mt-10 md:mt-12 lg:mt-12 pt-6 md:pt-8 border-t border-neutral-800'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-sm text-neutral-500'>
                            © {currentYear} Skillprobe. All rights reserved.
                        </p>
                        <div className='flex items-center gap-6'>
                            {FOOTER_LINKS.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='text-sm text-neutral-500 hover:text-primary-300 transition-colors'
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
