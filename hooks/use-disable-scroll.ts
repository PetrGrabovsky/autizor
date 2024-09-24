import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';

export const useDisableScroll = () => {
  const isScrollDisabled = useAppSelector((state) => state.ui.isScrollDisabled);

  useEffect(() => {
    if (isScrollDisabled) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isScrollDisabled]);
};
