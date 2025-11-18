'use client';

import StudentDashboard from '@/components/dashboard/student/StudentDashboard';
import { useUser } from '@/context/UserContext';

export default function DashboardPage() {
    const { activeRole } = useUser();

    return (
        <div className='pt-24 section-padding'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                {activeRole === 'student' && <StudentDashboard />}
                {/* role === "mentor" && <MentorDashboard /> */}
                {/* role === "ambassador" && <AmbassadorDashboard /> */}
            </div>
        </div>
    );
}
