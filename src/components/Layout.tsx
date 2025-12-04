import { Header } from './Header';
import { Footer } from './Footer';
import { AdminLayout } from './AdminLayout';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { isAdmin } = useAuth();
  
  // Check if current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Use admin layout for admin routes when admin is logged in
  if (isAdminRoute && isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
