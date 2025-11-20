'use client';

export default function LocalDate({ iso }: { iso: string }) {
    return (
        <span suppressHydrationWarning>{new Date(iso).toLocaleString()}</span>
    );
}
