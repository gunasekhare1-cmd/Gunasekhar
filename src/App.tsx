import { useState } from 'react';
import { Page } from './types';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PLP } from './pages/PLP';
import { PDP } from './pages/PDP';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    window.scrollTo(0, 0);
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'plp': return <PLP onNavigate={setCurrentPage} />;
      case 'pdp': return <PDP onNavigate={setCurrentPage} />;
      case 'cart': return <Cart onNavigate={setCurrentPage} />;
      case 'checkout': return <Checkout onNavigate={setCurrentPage} />;
      case 'profile': return <Profile onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
