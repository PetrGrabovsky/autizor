'use client';

import clsx from 'clsx';
import Logo from './logo';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileNav } from '@/store/slices/ui-slice';
import { defaultTransition } from '@/utils/styles';

export default function Header() {
  const dispatch = useAppDispatch();
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  const handleMenuButtonClick = () => dispatch(toggleMobileNav());

  return (
    <header className="fixed inset-0 h-fit w-full bg-backgroundSecondary">
      <div className={clsx(isMobileNavOpen ? 'h-screen' : 'h-14', defaultTransition, 'container overflow-hidden')}>
        <div className="flex h-14 items-center justify-between">
          <Logo className="h-6" />
          <button onClick={handleMenuButtonClick} className="h-7 w-7">
            {isMobileNavOpen ? <FiX className="h-full w-full" /> : <FiMenu className="h-full w-full" />}
          </button>
        </div>
        <nav
          className={clsx(
            isMobileNavOpen ? 'opacity-100' : 'opacity-0',
            defaultTransition,
            'flex h-full items-center justify-center'
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
