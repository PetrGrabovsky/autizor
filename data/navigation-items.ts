export interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 1, label: 'ODKAZ 1', href: '/' },
  { id: 2, label: 'ODKAZ 2', href: '/' },
  { id: 3, label: 'ODKAZ 3', href: '/' },
  { id: 4, label: 'ODKAZ 4', href: '/' },
  { id: 5, label: 'Kontakt', href: '/contact' },
];
