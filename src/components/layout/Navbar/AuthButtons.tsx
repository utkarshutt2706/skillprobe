import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ProfileMenu from './ProfileMenu';

type AuthButtonsProps = {
    isAuthenticated: boolean;
    variant?: 'horizontal' | 'vertical';
    onNavigate?: () => void; // For mobile menu to close on navigation
};

export default function AuthButtons({
    isAuthenticated,
    variant = 'horizontal',
    onNavigate,
}: AuthButtonsProps) {
    if (isAuthenticated) {
        return variant === 'horizontal' ? (
            <ProfileMenu />
        ) : (
            <div className='space-y-3'>
                <Link href='/profile' onClick={onNavigate}>
                    <Button variant='outline' className='w-full'>
                        View Profile
                    </Button>
                </Link>
            </div>
        );
    }

    // Not authenticated - show sign in/up buttons
    if (variant === 'vertical') {
        return (
            <div className='space-y-3'>
                <Link href='/signin' onClick={onNavigate}>
                    <Button variant='outline' className='w-full'>
                        Sign In
                    </Button>
                </Link>
                <Link href='/signup' onClick={onNavigate}>
                    <Button variant='primary' className='w-full'>
                        Get Started
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Link href='/signin'>
                <Button variant='ghost'>Sign In</Button>
            </Link>
            <Link href='/signup'>
                <Button variant='primary'>Get Started</Button>
            </Link>
        </>
    );
}
