import { Page } from '../types';
import { ArrowLeft, Check, CreditCard, Lock } from 'lucide-react';

export function Checkout({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen pb-24 md:pb-0 flex flex-col">
      {/* Checkout Minimal TopBar */}
      <header className="flex-shrink-0 bg-surface-container-lowest shadow-sm flex justify-between items-center px-margin-mobile h-16 w-full sticky top-0 z-50">
        <button 
          onClick={() => onNavigate('cart')}
          className="text-on-surface scale-95 active:duration-150 hover:bg-surface-container-low transition-colors flex items-center justify-center p-2 -ml-2 rounded-full outline-none"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-display-lg tracking-tighter cursor-pointer" onClick={() => onNavigate('home')}>GSR</h1>
        <div className="w-6"></div> {/* Spacer */}
      </header>

      <main className="flex-grow max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-lg">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-xl max-w-2xl mx-auto">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-lg">
              <Check size={16} />
            </div>
            <span className="ml-sm text-label-md text-on-surface">Shipping</span>
          </div>
          <div className="w-12 h-[2px] bg-primary-container mx-sm"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-primary-container text-primary-container flex items-center justify-center text-label-lg bg-surface-container-lowest">
              2
            </div>
            <span className="ml-sm text-label-md text-primary-container">Payment</span>
          </div>
          <div className="w-12 h-[2px] bg-outline-variant mx-sm"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-label-lg">
              3
            </div>
            <span className="ml-sm text-label-md text-secondary">Review</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Forms Section */}
          <div className="lg:col-span-7 space-y-xl">
            {/* Shipping Address Summary */}
            <section>
              <h2 className="text-headline-md mb-md">Shipping Address</h2>
              <div className="bg-surface-container-low p-md rounded-lg flex justify-between items-start">
                <div>
                  <p className="text-label-lg text-on-surface">Eleanor Shellstrop</p>
                  <p className="text-body-md text-on-surface-variant mt-xs">
                    123 MG Road, Indiranagar<br/>Bengaluru, KA 560038<br/>India
                  </p>
                </div>
                <button className="text-label-md text-primary-container hover:underline outline-none">Edit</button>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-headline-md mb-md">Payment Details</h2>
              <div className="space-y-md">
                
                {/* Saved Card */}
                <label className="flex items-center p-md border border-outline-variant rounded-lg cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                  <input type="radio" name="payment" defaultChecked className="text-primary-container border-outline-variant focus:ring-primary-container" />
                  <div className="ml-md flex-1 flex items-center justify-between">
                    <div className="flex items-center gap-sm">
                      <CreditCard className="text-outline" size={20} />
                      <span className="text-body-md text-on-surface">•••• 4242</span>
                    </div>
                    <span className="text-label-md text-on-surface-variant">04/26</span>
                  </div>
                </label>

                {/* Add New Card Form */}
                <div className="p-md bg-surface-container-lowest rounded-lg border border-transparent shadow-[0px_4px_20px_rgba(0,0,0,0.04)] mt-md">
                  <div className="mb-md flex items-center gap-sm">
                    <input type="radio" name="payment" className="text-primary-container border-outline-variant focus:ring-primary-container" />
                    <span className="text-label-lg text-on-surface">Add New Card</span>
                  </div>
                  <div className="space-y-md pl-lg">
                    <div>
                      <label className="block text-label-md text-on-surface-variant mb-xs">Cardholder Name</label>
                      <input type="text" placeholder="Name on card" className="w-full bg-surface-container-low border-b border-outline-variant rounded px-sm py-sm text-body-md focus:border-primary-container focus:ring-0 transition-colors outline-none" />
                    </div>
                    <div>
                      <label className="block text-label-md text-on-surface-variant mb-xs">Card Number</label>
                      <div className="relative">
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface-container-low border-b border-outline-variant rounded px-sm py-sm text-body-md focus:border-primary-container focus:ring-0 transition-colors outline-none" />
                        <CreditCard className="absolute right-sm top-1/2 -translate-y-1/2 text-outline" size={20} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div>
                        <label className="block text-label-md text-on-surface-variant mb-xs">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-surface-container-low border-b border-outline-variant rounded px-sm py-sm text-body-md focus:border-primary-container focus:ring-0 transition-colors outline-none" />
                      </div>
                      <div>
                        <label className="block text-label-md text-on-surface-variant mb-xs">CVC</label>
                        <input type="text" placeholder="123" className="w-full bg-surface-container-low border-b border-outline-variant rounded px-sm py-sm text-body-md focus:border-primary-container focus:ring-0 transition-colors outline-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative Payments */}
                <div className="pt-md">
                  <label className="flex items-center p-md border border-outline-variant rounded-lg cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                    <input type="radio" name="payment" className="text-primary-container border-outline-variant focus:ring-primary-container" />
                    <div className="ml-md flex-1 flex items-center">
                      <span className="text-body-md text-on-surface">Apple Pay</span>
                    </div>
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] sticky top-24">
              <h2 className="text-headline-md mb-md">Order Summary</h2>
              
              <div className="space-y-md mb-lg">
                <div className="flex gap-md text-on-surface">
                  <div className="w-20 h-24 bg-surface-variant rounded-lg overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiDF8icQBwXcVGaiZsJp6i72rOsB3gI6RimW6grNoAtnmYXBY4qW8_jnB8ZUOE6VpXvYra04vqfKnHDVooXQ95tkn-TjwPtLijmIVlyxMpRx6gIqdhAqzRkd0vzM1uX_wMwhRosMXeNS5XaQ9ypjh1IEu8QfF_Up0KFdVZkDRu5DNi0neIb2Hl_J5yrDcQMq6nHdJ4o4PCx3BAXSHbd8ruPhj7TIvFuKlzLMyUkyie_mjGCFk-whIVZhmI8eZojfb1WkjGRM535N4f" alt="Minimalist white t-shirt" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-label-lg">Essential Cotton Tee</h3>
                    <p className="text-body-md text-on-surface-variant mt-xs">White • M</p>
                    <p className="text-label-md mt-sm">Qty: 1</p>
                  </div>
                  <p className="text-label-lg">₹45.00</p>
                </div>
                
                <div className="flex gap-md text-on-surface">
                  <div className="w-20 h-24 bg-surface-variant rounded-lg overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUT3YYqzYxWzPdKL6UjaA0EFaU-yLhrdHz3RoS-Ed8d20lPRRigf5jg32-bUIn1Dev-VJ9BmimsbAcf4Y7E8o89zu5PL_cdzgB6KbhvxhAHxJfY3Zral7osWWqLzb-DVzPDTs6Hc_MFvuXtEiR_Kxx_sS7hgWl1XwHKm5yhBeg56W8Npk4_hKTyr1H-yKDryhU9suojYfG-VwCiYpc_eCP5PH8uszrDuYJ5Ezd_0hYdS1iAgzogJqzIs3xhVPJPe_Jc6hIL4WF1Ovj" alt="Minimalist jacket" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-label-lg">Structured Overshirt</h3>
                    <p className="text-body-md text-on-surface-variant mt-xs">Charcoal • L</p>
                    <p className="text-label-md mt-sm">Qty: 1</p>
                  </div>
                  <p className="text-label-lg">₹120.00</p>
                </div>
              </div>

              <div className="h-[1px] bg-outline-variant w-full my-md"></div>
              
              <div className="space-y-sm mb-lg">
                <div className="flex justify-between">
                  <span className="text-body-md text-on-surface-variant">Subtotal</span>
                  <span className="text-body-md text-on-surface">₹165.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-md text-on-surface-variant">Shipping</span>
                  <span className="text-body-md text-on-surface">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-md text-on-surface-variant">Taxes</span>
                  <span className="text-body-md text-on-surface">₹13.20</span>
                </div>
              </div>

              <div className="h-[1px] bg-outline-variant w-full my-md"></div>
              
              <div className="flex justify-between mb-xl">
                <span className="text-headline-md text-on-surface">Total</span>
                <span className="text-headline-md text-on-surface">₹178.20</span>
              </div>
              
              <button 
                onClick={() => onNavigate('profile')}
                className="w-full bg-primary-container text-on-primary text-label-lg py-md rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-sm outline-none"
              >
                Place Order
                <Lock size={16} />
              </button>
              
              <p className="text-label-md text-on-surface-variant text-center mt-sm">
                By placing your order, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
