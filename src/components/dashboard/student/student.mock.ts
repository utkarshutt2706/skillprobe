// src/components/dashboard/student/student.mock.ts
import {
    CalendarCheck,
    CheckCircle2,
    GraduationCap,
    PlayCircle,
} from 'lucide-react';
import { type ActivityItem } from './components/RecentActivity';
import { type Stat } from './components/StatTiles';
import { type Session } from './components/UpcomingSessions';

export const mockStats: Stat[] = [
    {
        id: 'total',
        label: 'Total Courses',
        value: 5,
        sublabel: 'Enrolled courses',
        icon: GraduationCap,
    },
    {
        id: 'active',
        label: 'Active Sessions',
        value: '2',
        sublabel: 'Currently running',
        icon: PlayCircle,
    },
    {
        id: 'upcoming',
        label: 'Upcoming Sessions',
        value: '3',
        sublabel: 'Scheduled sessions',
        icon: CalendarCheck,
    },
    {
        id: 'completed',
        label: 'Completed Sessions',
        value: '12',
        sublabel: '85% completion',
        icon: CheckCircle2,
    },
];

export const mockSessions: Session[] = [
    {
        id: '1',
        title: 'Introduction to React Hooks',
        track: 'Advanced React Development',
        date: new Date().toISOString(),
        timeLabel: 'In 1h 55m',
        status: 'Scheduled',
        cta: { label: 'Join →', href: '/live-sessions/1' },
    },
    {
        id: '2',
        title: 'Database Design Principles',
        track: 'Full Stack Development',
        date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
        timeLabel: 'In 23h 55m',
        status: 'Scheduled',
        cta: { label: 'Join →', href: '/live-sessions/2' },
    },
];

export const mockActivities: ActivityItem[] = [
    {
        id: 'a1',
        label: 'Completed "Advanced React Patterns" session',
        when: '2 hours ago',
    },
    { id: 'a2', label: 'Joined "Database Design" course', when: '1 day ago' },
    {
        id: 'a3',
        label: 'Submitted assignment for "Full Stack Development"',
        when: '3 days ago',
    },
];
