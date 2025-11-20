'use client';

import { useUser } from '@/context/UserContext';
import { cn } from '@/lib/cn';
import type { UserRole } from '@/types/roles';

const roles: { value: UserRole; label: string }[] = [
    { value: 'student', label: 'Student' },
    { value: 'mentor', label: 'Mentor' },
    { value: 'ambassador', label: 'Campus Ambassador' },
];

type RoleSwitcherProps = {
    onRoleChange?: () => void; // Callback after role changes (e.g., close menu)
    variant?: 'default' | 'compact'; // Style variant
};

export default function RoleSwitcher({
    onRoleChange,
    variant = 'default',
}: RoleSwitcherProps) {
    const { user, activeRole, setActiveRole } = useUser();

    if (!user) return null;

    const handleRoleChange = (role: UserRole) => {
        setActiveRole(role);
        onRoleChange?.();
        window.location.reload();
    };

    return (
        <div className={cn(variant === 'compact' ? 'space-y-2' : 'space-y-3')}>
            <p className='text-xs font-semibold text-neutral-500 uppercase tracking-wide'>
                Switch Dashboard
            </p>
            <div className='grid grid-cols-1 gap-2'>
                {roles
                    .filter((r) => user.roles.includes(r.value))
                    .map((r) => (
                        <label
                            key={r.value}
                            className={cn(
                                'flex items-center justify-between rounded-lg border cursor-pointer transition-colors',
                                variant === 'compact'
                                    ? 'px-3 py-2'
                                    : 'px-4 py-3',
                                activeRole === r.value
                                    ? 'border-primary-300 bg-primary-50'
                                    : 'border-neutral-300 hover:bg-neutral-50'
                            )}
                        >
                            <span className='text-sm text-neutral-800'>
                                {r.label}
                            </span>
                            <input
                                type='radio'
                                name='activeRole'
                                value={r.value}
                                checked={activeRole === r.value}
                                onChange={() => handleRoleChange(r.value)}
                                className='accent-primary-600 h-4 w-4'
                                aria-label={`Switch to ${r.label} dashboard`}
                            />
                        </label>
                    ))}
            </div>
        </div>
    );
}
