import { useAppSelector } from '@/store/hooks';
import { defaultTransition } from '@/utils/styles';
import clsx from 'clsx';

export default function Footer() {
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  return (
    <footer
      className={clsx(
        isMobileNavOpen ? 'h-0' : 'h-10',
        defaultTransition,
        'flex items-center justify-center overflow-hidden bg-backgroundSecondary'
      )}
    >
      <div
        className={clsx(
          isMobileNavOpen ? 'opacity-0' : 'opacity-100',
          defaultTransition,
          'container flex items-center justify-between'
        )}
      >
        <p>Footer</p>
        <p>By Petr Grabovský</p>
      </div>
    </footer>
  );
}
