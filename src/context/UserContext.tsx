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
    signOut: () => Promise<void>;
};

const Ctx = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    // TODO replace with real user from auth
    const defaultUser: User = {
        name: 'Utkarsh Srivastava',
        email: 'utkarsh@example.com',
        avatarUrl: undefined,
        roles: ['student', 'mentor', 'ambassador'],
    };

    const [user, setUser] = useState<User | null>(defaultUser);
    const [activeRole, setActiveRoleState] = useState<UserRole>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sp_active_role');
            if (
                saved === 'mentor' ||
                saved === 'ambassador' ||
                saved === 'student'
            ) {
                return saved;
            }
        }
        return 'student';
    });

    const setActiveRole = (r: UserRole) => {
        setActiveRoleState(r);
        if (typeof window !== 'undefined')
            localStorage.setItem('sp_active_role', r);
        // Optionally refresh server data
        // router.refresh(); // if using server components to fetch role-aware data
    };

    const signOut = async () => {
        // TODO call your signout endpoint/provider
        setUser(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('sp_active_role');
            // redirect to home or sign-in
            window.location.href = '/';
        }
    };

    const value = useMemo(
        () => ({ user, activeRole, setActiveRole, signOut }),
        [user, activeRole]
    );

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUser() {
    const v = useContext(Ctx);
    if (!v) throw new Error('useUser must be used within UserProvider');
    return v;
}
