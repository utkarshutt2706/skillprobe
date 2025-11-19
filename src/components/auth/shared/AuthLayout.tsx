type AuthLayoutProps = {
    leftPanel: React.ReactNode;
    rightPanel: React.ReactNode;
};

export default function AuthLayout({ leftPanel, rightPanel }: AuthLayoutProps) {
    return (
        <div className='flex min-h-screen'>
            {leftPanel}
            <main className='flex-1 flex items-center justify-center bg-neutral-50 p-6'>
                {rightPanel}
            </main>
        </div>
    );
}
