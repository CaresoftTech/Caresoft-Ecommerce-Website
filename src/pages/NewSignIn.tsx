import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Lock, LogIn, Eye, EyeOff, ArrowLeft } from "lucide-react";
import loginImg from "@/assets/login.png";

export default function NewSignIn() {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      if (user.isAdmin) navigate("/admin");
      else navigate("/");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await login(formData.email, formData.password);
      if (!success) toast.error("Invalid email or password");
      else toast.success("Successfully signed in!");
    } catch {
      toast.error("An error occurred during sign in");
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4 pb-7">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-1 gap-6 items-center">

       
        {/* <div className="flex md:flex items-center justify-center p-6">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="w-full max-w-md"
          />
        </div> */}

    
        <Card className="w-full max-w-md mx-auto relative bg-[#e7f1fc] border-2 border-[#3491cb]/40 shadow-2xl shadow-[#3491cb]">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-3 left-3 p-2 rounded-full hover:bg-muted transition"
          >
            <ArrowLeft className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </button>

          <CardHeader className="space-y-1 mt-6">
            <CardTitle className="text-3xl pb-1 font-bold text-center  bg-gradient-to-r from-[#4cb9fd] to-[#153f5b] 
        bg-clip-text text-transparent">
              Log In
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">

             
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 text-[#3491cb] mb-2">
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
                  className="border-[#3491cb]/60 focus:border-[#18b3f6]"
                />
              </div>

            
              <div>
                <Label htmlFor="password" className="flex items-center gap-2 text-[#3491cb] mb-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="border-[#3491cb]/60 focus:border-[#3491cb] pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5 text-[#0daaff]" />}
                  </button>
                </div>
              </div>

             
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#4cb1f0] via-[#1e94dd] to-[#184b65] hover:opacity-90"
              >
                <LogIn className="mr-2 h-4 w-4" />
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>

           
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#3491cb] hover:underline font-semibold">
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
    </div>
  );
}
