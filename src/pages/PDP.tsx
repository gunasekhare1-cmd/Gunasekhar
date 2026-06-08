import { Page } from '../types';
import { ArrowRight, ArrowLeft, ShoppingCart } from 'lucide-react';

export function PDP({ onNavigate }: { onNavigate: (page: Page) => void }) {
  // We don't render a distinct top bar just for PDP because Layout handles it, 
  // but if we want back button semantics on desktop, we can use breadcrumbs or manual back.
  
  return (
    <main className="max-w-7xl mx-auto md:px-margin-desktop md:grid md:grid-cols-12 md:gap-gutter md:mt-lg pb-24 md:pb-xl pt-4 md:pt-0">
      
      {/* Mobile Back Button (Rendered locally for mobile since Layout TopBar doesn't have it) */}
      <button onClick={() => onNavigate('plp')} className="md:hidden flex items-center px-margin-mobile text-secondary mb-4">
        <ArrowLeft size={20} className="mr-2" /> Back
      </button>

      {/* Image Gallery (Mobile: Swipeable, Desktop: Bento/Grid) */}
      <section className="md:col-span-7 mb-lg md:mb-0">
        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden bg-surface-container-low md:rounded-xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa23U5vxbIPLXJtk64a-NZZUxCzCKYlp0Lrhcc1SxL6As9XVER9DeC2c1qkYY1HRawhXW9NU95v-P3iphyWu38RZJ9xS4zCg4qCGllzBQnoqn2qfPgxlDtsnLZIdQvVfVfHV_EuPISZ5FA36P5NpbzOAtrlOIx4NLFwlsSs_VQiIkL7fWkAwvqJVQibJ7_Zk50HrBuZ09sTK54Mcf6ifQmSYbHHzwgQFeVm6Mv5jVjOSaxWnl66_QjbCb_cEBrFI2SP9JG4L-OuT49" 
            alt="Premium Watch Main View" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Thumbnails (Desktop) */}
        <div className="hidden md:flex gap-md mt-md overflow-x-auto no-scrollbar">
          <button className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-primary-container outline-none">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE7vx1uWPb05FODWSKC1Oh_InezqHRq_Xp179YK1WE1syD270gD1hTDYgZEbQx8LtoSKKOi8yZ1tiX5ZEKcsr-BCAmqt5n8uTGGbMXY4pdvuOCenSEgBfThq9uYSJROlcPELdfCE0ndDf8AHddgZtT0Rdl9KbZd3mm0l2F1zE7b30tgf9_g1JCdecxP3mpTeDjVt61LiTCVx8CDI-uFEJ3oGiiNc5o8qg4o8Lse2BX0nGhuKMmERvtdyzapRRsGxkAsXAw3q22DZIT" alt="Thumb 1" className="w-full h-full object-cover" />
          </button>
          <button className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-outline-variant transition-colors outline-none">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJMo_xZxPhnbVRET5k1y5vv4JP0Pozxep5uf33_h-so2rQCh2xvmif61yUh6JNsW1Q6dMvvr165EtHWdjOuZNwtQRZPrfr4mgynGOazjXdncmvLQTL1hcRQjEC79uhl7FppXLTQ5ZbnPwMwcv7rCfwHkbkAsGmEkUiLMB1sZQRqiOFeH6dp8V7Pi0PBEf8QSdMh8Rta3C0oPNzs4EBb5cDsJhQePqqBlZsEW5n4SGaHplz0i44wQ_kn8UlvAFtMzoAAHF4A44JxU5a" alt="Thumb 2" className="w-full h-full object-cover" />
          </button>
          <button className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-outline-variant transition-colors outline-none">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHZshNzegCNAP5eJydSjfl37r_UKwo6KlDdIIA_qgJae_-AZXX9_k8WhuciKIffvctzyAxXi3YJTUq138m7WF101tgtLUx7inUXTLoGAXvvH64hnvFMGigmkRSMc5S9OnhRHzI6HnHfGpvserAqKd6N6LrHRAKLEAxaC_VwQI2p3_Fui6NaSYBlOfoAQx1oWxV1sGss-6gwgMYMx_IKPW-af1geR1zEX_dZ2focMwq67gfDoOe44uLTUJT1wSqFygPZ6d3iuL72lo9" alt="Thumb 3" className="w-full h-full object-cover" />
          </button>
        </div>
      </section>

      {/* Product Info */}
      <section className="px-margin-mobile md:px-0 md:col-span-5 flex flex-col pt-md md:pt-0">
        <div className="mb-lg">
          <p className="text-label-lg text-secondary mb-xs uppercase tracking-wider">Chronograph Collection</p>
          <h1 className="text-display-lg text-on-surface mb-sm">The Apex Chrono</h1>
          <p className="text-headline-lg text-on-surface">₹1,250</p>
        </div>
        
        <div className="mb-lg">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Precision engineering meets minimalist design. The Apex Chrono features a seamlessly integrated dial, surgical-grade stainless steel casing, and a sapphire crystal face designed for enduring clarity.
          </p>
        </div>

        {/* Color Selector */}
        <div className="mb-lg">
          <h3 className="text-label-lg text-on-surface mb-sm">Finish</h3>
          <div className="flex gap-sm">
            <button className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary-container flex items-center justify-center outline-none">
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB] border border-outline-variant shadow-sm"></div>
            </button>
            <button className="w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant transition-colors flex items-center justify-center outline-none">
              <div className="w-8 h-8 rounded-full bg-[#27272A] border border-outline-variant shadow-sm"></div>
            </button>
            <button className="w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant transition-colors flex items-center justify-center outline-none">
              <div className="w-8 h-8 rounded-full bg-[#E5Bcb6] border border-outline-variant shadow-sm"></div>
            </button>
          </div>
        </div>

        {/* Size Selector */}
        <div className="mb-xl">
          <h3 className="text-label-lg text-on-surface mb-sm">Case Size</h3>
          <div className="flex flex-wrap gap-sm">
            <button className="px-lg py-sm rounded-full text-label-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors outline-none">
              38mm
            </button>
            <button className="px-lg py-sm rounded-full text-label-lg bg-primary-container text-on-primary transition-colors shadow-sm outline-none">
              42mm
            </button>
          </div>
        </div>

        {/* Desktop Add to Cart */}
        <div className="hidden md:block mt-auto pb-lg">
          <button onClick={() => onNavigate('cart')} className="w-full py-md rounded-lg bg-primary-container text-on-primary text-headline-md shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:opacity-90 transition-opacity flex justify-center items-center gap-sm outline-none">
            <ShoppingCart size={24} /> Add to Cart <ArrowRight size={20} className="ml-1" />
          </button>
        </div>
      </section>

      {/* Mobile Fixed Add to Cart Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-margin-mobile bg-surface-container-lowest/90 backdrop-blur-md border-t border-surface-container z-50">
        <button onClick={() => onNavigate('cart')} className="w-full py-md rounded-xl bg-primary-container text-on-primary text-headline-md shadow-[0px_4px_20px_rgba(0,0,0,0.04)] active:scale-95 transition-transform flex justify-center items-center gap-sm outline-none">
          Add to Cart - ₹1,250
        </button>
      </div>
    </main>
  );
}
