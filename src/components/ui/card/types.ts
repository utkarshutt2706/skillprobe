import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
