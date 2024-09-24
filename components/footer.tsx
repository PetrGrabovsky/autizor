import { useAppSelector } from '@/store/hooks';
import clsx from 'clsx';

export default function Footer() {
  const isMobileNavOpen = useAppSelector((state) => state.ui.isMobileNavOpen);

  return (
    <footer className="flex h-10 items-end justify-center overflow-hidden">
      <div
        className={clsx(
          isMobileNavOpen ? 'h-0' : 'h-10',
          'smoothTransition backgroundWithBlur flex w-full items-center justify-center'
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
      </div>
    </footer>
  );
}
