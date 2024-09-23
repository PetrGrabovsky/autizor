import { ReactNode, useEffect, useCallback } from 'react';
import Header from './header';
import Footer from './footer';
import { useAppDispatch } from '@/store/hooks';
import { setMobileView, setScrolled } from '@/store/slices/ui-slice';
import { throttle } from 'lodash';

const MOBILE_BREAKPOINT = 768;
const SCROLL_BREAKPOINT = 100;

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const dispatch = useAppDispatch();

  const handleResize = useCallback(
    throttle(() => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      dispatch(setMobileView(isMobileView));
    }, 200),
    [dispatch]
  );

  const handleScroll = useCallback(
    throttle(() => {
      const isScrolled = window.scrollY > SCROLL_BREAKPOINT;
      dispatch(setScrolled(isScrolled));
    }, 200),
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();

      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [handleResize, handleScroll]);

  return (
    <>
      <Header />
      <main className="container mb-2 mt-20 flex-grow">{children}</main>
      <Footer />
    </>
  );
}
