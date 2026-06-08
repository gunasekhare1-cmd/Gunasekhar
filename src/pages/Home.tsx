import { Page } from '../types';
import { Search, ArrowRight } from 'lucide-react';

export function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <main className="max-w-7xl mx-auto pb-24 md:pb-0">
      {/* Search Bar */}
      <section className="px-margin-mobile md:px-margin-desktop pt-md pb-lg">
        <div className="relative w-full max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-secondary group-focus-within:text-primary-container transition-colors" size={20} />
          </div>
          <input 
            type="text" 
            className="w-full bg-surface-container-highest border-none rounded-full py-3 pl-12 pr-4 text-body-md text-on-surface placeholder:text-secondary focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest transition-all duration-200 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] outline-none" 
            placeholder="Search for products, brands and more" 
          />
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-margin-mobile md:px-margin-desktop pb-xl">
        <div 
          onClick={() => onNavigate('plp')}
          className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] group cursor-pointer"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOokEozDA-I_bCGLsf3wCBvjMJjhMOxt6if51-N79jUe4PUr8qgNMf40NiBjuiw-WKzfYSIIdyuCMqujt1guAvOlZKDwyoITgZPgkJahl0gQ3eTmRYjAKHGFUQUkGulnNZTUod3czp0h4nIKCqbC9OCrPEuaUqK0bf9FmedUFqIGiA2NVypEYhvk81MkPUPe0OD6LUMU0vspDYPSvwzeBA7mbjVIR_dGiWAR7QTcBtJkIR9KTq7XupQgjcr31nSYYSmSPcbQPw7DOZ" 
            alt="Hero Banner" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent md:bg-gradient-to-r md:from-inverse-surface/80 md:via-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-lg md:p-xl md:top-1/2 md:-translate-y-1/2 md:bottom-auto w-full md:w-1/2">
            <span className="text-label-md text-on-primary bg-primary-container px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block shadow-sm">
              New Collection
            </span>
            <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-primary mb-sm leading-tight">
              Elevate Your<br/>Everyday Style
            </h1>
            <p className="text-body-md text-surface-container-lowest/90 mb-md max-w-sm hidden md:block">
              Discover our latest arrivals featuring clean lines, premium materials, and effortless sophistication.
            </p>
            <button className="bg-surface-container-lowest text-on-surface text-label-lg px-6 py-3 rounded-full hover:bg-surface-container-low transition-colors duration-200 shadow-sm flex items-center gap-2 group-hover:shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
              Shop Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Circles */}
      <section className="pb-xl">
        <div className="px-margin-mobile md:px-margin-desktop mb-md">
          <h2 className="text-headline-md text-on-surface">Shop by Category</h2>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop gap-md pb-4 snap-x">
          {[
            { name: 'Fashion', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUDZZMPmAaqCim1YrXajBS--UPUTVpI7V3-lBQ00N6ZKZalTHd3Q6faT8T1G8iS56nDREmF_roR1YBCgvhN7efWEORsCf6SIkwZ2KS1N_-xraZ6fj84LKRnMzxyVU-Aw-R_Fo2WvCtoNMybdA3Oy15__T3nGPC6RG66SvRnn0W4UDLJNJjfZc9wDy49VKzUiace5aTmxf0FHRfkHu8p-EhNLt1KbBJYnEHa-WmySt681DKgJls8y4NtfdBhfleJTPPJ5deiMgdv7O' },
            { name: 'Electronics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMXLXcYBM_iiPHyVbZw09ROXsuelyhuHalQ52CGQ2FEsMkAP9yEph4GisiiTvqQ4mIQLBdeyBXMIFDsE-0fImv_8YgWapnAcICSVKkHVzYdlufUwzwvMwwgUrzjAZJkDTj0XjIxNKy3fTpD0avSazqxr-B-u66k4XB13O6ffG3c_3wdudoDEwoQ6jEMHTg7xFwqqiFogPMbctycXAIGPC4RuTurshDuASIZJab1VDDZxXPbR1e-yjm1GAo7SGIHCnRUftUPbVLA3lY' },
            { name: 'Home', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3CNnQYHTJ3CAFO5CUQloWgWR-BZ1nrswx8HJ8UddfAdotzTDbMA1gUR_y2aTimERjbcjVik4T_RBfCGVMST6WrZGKLKYij1mMrOVQpx08vGf4AJkf9yQcNeIzqZs1zwrAtNp2Ey_9CH6WpLdyGZ7JNidBBdfAy_pdK1wE4dFOF8lXZOW3FkxdTc7ZHfeAjTilQmHKjiZAwH-2nMai41L-HTIWcHoNTQq9nPnffPWTUTXtqsXGLmA1uKF4XmLn558tukZLy3hTdwjj' },
            { name: 'Beauty', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBgaBKwEjxF9r3_gvOfjAAx0EgFgBV4Ag-mPfq7Yh1PnE4sOfuspCR1nJjAeHMkQgsCiM7NYphQwdbKy2PF2Odx_4szHtgKjBlQNDEsb9x0vpnuCWkCC5TZrRPmar-SHJpXi-aVX-zPaVGeEag-My42NtwwOqIj995ahFbEM76OU-BMPD9AzGTl6M3fcRF-IZ3k63b08oBD1hZlFUq5yxzPvOADxRnyp5Hc5cwNT6s5mDzlwyfzWSZym4-3yLt6Bvj3n6Nk8B0GaSY' }
          ].map((cat) => (
            <div key={cat.name} onClick={() => onNavigate('plp')} className="flex flex-col items-center gap-sm shrink-0 snap-start group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-surface-container-highest shadow-[0px_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0px_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-label-md text-on-surface group-hover:text-primary-container transition-colors">{cat.name}</span>
            </div>
          ))}
          
          <div onClick={() => onNavigate('plp')} className="flex flex-col items-center gap-sm shrink-0 snap-start group cursor-pointer">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-surface-container-highest shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 border border-outline-variant group-hover:border-transparent">
              <ArrowRight size={24} />
            </div>
            <span className="text-label-md text-on-surface group-hover:text-primary-container transition-colors">View All</span>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="pb-xl">
        <div className="px-margin-mobile md:px-margin-desktop flex justify-between items-end mb-md">
          <h2 className="text-headline-md text-on-surface">Trending Now</h2>
          <button onClick={() => onNavigate('plp')} className="text-label-md text-primary-container hover:opacity-80 transition-opacity">See all</button>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop gap-md pb-6 snap-x">
          {[
            { cat: 'Tech', name: 'Minimalist Smartwatch Series 7', price: '₹299.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATt3X4yxZKucDGBQuc8fB57JBlLY8JLnPdKVixDaaqXnRASDTvSMSmYhBU46SH3siaLiYkwSHF3fRduf8VZOJii_LcgeAyaG8gfNen4Lcig7Ucm2vEAg9uMYDsUPLd-JXBw7PwHopBssg72mvYjXJ8AD8HwzRs2hb0o7nqQ2vcLA4j5jpRpQJp4BJqf6PmxHar_bv9Slje686Anaw1gxjEIckMFpLmwJJ1t101nuzZAf9hqKN2bEWmVbXfJT-aJNG9xBfZyJ6vbnSe' },
            { cat: 'Footwear', name: 'Essential Leather Sneakers', price: '₹120.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv-4z-r0SmZ5iei8ibnvjmnFObS6YuxmRLDJfRY1QcgreB-0IknfFlcC8plWg6OBQBV95QP05__Pmn0mDJRX0W18qtA0V_um_dwgQEfxQk6iTH_kb-ISXHMxIqoq6kB7ylO80TUfdR6SM-XeZQUlPsmiRyUTi4ltpEd6gTS_35iFGS72M0eHV0Sufq_1RLrvKkZQHxIu64e6YD1b7kcRXO6UUNr_XbKhpdoSaS11p3RhSmIZQx9jcbnJ7_PpDASneGvr2muubmduQ8' },
            { cat: 'Audio', name: 'Aura Wireless Headphones', price: '₹350.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMnZ7X_9CxOiJoTqtKeR4vmIVWklNYElkpQSp6mxIE6lT74K8ht1yf1pNbpYUhRZPAhxm1DxTMwSumTOhT4m24xNqO348PsEBOuDIZ7OWYtUBG8QRgtIKuSyNLh5MVWwOk8ZEbLcupLkSUCFdmukV2NlLLxgyFwoqNF8_EuxOkKw4Gz9o9O_JMY1nxY6AFpQz6U0LxFaFl_3qaeR1Pehl8go6QePrFxrL2Z2pjdfuBluCI2wtTOvP5BF0Wa94qXW3nC7BIFjYIXa7z' },
            { cat: 'Home', name: 'Luna Ceramic Table Lamp', price: '₹85.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc7sQBZ2iQNrYJYEIuMWyBdqiCv2o-k815AnPJkA2TyQhYAeeaGicAKfLfR4RdzKSyEc0JqkV2qfp3lzOlY2giCVtzXT7adno9FMOyMWIb25SLVvwvikh_olYIxWb8neSyqspNP9b8vXJJZkqExdCiq90u1Nn5B9aArq01y4-Hwbh9b5dNysW47XarQqgrtReyCfecF_1bnVxqPSg-kzxaazYsZWuOz6l8k2YejgwcIMDdNIlGA9keRh9e6kAOlJJg8nYXDzBvYXtz' }
          ].map((prod) => (
            <div key={prod.name} className="w-48 md:w-64 shrink-0 snap-start group flex flex-col cursor-pointer" onClick={() => onNavigate('pdp')}>
              <div className="relative w-full aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden mb-sm shadow-[0px_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0px_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col gap-xs px-1">
                <span className="text-label-md text-secondary">{prod.cat}</span>
                <h3 className="text-body-md text-on-surface truncate group-hover:text-primary-container transition-colors">{prod.name}</h3>
                <span className="text-headline-md text-on-surface">{prod.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
