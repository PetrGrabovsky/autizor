import { useAppDispatch } from '@/store/hooks';
import { throttle } from 'lodash';
import { useCallback, useEffect } from 'react';
import { setMobileView, setMobileNavOpen } from '@/store/slices/ui-slice';

const MOBILE_BREAKPOINT = 768;

export const useWindowResize = () => {
  const dispatch = useAppDispatch();

  const handleResize = useCallback(
    throttle(() => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      dispatch(setMobileView(isMobileView));

      if (!isMobileView) dispatch(setMobileNavOpen(false));
    }, 200),
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, [handleResize]);
};
