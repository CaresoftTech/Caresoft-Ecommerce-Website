import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function NewSignIn() {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      if (user.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await login(formData.email, formData.password);
      
      if (!success) {
        toast.error('Invalid email or password');
      } else {
        toast.success('Successfully signed in!');
      }
    } catch (error: any) {
      toast.error('An error occurred during sign in');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vibrant-purple"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-vibrant-purple/10 to-vibrant-pink/10 border-2 border-vibrant-purple/20 shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2 text-vibrant-purple mb-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-vibrant-purple/30 focus:border-vibrant-purple"
              />
            </div>

            <div>
              <Label htmlFor="password" className="flex items-center gap-2 text-vibrant-pink mb-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="border-vibrant-pink/30 focus:border-vibrant-pink"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90"
            >
              <LogIn className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="text-vibrant-blue hover:underline font-semibold">
                Sign Up
              </Link>
            </p>

            <div className="mt-4 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
              <p className="font-semibold mb-1">Demo Credentials:</p>
              <p>Admin: admin@caresoft.com / admin123</p>
              <p>Customer: Sign up to create account</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
