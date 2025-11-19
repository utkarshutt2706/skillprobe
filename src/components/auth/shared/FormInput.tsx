import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type FormInputProps = {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: string;
};

export default function FormInput({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    value,
    onChange,
    autoComplete,
}: FormInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className='w-full'>
            <label
                htmlFor={id}
                className='block text-sm font-semibold text-neutral-900 mb-2'
            >
                {label}
            </label>
            <div className='relative'>
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    required={required}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    className='w-full rounded-xl border-2 border-primary-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white'
                />
                {isPassword && (
                    <button
                        type='button'
                        onClick={() => setShowPassword((v) => !v)}
                        className='absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700'
                        aria-label={
                            showPassword ? 'Hide password' : 'Show password'
                        }
                    >
                        {showPassword ? (
                            <EyeOff className='w-5 h-5 cursor-pointer' />
                        ) : (
                            <Eye className='w-5 h-5 cursor-pointer' />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
