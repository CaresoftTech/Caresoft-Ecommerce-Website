import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { LayoutDashboard, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/caresoft-logo.png';

export const AdminHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/signin');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/admin" className="flex items-center space-x-2">
            <img src={logo} alt="Caresoft Technology" className="h-10 w-10" />
            <span className="font-bold text-lg text-white">
              Admin Panel
            </span>
          </Link>

          {/* Admin Navigation */}
          <nav className="flex items-center space-x-4">
            <Link to="/admin" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <LayoutDashboard className="h-4 w-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-white/80 hover:text-white hover:bg-red-500/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
