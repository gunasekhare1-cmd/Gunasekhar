import { Page } from '../types';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

interface Props {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function TopBar({ currentPage, onNavigate }: Props) {
  return (
    <header className="bg-surface-container-lowest dark:bg-surface-dim shadow-sm sticky top-0 z-40 transition-shadow duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-md">
          <button className="text-secondary dark:text-secondary-fixed-dim hover:opacity-80 transition-opacity scale-95 active:duration-150 p-2 -ml-2 rounded-full md:hidden">
            <Menu size={24} />
          </button>
          
          <div 
            onClick={() => onNavigate('home')}
            className="cursor-pointer font-display-lg text-display-lg tracking-tighter text-on-surface dark:text-surface-bright flex-1 text-center md:text-left"
          >
            GSR
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-xl absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => onNavigate('home')} 
            className={`text-label-lg transition-opacity hover:opacity-80 ${currentPage === 'home' ? 'text-primary-container' : 'text-secondary'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('plp')} 
            className={`text-label-lg transition-opacity hover:opacity-80 ${currentPage === 'plp' ? 'text-primary-container' : 'text-secondary'}`}
          >
            Men
          </button>
          <button 
            onClick={() => onNavigate('plp')} 
            className="text-label-lg text-secondary transition-opacity hover:opacity-80"
          >
            Women
          </button>
          <button 
            onClick={() => onNavigate('plp')} 
            className="text-label-lg text-secondary transition-opacity hover:opacity-80"
          >
            Editorial
          </button>
        </nav>

        {/* Trailing Icons */}
        <div className="flex items-center gap-sm">
          <button 
            onClick={() => onNavigate('plp')}
            className="hidden md:flex text-secondary hover:text-primary-container transition-colors h-10 w-10 items-center justify-center rounded-full"
          >
            <Search size={24} />
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="hidden md:flex text-secondary hover:text-primary-container transition-colors h-10 w-10 items-center justify-center rounded-full"
          >
            <User size={24} />
          </button>
          <button 
            onClick={() => onNavigate('cart')}
            className="text-secondary dark:text-secondary-fixed-dim hover:opacity-80 transition-opacity scale-95 active:duration-150 p-2 -mr-2 rounded-full relative"
          >
            <ShoppingBag size={24} />
            <span className="absolute top-[6px] right-[4px] w-2 h-2 bg-primary-container rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
