import { cn } from '@/lib/cn';
import React from 'react';
import { ButtonProps } from './types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isLoading = false,
            leftIcon,
            rightIcon,
            className,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary:
                'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5',
            secondary:
                'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-50 active:bg-primary-100',
            accent: 'bg-accent-orange-500 text-white hover:bg-accent-orange-600 active:bg-accent-orange-700 shadow-lg shadow-accent-orange-500/30',
            ghost: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
            outline:
                'border-2 border-neutral-300 text-neutral-700 hover:border-primary-500 hover:text-primary-500',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm h-10',
            md: 'px-6 py-3 text-base h-12',
            lg: 'px-8 py-4 text-lg h-14',
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <span className='animate-spin mr-2'>⏳</span>
                ) : leftIcon ? (
                    <span className='mr-2 flex items-center'>{leftIcon}</span>
                ) : null}
                {children}
                {rightIcon && (
                    <span className='ml-2 flex items-center'>{rightIcon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
