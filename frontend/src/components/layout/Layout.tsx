import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isPanelPage = pathname === '/about';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`site-shell${isHome ? ' site-shell--home' : ''}${isPanelPage ? ' site-shell--panels' : ''}`}>
      <Header />
      <main className={isHome ? 'home-main' : isPanelPage ? 'page page--panels' : 'page'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
