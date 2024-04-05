import { BarChart, CalendarMinus2, CircleDollarSign, Folder, FolderOpen, Hand, MousePointerClick } from 'lucide-react';

export const navigationItems = [
    { name: 'Classes', href: '/classes', current: false },
    { name: 'One-on-one', href: '/one-on-one', current: false },
    { name: 'Packages', href: '/packages', current: true },
    { name: 'Courses', href: '/courses', current: false },
];

const ICON_SIZE = 18;

export const sidenavItems = [
    { 
        name: 'My Calendar', 
        href: '/dashboard/my-calendar', 
        current: false,
        icon: <CalendarMinus2 className="sidenav_icon" size={ICON_SIZE} />
    },
    { 
        name: 'My Bookings', 
        href: '/dashboard/my-bookings', 
        current: true,
        icon: <MousePointerClick className="sidenav_icon" size={ICON_SIZE} />,
    },
    { 
        name: 'Attendance History', 
        href: '/dashboard/attendance-history', 
        current: false,
        icon: <Hand className="sidenav_icon" size={ICON_SIZE} />
    },
    { 
        name: 'Billing History', 
        href: '/dashboard/billing-history', 
        current: false,
        icon: <CircleDollarSign className="sidenav_icon" size={ICON_SIZE} /> 
    },
    { 
        name: 'My Files', 
        href: '/dashboard/my-files', 
        current: false,
        icon: <Folder className="sidenav_icon" size={ICON_SIZE} /> 
    },
    { 
        name: 'My Courses', 
        href: '/dashboard/my-courses', 
        current: false,
        icon: <FolderOpen className="sidenav_icon" size={ICON_SIZE} /> 
    },
    { 
        name: 'Grades', 
        href: '/dashboard/grades', 
        current: false,
        icon: <BarChart className="sidenav_icon" size={ICON_SIZE} /> 
    },
];