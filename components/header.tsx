'use client';

import clsx from 'clsx';
import Logo from './logo';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileNav } from '@/store/slices/ui-slice';
import { defaultTransition } from '@/utils/styles';
import { throttle } from 'lodash';
import { useCallback, useEffect } from 'react';

export default function Header() {
  const dispatch = useAppDispatch();
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);
  const isMobileView = useAppSelector((state) => state.ui.isMobileView);

  const handleMobileNavToggle = useCallback(
    throttle(() => {
      dispatch(toggleMobileNav());
    }, 200),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      handleMobileNavToggle.cancel();
    };
  }, [handleMobileNavToggle]);

  return (
    <header className="fixed inset-0 h-fit w-full bg-backgroundSecondary">
      <div className={clsx(isMobileNavOpen ? 'h-screen' : 'h-14', defaultTransition, 'container overflow-hidden')}>
        <div className="flex h-14 items-center justify-between">
          <Logo className="h-6" />
          {isMobileView && (
            <button onClick={handleMobileNavToggle} className="h-7 w-7" aria-expanded={isMobileNavOpen}>
              {isMobileNavOpen ? <FiX className="h-full w-full" /> : <FiMenu className="h-full w-full" />}
            </button>
          )}
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
