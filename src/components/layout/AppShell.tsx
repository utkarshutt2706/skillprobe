'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Hide header/footer on auth pages
    const isAuthPage =
        pathname?.startsWith('/signin') ||
        pathname?.startsWith('/signup') ||
        pathname?.startsWith('/forgot-password');

    return (
        <>
            {!isAuthPage && <Navbar />}
            {children}
            {!isAuthPage && <Footer />}
        </>
    );
}
