'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handleMenuButtonClick = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header className="fixed inset-0 h-fit w-full bg-backgroundSecondary">
      <div
        className={clsx(
          isMobileNavOpen ? 'h-screen' : 'h-14',
          'container overflow-hidden transition-all duration-300 ease-in-out'
        )}
      >
        <div className="flex h-14 items-center justify-between">
          <h1>AUTIZOR</h1>
          <button onClick={handleMenuButtonClick}>MENU</button>
        </div>
        <nav
          className={clsx(
            isMobileNavOpen ? 'opacity-100' : 'opacity-0',
            'flex h-full items-center justify-center transition-opacity duration-300 ease-in-out'
          )}
        >
          <ul className="flex h-full flex-col items-center justify-center">
            <li>ODKAZ 1</li>
            <li>ODKAZ 2</li>
            <li>ODKAZ 3</li>
            <li>ODKAZ 4</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
