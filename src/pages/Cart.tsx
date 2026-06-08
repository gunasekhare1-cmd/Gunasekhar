import { Page } from '../types';
import { X, Minus, Plus, ArrowRight, Lock } from 'lucide-react';

export function Cart({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const cartItems = [
    { id: 1, name: 'Minimalist Smartwatch Series X', description: 'Matte White', price: '₹299.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYyQinapmbVexIEKsDrh7-FtdtAJ_0BB1x1z0n7LYDS6ZvxF9nirtS9j5d-1yEhGceTsnsHOvfhwS5jNQAZxPZKdmSCgYsdSY1vl256JOGmAgRh2sbkevrrN6vsfF5rqSn2jL-m6gActzgoNRmFeOOtHcVLKTpKaAg48xdj_D-XOiJo8qTvf67GyNC0RLLRAhV4c_4pVAd-hmziZk_OJ48daveYE64bdK6dFp8eSArpbsR5IM4o6WSlxErKLjH1Lho54AM80JSEBm' },
    { id: 2, name: 'Acoustic Over-Ear Headphones', description: 'Carbon Black', price: '₹349.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxjLTdT-WuAlGMU6V01V8l8XHU4BGFJ4HBuWa6EQqlFKz1ZbdY5YadV3eLawmzjovqbkOV5nvX9qRtifuq2cqSeFzIYllYpU9DG97S1QdpucABcKsQBuRYKcBj1GDRgEU1quGg9BqkKZfqhE1J6UUl4qxPafL37_1N4MSvIPrp8Dlp83X-xepgzR7465It-xRo7kXzgiYH1-uXjADk5O06q-7vBtza69QpiWcOkhhOqLY9cVg5GxBwM_NyxQeRn06N8zssJOhlXhKp' },
    { id: 3, name: 'AeroKnit Running Sneakers', description: 'Crimson / Size 10', price: '₹160.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP2vqN5ZX9QIosmPKO_YgRQMZx9GxI0xS0rkKKN5kutGGGXnxFFRSe2O2ojBATE1Yarmo4UA62xcP1j8tJumwfWlnmr-9pVwp3pzzlMscT3IduIdGD-VgZm8nQloHDFifqNE8GJbYPh58p_45AqzIBslp0UZwsnWQUmBXpxrj7W8JEnMjjqTxK8lyJQHxGNb5wUP_WtRQZtf7g3LVX6QXp9igCYZ0zzX9BEaKxBLq4uw1-QfpY9sTWTmEhRZLUDhU7qszBlFTxAAYi' },
  ];

  return (
    <main className="flex-grow max-w-screen-xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-lg pb-[100px] md:pb-lg">
      <div className="mb-lg">
        <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">Your Cart</h1>
        <p className="text-body-md text-secondary mt-xs">3 items</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 flex flex-col gap-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-md p-md bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-highest/30">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-high cursor-pointer" onClick={() => onNavigate('pdp')}>
                <img src={item.img} alt="Product thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col justify-between h-24">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 onClick={() => onNavigate('pdp')} className="text-label-lg text-on-surface line-clamp-1 cursor-pointer hover:text-primary-container">{item.name}</h3>
                    <p className="text-body-md text-secondary mt-xs">{item.description}</p>
                  </div>
                  <button className="text-secondary hover:text-error transition-colors p-1 outline-none">
                    <X size={20} />
                  </button>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <span className="text-headline-md text-on-surface">{item.price}</span>
                  <div className="flex items-center bg-surface-container-high rounded-full overflow-hidden border border-surface-container-highest/50">
                    <button className="w-8 h-8 flex items-center justify-center text-primary-container hover:bg-surface-container-highest transition-colors outline-none">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center text-label-md text-on-surface">1</span>
                    <button className="w-8 h-8 flex items-center justify-center text-primary-container hover:bg-surface-container-highest transition-colors outline-none">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm border border-surface-container-highest/30 sticky top-24">
          <h2 className="text-headline-md text-on-surface mb-md">Order Summary</h2>
          <div className="space-y-sm mb-lg border-b border-surface-container-high pb-md">
            <div className="flex justify-between items-center">
              <span className="text-body-md text-secondary">Subtotal</span>
              <span className="text-label-lg text-on-surface">₹808.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-body-md text-secondary">Estimated Shipping</span>
              <span className="text-label-lg text-on-surface">Free</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-body-md text-secondary">Tax</span>
              <span className="text-label-lg text-on-surface">₹64.64</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mb-lg">
            <span className="text-headline-md text-on-surface">Total</span>
            <span className="text-display-lg text-on-surface">₹872.64</span>
          </div>
          
          <button 
            onClick={() => onNavigate('checkout')}
            className="w-full bg-primary-container text-on-primary text-label-lg py-3 px-6 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98] flex items-center justify-center gap-sm outline-none"
          >
            Proceed to Checkout <ArrowRight size={20} />
          </button>
          
          <div className="mt-md flex items-center justify-center gap-xs text-secondary text-label-md">
            <Lock size={14} /> Secure Checkout
          </div>
        </div>
      </div>
    </main>
  );
}
