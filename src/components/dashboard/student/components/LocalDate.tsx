'use client';

export default function LocalDate({ iso }: { iso: string }) {
    return <>{new Date(iso).toLocaleString()}</>;
}
