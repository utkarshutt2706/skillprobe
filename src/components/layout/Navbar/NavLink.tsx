'use client';

import { cn } from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from './types';

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                'text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-200 relative',
                isActive && 'text-primary-500'
            )}
        >
            {label}
            {isActive && (
                <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500' />
            )}
        </Link>
    );
};

export default NavLink;
