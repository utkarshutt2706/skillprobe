import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}
