import { useAppSelector } from '@/store/hooks';
import clsx from 'clsx';

export default function Footer() {
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  return (
    <footer
      className={clsx(
        isMobileNavOpen ? 'h-0' : 'h-10',
        'backgroundWithBlur smoothTransition flex items-center justify-center overflow-hidden'
      )}
    >
      <div
        className={clsx(
          isMobileNavOpen ? 'opacity-0' : 'opacity-100',
          'smoothTransition container flex items-center justify-between'
        )}
      >
        <p>Footer</p>
        <p>By Petr Grabovský</p>
      </div>
    </footer>
  );
}
