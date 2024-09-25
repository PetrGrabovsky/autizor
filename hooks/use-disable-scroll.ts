import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';

export const useDisableScroll = () => {
  const isScrollDisabled = useAppSelector((state) => state.ui.isScrollDisabled);

  useEffect(() => {
    document.body.style.overflow = isScrollDisabled ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isScrollDisabled]);
};
