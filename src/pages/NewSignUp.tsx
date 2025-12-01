import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { User, Mail, Phone, MapPin, Lock, UserPlus } from 'lucide-react';

export default function NewSignUp() {
  const { signUp, user, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate('/customer');
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await signUp(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      });

      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('Email already registered');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Account created successfully! You can now sign in.');
        navigate('/signin');
      }
    } catch (error: any) {
      toast.error('An error occurred during sign up');
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
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Join Caresoft Technology today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 text-vibrant-purple mb-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-vibrant-purple/30 focus:border-vibrant-purple"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 text-vibrant-blue mb-2">
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
                className="border-vibrant-blue/30 focus:border-vibrant-blue"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2 text-vibrant-teal mb-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 1234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-vibrant-teal/30 focus:border-vibrant-teal"
              />
            </div>

            <div>
              <Label htmlFor="address" className="flex items-center gap-2 text-vibrant-orange mb-2">
                <MapPin className="h-4 w-4" />
                Address
              </Label>
              <Input
                id="address"
                placeholder="Your complete address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="border-vibrant-orange/30 focus:border-vibrant-orange"
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
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="border-vibrant-pink/30 focus:border-vibrant-pink"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-vibrant-pink mb-2">
                <Lock className="h-4 w-4" />
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="border-vibrant-pink/30 focus:border-vibrant-pink"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/signin" className="text-vibrant-blue hover:underline font-semibold">
                Sign In
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
