import { Header } from './Header';
import { Footer } from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};
