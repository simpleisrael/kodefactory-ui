import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Analytics',
    icon: 'nb-audio',
    link: '/pages/analytics',
    children: [
      {
        title: 'Recent Activities',
        link: '/pages/analytics/recent-activities',
      },
      {
        title: 'Summary',
        link: '/pages/analytics/summary',
      },
    ],
  },
  {
    title: 'Approvals',
    icon: 'nb-edit',
    link: '/pages/approvals',
    children: [
      {
        title: 'Pending Approvals',
        link: '/pages/approvals/pending',
      },
      {
        title: 'Completed Approvals',
        link: '/pages/approvals/completed',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    link: '/pages/setting',
    children: [
      {
        title: 'Manage User',
        link: '/pages/setting/user',
      },
      {
        title: 'Manage Role',
        link: '/pages/setting/role',
      },
      {
        title: 'Manage Authority',
        link: '/pages/setting/authority',
      },
    ],
  },
  {
    title: 'Configuration',
    icon: 'nb-list',
    link: '/pages/configuration',
    children: [
      {
        title: 'System Config',
        link: '/pages/configuration/system',
      },
      {
        title: 'Security Config',
        link: '/pages/configuration/security',
      },
    ],
  },
  {
    title: 'Profile',
    icon: 'nb-email',
    link: '/pages/profile',
    children: [
      {
        title: 'View Profile',
        link: '/pages/profile/view-profile',
      },
      {
        title: 'Change Password',
        link: '/pages/profile/change-password',
      },
    ],
  },
];
