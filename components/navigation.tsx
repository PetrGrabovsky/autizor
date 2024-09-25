import clsx from 'clsx';
import { navigationItems, NavigationItem } from '@/data/navigation-items';
import Link from 'next/link';
import Button from './button';
import { FiLogIn } from 'react-icons/fi';

interface NavigationProps {
  isMobileNavOpen: boolean;
  handleLinkClick: () => void;
}

export default function Navigation({ isMobileNavOpen, handleLinkClick }: NavigationProps) {
  return (
    <nav
      className={clsx(
        isMobileNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        'smoothTransition flex h-full flex-col items-center justify-center space-y-4'
      )}
    >
      <ul className="flex flex-col items-center justify-center">
        {navigationItems.map((item: NavigationItem) => (
          <li key={item.id} tabIndex={isMobileNavOpen ? 0 : -1}>
            <Link href={item.href} onClick={handleLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button text="Přihlásit se" onClick={() => {}} Icon={FiLogIn} />
    </nav>
  );
}
