export default function Loading() {
    return (
        <div className='pt-24 section-padding'>
            <div className='max-w-7xl mx-auto'>
                <div className='animate-pulse grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className='h-60 bg-neutral-100 rounded-xl'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
