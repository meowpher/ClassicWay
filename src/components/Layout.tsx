import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black flex flex-col font-sans selection:bg-brand-maroon selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isContactPage && <Footer />}
    </div>
  );
};
