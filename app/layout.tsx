'use client';

import { ReactNode } from 'react';
import './globals.css';
import { inter } from '@/utils/fonts';
import clsx from 'clsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import LayoutContent from '@/components/layout-content';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="cs">
      <body
        className={clsx(
          inter.className,
          'flex min-h-screen flex-col bg-backgroundPrimary text-textPrimary antialiased'
        )}
      >
        <Provider store={store}>
          <LayoutContent>{children}</LayoutContent>
        </Provider>
      </body>
    </html>
  );
}
