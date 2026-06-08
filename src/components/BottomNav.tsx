import { Page } from '../types';
import { Home, Search, ShoppingBag, User } from 'lucide-react';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function BottomNav({ currentPage, onNavigate }: Props) {
  return (
    <nav className="md:hidden bg-surface-container-lowest dark:bg-surface-dim shadow-[0px_-4px_20px_rgba(0,0,0,0.04)] fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-xl pb-base rounded-t-xl transition-all duration-300">
      <button
        onClick={() => onNavigate('home')}
        className={`flex items-center justify-center scale-110 active:duration-200 p-2 relative group transition-colors ${
          currentPage === 'home' ? 'text-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary-container'
        }`}
      >
        <Home fill={currentPage === 'home' ? 'currentColor' : 'none'} size={24} />
      </button>

      <button
        onClick={() => onNavigate('plp')}
        className={`flex items-center justify-center scale-110 active:duration-200 p-2 transition-colors ${
          currentPage === 'plp' ? 'text-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary-container'
        }`}
      >
        <Search strokeWidth={currentPage === 'plp' ? 2.5 : 2} size={24} />
      </button>

      <button
        onClick={() => onNavigate('cart')}
        className={`flex items-center justify-center scale-110 active:duration-200 p-2 relative transition-colors ${
          currentPage === 'cart' ? 'text-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary-container'
        }`}
      >
        <ShoppingBag fill={currentPage === 'cart' ? 'currentColor' : 'none'} size={24} />
        {/* Badge indicator */}
        <span className="absolute top-[6px] right-[4px] bg-error text-on-error text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
          3
        </span>
      </button>

      <button
        onClick={() => onNavigate('profile')}
        className={`flex items-center justify-center scale-110 active:duration-200 p-2 transition-colors ${
          currentPage === 'profile' ? 'text-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:text-primary-container'
        }`}
      >
        <User fill={currentPage === 'profile' ? 'currentColor' : 'none'} size={24} />
      </button>
    </nav>
  );
}
