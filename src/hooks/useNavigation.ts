import { useUser } from '@/context/UserContext';
import { POST_LOGIN_LINKS } from '@/lib/constants/post-login-links';
import { PRE_LOGIN_LINKS } from '@/lib/constants/pre-login-links';

export function useNavigation() {
    const { user, signOut } = useUser();
    const links = user ? POST_LOGIN_LINKS : PRE_LOGIN_LINKS;

    return {
        user,
        links,
        signOut,
        isAuthenticated: !!user,
    };
}
