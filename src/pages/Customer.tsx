import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, User, LogOut, Edit } from 'lucide-react';
import { toast } from 'sonner';

export default function Customer() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [editMode, setEditMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleUpdateProfile = () => {
    updateProfile(profileData);
    setEditMode(false);
    setDialogOpen(false);
    toast.success('Profile updated successfully');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-background to-muted/20 border-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  My Profile
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label htmlFor="edit-name">Name</Label>
                        <Input
                          id="edit-name"
                          value={profileData.name}
                          onChange={(e) =>
                            setProfileData({ ...profileData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="edit-phone">Phone</Label>
                        <Input
                          id="edit-phone"
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({ ...profileData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="edit-address">Address</Label>
                        <Input
                          id="edit-address"
                          value={profileData.address}
                          onChange={(e) =>
                            setProfileData({ ...profileData, address: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button onClick={handleUpdateProfile} className="flex-1">
                          Save Changes
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setDialogOpen(false);
                            setProfileData({
                              name: user?.name || '',
                              phone: user?.phone || '',
                              address: user?.address || '',
                            });
                          }}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.profilePhoto && (
                <div className="flex justify-center">
                  <img
                    src={user.profilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
                  />
                </div>
              )}

              <div className="space-y-3 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Name</p>
                  <p className="font-semibold">{user.name}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Email</p>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Phone</p>
                  <p className="font-semibold">{user.phone}</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Address</p>
                  <p className="font-semibold">{user.address}</p>
                </div>
              </div>

              <Button
                variant="destructive"
                onClick={handleLogout}
                className="w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Section */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">Welcome back, {user.name}!</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
