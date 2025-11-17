export interface NavLinkProps {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}
