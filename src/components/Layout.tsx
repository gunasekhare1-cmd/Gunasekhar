import { ReactNode } from 'react';
import { Page } from '../types';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: ReactNode;
}

export function Layout({ currentPage, onNavigate, children }: Props) {
  const isCheckout = currentPage === 'checkout';

  return (
    <div className={`min-h-screen font-sans flex flex-col antialiased ${isCheckout ? 'bg-surface-container-lowest' : 'bg-surface-container-lowest'}`}>
      {!isCheckout && <TopBar currentPage={currentPage} onNavigate={onNavigate} />}
      
      <div className="flex-grow">
        {children}
      </div>

      {!isCheckout && <BottomNav currentPage={currentPage} onNavigate={onNavigate} />}
    </div>
  );
}
