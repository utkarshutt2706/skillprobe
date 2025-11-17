export interface NavLink {
    label: string;
    href: string;
}

export interface StatItem {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}
