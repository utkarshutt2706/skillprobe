import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { UserProvider } from '@/context/UserContext';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Skillprobe - Grow your skills, define your future',
    description:
        'Connect with experienced mentors, showcase real-world skills, and unlock meaningful career opportunities.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-neutral-50`}
            >
                <UserProvider>
                    <Navbar />
                    <main className='min-h-screen'>{children}</main>
                    <Footer />
                </UserProvider>
            </body>
        </html>
    );
}
