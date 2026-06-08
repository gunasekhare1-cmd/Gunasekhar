import { Page } from '../types';
import { ChevronRight, SlidersHorizontal, Heart } from 'lucide-react';
import { useState, MouseEvent } from 'react';

export function PLP({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'Outerwear', 'Knitwear', 'Trousers', 'Footwear', 'Accessories'];

  return (
    <main className="flex-grow pt-4 pb-[100px] md:pb-xl px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
      {/* Category Header & Filter Bar */}
      <section className="mb-lg md:mb-xl flex flex-col gap-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-sm">
          <div>
            <nav className="flex items-center gap-xs text-secondary text-label-md mb-sm">
              <button onClick={() => onNavigate('home')} className="hover:text-primary-container transition-colors">Home</button>
              <ChevronRight size={14} />
              <span className="text-on-surface">Men's Fashion</span>
            </nav>
            <h2 className="text-display-lg md:text-[40px] md:leading-[48px] text-on-surface tracking-tighter">
              Men's Fashion
            </h2>
          </div>
          <p className="text-body-md text-secondary">Showing 142 items</p>
        </div>

        {/* Scrollable Filter Pills */}
        <div className="flex items-center gap-sm overflow-x-auto no-scrollbar pb-xs -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 mt-sm">
          <button className="flex items-center gap-xs px-lg py-[10px] rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface text-label-lg shrink-0 hover:border-outline transition-colors shadow-sm outline-none">
            <SlidersHorizontal size={18} /> Filters
          </button>
          
          <div className="w-[1px] h-6 bg-outline-variant mx-xs shrink-0"></div>
          
          {categories.map((cat, i) => (
            <button key={cat} className={`px-lg py-[10px] rounded-full text-label-lg shrink-0 transition-transform active:scale-95 outline-none ${i === 0 ? 'bg-primary-container text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-gutter gap-y-xl">
        {[
          { id: 1, cat: 'Outerwear', name: 'The Apex Chrono', price: '₹1,250.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa23U5vxbIPLXJtk64a-NZZUxCzCKYlp0Lrhcc1SxL6As9XVER9DeC2c1qkYY1HRawhXW9NU95v-P3iphyWu38RZJ9xS4zCg4qCGllzBQnoqn2qfPgxlDtsnLZIdQvVfVfHV_EuPISZ5FA36P5NpbzOAtrlOIx4NLFwlsSs_VQiIkL7fWkAwvqJVQibJ7_Zk50HrBuZ09sTK54Mcf6ifQmSYbHHzwgQFeVm6Mv5jVjOSaxWnl66_QjbCb_cEBrFI2SP9JG4L-OuT49' },
          { id: 2, cat: 'Footwear', name: 'Essential Leather Sneakers', price: '₹120.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv-4z-r0SmZ5iei8ibnvjmnFObS6YuxmRLDJfRY1QcgreB-0IknfFlcC8plWg6OBQBV95QP05__Pmn0mDJRX0W18qtA0V_um_dwgQEfxQk6iTH_kb-ISXHMxIqoq6kB7ylO80TUfdR6SM-XeZQUlPsmiRyUTi4ltpEd6gTS_35iFGS72M0eHV0Sufq_1RLrvKkZQHxIu64e6YD1b7kcRXO6UUNr_XbKhpdoSaS11p3RhSmIZQx9jcbnJ7_PpDASneGvr2muubmduQ8' },
          { id: 3, cat: 'Audio', name: 'Aura Wireless Headphones', price: '₹350.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMnZ7X_9CxOiJoTqtKeR4vmIVWklNYElkpQSp6mxIE6lT74K8ht1yf1pNbpYUhRZPAhxm1DxTMwSumTOhT4m24xNqO348PsEBOuDIZ7OWYtUBG8QRgtIKuSyNLh5MVWwOk8ZEbLcupLkSUCFdmukV2NlLLxgyFwoqNF8_EuxOkKw4Gz9o9O_JMY1nxY6AFpQz6U0LxFaFl_3qaeR1Pehl8go6QePrFxrL2Z2pjdfuBluCI2wtTOvP5BF0Wa94qXW3nC7BIFjYIXa7z' },
          { id: 4, cat: 'Home', name: 'Luna Ceramic Table Lamp', price: '₹85.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc7sQBZ2iQNrYJYEIuMWyBdqiCv2o-k815AnPJkA2TyQhYAeeaGicAKfLfR4RdzKSyEc0JqkV2qfp3lzOlY2giCVtzXT7adno9FMOyMWIb25SLVvwvikh_olYIxWb8neSyqspNP9b8vXJJZkqExdCiq90u1Nn5B9aArq01y4-Hwbh9b5dNysW47XarQqgrtReyCfecF_1bnVxqPSg-kzxaazYsZWuOz6l8k2YejgwcIMDdNIlGA9keRh9e6kAOlJJg8nYXDzBvYXtz' },
          { id: 5, cat: 'Outerwear', name: 'Structured Overshirt', price: '₹120.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUT3YYqzYxWzPdKL6UjaA0EFaU-yLhrdHz3RoS-Ed8d20lPRRigf5jg32-bUIn1Dev-VJ9BmimsbAcf4Y7E8o89zu5PL_cdzgB6KbhvxhAHxJfY3Zral7osWWqLzb-DVzPDTs6Hc_MFvuXtEiR_Kxx_sS7hgWl1XwHKm5yhBeg56W8Npk4_hKTyr1H-yKDryhU9suojYfG-VwCiYpc_eCP5PH8uszrDuYJ5Ezd_0hYdS1iAgzogJqzIs3xhVPJPe_Jc6hIL4WF1Ovj' },
          { id: 6, cat: 'Footwear', name: 'AeroKnit Sneakers', price: '₹160.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP2vqN5ZX9QIosmPKO_YgRQMZx9GxI0xS0rkKKN5kutGGGXnxFFRSe2O2ojBATE1Yarmo4UA62xcP1j8tJumwfWlnmr-9pVwp3pzzlMscT3IduIdGD-VgZm8nQloHDFifqNE8GJbYPh58p_45AqzIBslp0UZwsnWQUmBXpxrj7W8JEnMjjqTxK8lyJQHxGNb5wUP_WtRQZtf7g3LVX6QXp9igCYZ0zzX9BEaKxBLq4uw1-QfpY9sTWTmEhRZLUDhU7qszBlFTxAAYi' },
          { id: 7, cat: 'Essentials', name: 'Essential Cotton Tee', price: '₹45.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiDF8icQBwXcVGaiZsJp6i72rOsB3gI6RimW6grNoAtnmYXBY4qW8_jnB8ZUOE6VpXvYra04vqfKnHDVooXQ95tkn-TjwPtLijmIVlyxMpRx6gIqdhAqzRkd0vzM1uX_wMwhRosMXeNS5XaQ9ypjh1IEu8QfF_Up0KFdVZkDRu5DNi0neIb2Hl_J5yrDcQMq6nHdJ4o4PCx3BAXSHbd8ruPhj7TIvFuKlzLMyUkyie_mjGCFk-whIVZhmI8eZojfb1WkjGRM535N4f' },
          { id: 8, cat: 'Accessories', name: 'Minimalist Leather Tote', price: '₹245.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRalnJuz4lO6R4Zej629bGkQjOu4D7uonPnXVKuXnCvM8U-rV7BfQokbhZJ3NdyKp4h1oZyC3AnQY5zAIWDdz0bVnLwdB2JYZnP0-YUXB37MOWPQ5qtNPFfGI2hKJ87kMj1vjOpj55oiVorPolQHAZpE_t58jG_uMhen-_4F5_D8-VAmiKbEggtCqaJ4LIruoXi9hwtwiECUoWWvpQQyFFm1KYoiLh6zyJRIONfhJNb7hPe70_KdcnfothctaU1AskD-tsiaFnJRpU' },
        ].map((prod) => (
          <div key={prod.id} onClick={() => onNavigate('pdp')} className="group flex flex-col gap-sm cursor-pointer">
            <div className="aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden relative">
              <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button 
                onClick={(e) => toggleFavorite(e, prod.id)}
                className="absolute bottom-3 right-3 bg-surface-container-lowest p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity outline-none text-secondary"
              >
                <Heart size={20} fill={favorites[prod.id] ? '#0052ff' : 'none'} className={favorites[prod.id] ? 'text-primary-container' : ''} />
              </button>
            </div>
            <div className="flex flex-col">
              <span className="text-label-md text-secondary">{prod.cat}</span>
              <h3 className="text-body-md text-on-surface">{prod.name}</h3>
              <span className="text-label-lg text-on-surface">{prod.price}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination / Load More */}
      <div className="mt-xl pt-lg flex justify-center w-full border-t border-surface-variant">
        <button className="px-xl py-[12px] rounded-full border border-outline-variant text-on-surface text-label-lg hover:border-primary-container hover:text-primary-container transition-colors outline-none">
          Load More
        </button>
      </div>
    </main>
  );
}
