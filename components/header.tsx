'use client';

import clsx from 'clsx';
import Logo from './logo';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setScrollDisabled, setMobileNavOpen } from '@/store/slices/ui-slice';
import { throttle } from 'lodash';
import { useCallback, useEffect } from 'react';
import Navigation from './navigation';

export default function Header() {
  const dispatch = useAppDispatch();
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);
  const isMobileView = useAppSelector((state) => state.ui.isMobileView);

  const handleMobileNavToggle = useCallback(
    throttle(() => {
      dispatch(setMobileNavOpen(!isMobileNavOpen));
      dispatch(setScrollDisabled(!isMobileNavOpen));
    }, 200),
    [dispatch, isMobileNavOpen]
  );

  const handleLinkClick = useCallback(() => {
    setTimeout(() => {
      dispatch(setMobileNavOpen(false));
      dispatch(setScrollDisabled(false));
    }, 200);
  }, [dispatch]);

  useEffect(() => {
    return () => handleMobileNavToggle.cancel();
  }, [handleMobileNavToggle]);

  return (
    <header className="backgroundWithBlur fixed inset-0 h-fit w-full">
      <div className={clsx(isMobileNavOpen ? 'h-screen' : 'h-14', 'smoothTransition container overflow-hidden')}>
        <div className="flex h-14 items-center justify-between">
          <Logo className="h-6" />
          {isMobileView && (
            <button onClick={handleMobileNavToggle} className="h-7 w-7" aria-expanded={isMobileNavOpen}>
              {isMobileNavOpen ? <FiX className="h-full w-full" /> : <FiMenu className="h-full w-full" />}
            </button>
          )}
        </div>
        <Navigation isMobileNavOpen={isMobileNavOpen} handleLinkClick={handleLinkClick} />
      </div>
    </header>
  );
}
