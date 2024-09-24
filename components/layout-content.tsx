import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import { useWindowResize } from '@/hooks/use-window-resize';
import { useScrollListener } from '@/hooks/use-scroll-listener';
import { useDisableScroll } from '@/hooks/use-disable-scroll';

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  useWindowResize();
  useScrollListener();
  useDisableScroll();

  return (
    <>
      <Header />
      <main className="container mb-2 mt-20 flex-grow">{children}</main>
      <Footer />
    </>
  );
}
