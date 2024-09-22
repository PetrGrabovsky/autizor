'use client';

import clsx from 'clsx';
import Logo from './logo';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileNav } from '@/store/slices/ui-slice';

export default function Header() {
  const dispatch = useAppDispatch();
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  const handleMenuButtonClick = () => dispatch(toggleMobileNav());

  return (
    <header className="fixed inset-0 h-fit w-full bg-backgroundSecondary">
      <div
        className={clsx(
          isMobileNavOpen ? 'h-screen' : 'h-16',
          'container overflow-hidden transition-all duration-300 ease-in-out'
        )}
      >
        <div className="flex h-16 items-center justify-between">
          <h1 className="sr-only">AUTIZOR</h1>
          <Logo />
          <button onClick={handleMenuButtonClick} className="h-7 w-7">
            {isMobileNavOpen ? <FiX className="h-full w-full" /> : <FiMenu className="h-full w-full" />}
          </button>
        </div>
        <nav
          className={clsx(
            isMobileNavOpen ? 'opacity-100' : 'opacity-0',
            'flex h-full items-center justify-center transition-all duration-300 ease-in-out'
          )}
        >
          <ul className="flex h-full flex-col items-center justify-center">
            <li>ODKAZ 1</li>
            <li>ODKAZ 2</li>
            <li>ODKAZ 3</li>
            <li>ODKAZ 4</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
