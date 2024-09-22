'use client';

import { ReactNode } from 'react';
import './globals.css';
import { inter } from '@/utils/fonts';
import clsx from 'clsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
          <Header />
          <main className="container mb-2 mt-20 flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
