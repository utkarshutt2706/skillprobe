import Link from 'next/link';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSectionProps {
    title: string;
    links: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className='font-display font-semibold text-white mb-4'>
                {title}
            </h3>
            <ul className='space-y-3'>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className='text-sm text-neutral-400 hover:text-primary-400 transition-colors'
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;
