import { Page } from '../types';
import { ChevronRight, ShoppingBag, MapPin, CreditCard, Settings, LogOut } from 'lucide-react';

export function Profile({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile py-lg md:py-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-xl">
      {/* Left Sidebar / Profile Summary */}
      <aside className="md:col-span-4 lg:col-span-3">
        <div className="flex items-center space-x-md mb-xl md:mb-lg">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high border-2 border-surface-container-lowest shadow-sm flex-shrink-0">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuCP2y7QzYYoWjl-Hkahy98qknOhSHVV8nk5RWoNXgOs9N-94OAEJe1wpgDUIfwxSiMfm90VZiCIfr5vZ2wmelAMh0HjvMWvG4WY4_8tx0CVeMxdmRGSM5qG-jylzWgouBPQhxEOqQ4SDTyWYJ2XLON8GOvuJWOXwLQPCoB9Ck234LeG1fyC5WYfQfRnf2r4S7Dk7caTFvhFuO-3tlu_PK5-4-02YXXeBv-6Fgn5FmMmEfmp7FBo_8TnEJpf-hhK6YxI8QNqVJ32cV" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-headline-md text-on-surface md:text-headline-lg">Gunasekhar E</h2>
            <p className="text-body-md text-secondary">gunasekhare1@gmail.com</p>
          </div>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="flex-col space-y-sm bg-surface-container-lowest rounded-xl p-sm shadow-sm hidden md:flex">
          <button className="flex items-center space-x-md px-md py-sm rounded-lg bg-primary-container text-on-primary hover:opacity-90 transition-colors w-full outline-none">
            <ShoppingBag size={20} />
            <span className="text-label-lg">My Orders</span>
          </button>
          <button className="flex items-center space-x-md px-md py-sm rounded-lg text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors w-full outline-none">
            <MapPin size={20} />
            <span className="text-label-lg">Saved Addresses</span>
          </button>
          <button className="flex items-center space-x-md px-md py-sm rounded-lg text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors w-full outline-none">
            <CreditCard size={20} />
            <span className="text-label-lg">Payment Methods</span>
          </button>
          <button className="flex items-center space-x-md px-md py-sm rounded-lg text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors w-full outline-none">
            <Settings size={20} />
            <span className="text-label-lg">Settings</span>
          </button>
          <hr className="border-outline-variant my-sm" />
          <button className="flex items-center space-x-md px-md py-sm rounded-lg text-error hover:bg-error-container transition-colors w-full text-left outline-none">
            <LogOut size={20} />
            <span className="text-label-lg">Log Out</span>
          </button>
        </nav>

        {/* Mobile Horizontal Nav (Pills) */}
        <div className="flex overflow-x-auto gap-sm pb-sm -mx-margin-mobile px-margin-mobile md:hidden hide-scrollbar">
          <button className="flex-shrink-0 px-lg py-sm rounded-full bg-primary-container text-on-primary text-label-md transition-colors outline-none">My Orders</button>
          <button className="flex-shrink-0 px-lg py-sm rounded-full bg-surface-container-highest text-secondary hover:bg-surface-variant text-label-md transition-colors outline-none">Addresses</button>
          <button className="flex-shrink-0 px-lg py-sm rounded-full bg-surface-container-highest text-secondary hover:bg-surface-variant text-label-md transition-colors outline-none">Payments</button>
          <button className="flex-shrink-0 px-lg py-sm rounded-full bg-surface-container-highest text-secondary hover:bg-surface-variant text-label-md transition-colors outline-none">Settings</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="md:col-span-8 lg:col-span-9">
        <h3 className="text-headline-lg-mobile md:text-headline-lg mb-lg text-on-surface">Recent Orders</h3>
        <div className="space-y-lg flex flex-col">
          
          {/* Order Card 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="flex justify-between items-start mb-md border-b border-surface-container-highest pb-md">
              <div>
                <p className="text-label-md text-secondary mb-xs">Order #LX-8492</p>
                <p className="text-body-md text-on-surface">Placed on Oct 24, 2023</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="inline-block px-sm py-[2px] rounded-full bg-primary-fixed text-on-primary-fixed text-label-md mb-xs">In Transit</span>
                <p className="text-headline-md text-on-surface">₹245.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-md">
              <div className="w-20 h-24 rounded-lg overflow-hidden bg-surface-container flex-shrink-0 cursor-pointer" onClick={() => onNavigate('plp')}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRalnJuz4lO6R4Zej629bGkQjOu4D7uonPnXVKuXnCvM8U-rV7BfQokbhZJ3NdyKp4h1oZyC3AnQY5zAIWDdz0bVnLwdB2JYZnP0-YUXB37MOWPQ5qtNPFfGI2hKJ87kMj1vjOpj55oiVorPolQHAZpE_t58jG_uMhen-_4F5_D8-VAmiKbEggtCqaJ4LIruoXi9hwtwiECUoWWvpQQyFFm1KYoiLh6zyJRIONfhJNb7hPe70_KdcnfothctaU1AskD-tsiaFnJRpU" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h4 className="text-label-lg text-on-surface mb-xs cursor-pointer hover:text-primary-container" onClick={() => onNavigate('plp')}>Minimalist Leather Tote</h4>
                <p className="text-body-md text-secondary">Color: Charcoal • Qty: 1</p>
              </div>
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors outline-none cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="mt-md pt-md border-t border-surface-container-highest flex justify-between items-center md:hidden">
              <button className="text-label-md text-primary-container outline-none">Track Package</button>
              <button className="text-label-md text-secondary outline-none">View Details</button>
            </div>
          </article>

          {/* Order Card 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="flex justify-between items-start mb-md border-b border-surface-container-highest pb-md">
              <div>
                <p className="text-label-md text-secondary mb-xs">Order #LX-7103</p>
                <p className="text-body-md text-on-surface">Placed on Sep 12, 2023</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="inline-block px-sm py-[2px] rounded-full bg-surface-container-highest text-secondary text-label-md mb-xs">Delivered</span>
                <p className="text-headline-md text-on-surface">₹120.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-md">
              <div className="w-20 h-24 rounded-lg overflow-hidden bg-surface-container flex-shrink-0 cursor-pointer" onClick={() => onNavigate('pdp')}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVWtcrf593O_yescHodEDSExj1gFahNGhCW8NiWCt7o47QPje5in2WpXyVQ33bACGG4xrD_FJG2ZPnhU3lLpi6TuDdj8POXv8sq6yJMz_Naa3cJcF7zqAeos_DawE88GaiIvosefRAl_heSwjIqBd7B7x52t7z0NcXVj3ROx_z8x2iZWv1boybkbgbLWa-l_NotKYF66G45WKj8RCGwFfBB8VjYd390NsJwV4YNdYyKvXDO4DBoeYN8POim20wejwFZRLNmSnEVM27" alt="Product Image" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h4 className="text-label-lg text-on-surface mb-xs cursor-pointer hover:text-primary-container" onClick={() => onNavigate('pdp')}>Silicone Sport Watch</h4>
                <p className="text-body-md text-secondary">Color: Arctic White • Qty: 1</p>
              </div>
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors outline-none cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-md pt-md border-t border-surface-container-highest flex justify-between items-center md:hidden">
              <button className="text-label-md text-primary-container outline-none" onClick={() => onNavigate('pdp')}>Buy Again</button>
              <button className="text-label-md text-secondary outline-none">View Details</button>
            </div>
          </article>

        </div>
        
        <div className="mt-xl pb-12 flex justify-center">
          <button className="px-lg py-sm rounded-full border border-outline-variant text-label-lg text-on-surface hover:bg-surface-container-low transition-colors outline-none cursor-pointer">
            Load More
          </button>
        </div>
      </section>
    </main>
  );
}
