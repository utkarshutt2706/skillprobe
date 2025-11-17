import { cn } from '@/lib/cn';
import React from 'react';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({
    children,
    className,
    hover = false,
    padding = 'md',
    ...props
}) => {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                'bg-white rounded-2xl shadow-sm border border-neutral-200 transition-all duration-300',
                hover && 'hover:shadow-xl hover:-translate-y-1',
                paddingStyles[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
