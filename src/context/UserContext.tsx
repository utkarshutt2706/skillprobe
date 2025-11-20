'use client';

import type { UserRole } from '@/types/roles';
import { createContext, useContext, useMemo, useState } from 'react';

type User = {
    name: string;
    email: string;
    avatarUrl?: string;
    roles: UserRole[]; // e.g., ["student","mentor"]
};

type UserContextType = {
    user: User | null;
    activeRole: UserRole;
    setActiveRole: (r: UserRole) => void;
    signIn: (
        email: string,
        password: string
    ) => Promise<{ success: boolean; error?: string }>;
    signOut: () => Promise<void>;
};

const Ctx = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    // Initialize user from localStorage (only on client)
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window === 'undefined') return null;

        const stored = localStorage.getItem('sp_user');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch {
                return null;
            }
        }
        return null;
    });

    // Initialize role from localStorage (only on client)
    const [activeRole, setActiveRoleState] = useState<UserRole>(() => {
        if (typeof window === 'undefined') return 'student';

        const saved = localStorage.getItem('sp_active_role');
        if (
            saved === 'mentor' ||
            saved === 'ambassador' ||
            saved === 'student'
        ) {
            return saved;
        }
        return 'student';
    });

    const signIn = async (email: string, password: string) => {
        if (email === 'demo@skillprobe.co.in' && password === 'password123') {
            const demoUser: User = {
                name: 'Utkarsh Srivastava',
                email: 'demo@skillprobe.co.in',
                avatarUrl: undefined,
                roles: ['student', 'mentor', 'ambassador'],
            };

            setUser(demoUser);
            if (typeof window !== 'undefined') {
                localStorage.setItem('sp_user', JSON.stringify(demoUser));
            }

            return { success: true };
        }

        return { success: false, error: 'Invalid email or password.' };
    };

    const setActiveRole = (r: UserRole) => {
        setActiveRoleState(r);
        if (typeof window !== 'undefined') {
            localStorage.setItem('sp_active_role', r);
        }
    };

    const signOut = async () => {
        setUser(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('sp_user');
            localStorage.removeItem('sp_active_role');
            window.location.href = '/';
        }
    };

    const value = useMemo(
        () => ({
            user,
            activeRole,
            setActiveRole,
            signIn,
            signOut,
        }),
        [user, activeRole]
    );

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUser() {
    const v = useContext(Ctx);
    if (!v) throw new Error('useUser must be used within UserProvider');
    return v;
}
