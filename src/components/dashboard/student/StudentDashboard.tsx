import GreetingHero from './components/GreetingHero';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import StatTiles from './components/StatTiles';
import UpcomingSessions from './components/UpcomingSessions';
import { mockActivities, mockSessions, mockStats } from './student.mock';

export default function StudentDashboard() {
    return (
        <div className='space-y-8'>
            <GreetingHero
                name='Utkarsh'
                roleBadge='Student'
                completedSessions={12}
            />

            <StatTiles stats={mockStats} />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2'>
                    <UpcomingSessions sessions={mockSessions} />
                </div>
                <div className='lg:col-span-1 space-y-6'>
                    <QuickActions />
                    <RecentActivity items={mockActivities} />
                </div>
            </div>
        </div>
    );
}
