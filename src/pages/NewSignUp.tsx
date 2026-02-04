import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { toast } from 'sonner';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  UserPlus,
  Eye,
  EyeOff,
} from 'lucide-react';

export default function NewSignUp() {
  const { signup, user, loading } = useAuth();
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      const success = await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
      });

      if (!success) {
        toast.error('Email already registered');
      } else {
        toast.success('Account created successfully! You can now sign in.');
        navigate('/signin');
      }
    } catch (error) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center py-8 pb-10 px-4">
      {/* CENTERED SIGNUP FORM */}
      <div className="w-full max-w-md">
        <Card className="w-full bg-[#e7f1fc] border-2 border-[#3491cb]/40 shadow-2xl shadow-[#3491cb]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Join Caresoft Technologies today
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NAME */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-[#3491cb]">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-[#3491cb]">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* PHONE */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-[#3491cb]">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

             

              {/* PASSWORD */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-[#3491cb]">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 inset-y-0 flex items-center text-gray-500"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <Label className="flex items-center gap-2 mb-2 text-[#3491cb]">
                  <Lock className="h-4 w-4" />
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-2 inset-y-0 flex items-center text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <Button
                className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
                disabled={isSubmitting}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Creating account...' : 'Sign Up'}
              </Button>


  {/* OR DIVIDER */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-xs text-muted-foreground">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* SIGN UP WITH GOOGLE */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 py-2 rounded-md transition"
              >
                {/* Google Icon (no import, no logic) */}
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.23 9.21 3.25l6.9-6.9C35.9 2.34 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.02 6.22C12.47 13.09 17.77 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24c0-1.64-.15-3.22-.43-4.74H24v9h12.7c-.55 2.96-2.22 5.47-4.7 7.15l7.19 5.59C43.44 36.98 46.5 31.02 46.5 24z" />
                  <path fill="#FBBC05" d="M10.58 28.44a14.5 14.5 0 0 1 0-8.88l-8.02-6.22A23.94 23.94 0 0 0 0 24c0 3.86.92 7.5 2.56 10.66l8.02-6.22z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.9-2.13 15.87-5.79l-7.19-5.59c-2 1.35-4.56 2.15-8.68 2.15-6.23 0-11.53-3.59-13.42-8.94l-8.02 6.22C6.51 42.62 14.62 48 24 48z" />
                </svg>

                <span className="font-medium">Sign up with Google</span>
              </button>



              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
