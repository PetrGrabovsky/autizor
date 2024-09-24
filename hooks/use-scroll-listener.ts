import { useAppDispatch } from '@/store/hooks';
import { useCallback, useEffect } from 'react';
import { throttle } from 'lodash';
import { setScrolled } from '@/store/slices/ui-slice';

const SCROLL_BREAKPOINT = 100;

export const useScrollListener = () => {
  const dispatch = useAppDispatch();

  const handleScroll = useCallback(
    throttle(() => {
      const isScrolled = window.scrollY > SCROLL_BREAKPOINT;
      dispatch(setScrolled(isScrolled));
    }, 200),
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);
};
