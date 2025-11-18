export type UserRole = 'student' | 'mentor' | 'ambassador';

export const DASHBOARD_ROLES: UserRole[] = ['student', 'mentor', 'ambassador'];

export function normalizeRole(role?: string): UserRole {
    if (role === 'mentor' || role === 'ambassador') return role;
    return 'student';
}
