import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalOfferPrice } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCheckout = () => {
    toast.success('Proceeding to secure checkout...');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="text-center container px-4 md:px-12">
          <ShoppingBag className="h-20 w-20 md:h-24 md:w-24 mx-auto text-[#0b96dc] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Looks like you haven’t added anything yet. Explore our latest collections and
            find the best deals curated just for you.
          </p>

          <Button
            onClick={() => navigate(user ? '/' : '/')}
            className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
          >
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }

  const savings = totalPrice - totalOfferPrice;

  return (
    <div className="container px-4 md:px-10 lg:px-16 mx-auto py-6 md:py-10 bg-gradient-to-tr from-[#f0faff] via-[#e2f5ff] to-[#ffffff]">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#0da1e1]">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const [selectedImg, setSelectedImg] = useState(item.image);

            // if you have multiple images later, replace this array
            const images = [item.image, item.image, item.image];

            return (
              <Card key={item.id} className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row gap-4">

                    {/* ===== IMAGE GALLERY UPDATED ===== */}
                    <div className="flex flex-col sm:w-40 gap-3">
                      {/* MAIN IMAGE */}
                      <div className="bg-white rounded-xl shadow p-2 flex items-center justify-center">
                        <img
                          src={selectedImg}
                          alt={item.name}
                          className="w-full h-36 object-contain"
                        />
                      </div>

                      {/* THUMBNAILS */}
                      <div className="flex gap-2 overflow-x-auto">
                        {images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            onClick={() => setSelectedImg(img)}
                            className={`w-12 h-12 object-cover rounded-lg cursor-pointer border
                              ${selectedImg === img ? 'border-blue-500' : 'border-gray-200'}`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* ===== END IMAGE GALLERY ===== */}

                    {/* DETAILS */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-600 text-lg">
                          ₹{item.offerPrice || item.price}
                        </span>
                        {item.offerPrice && (
                          <span className="text-sm text-red-500 line-through">
                            ₹{item.price}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground mt-2">
                        Inclusive of all taxes • Free delivery available
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>

                      <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>

                        <span className="w-6 text-center font-semibold">
                          {item.quantity}
                        </span>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ORDER SUMMARY — UNCHANGED */}
        <div>
          <Card className="rounded-2xl shadow-md sticky top-24">
            <CardContent className="p-5 md:p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6 text-sm md:text-base">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">You Save</span>
                    <span className="font-semibold text-red-500">
                      -₹{savings.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>

                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-green-600">
                    ₹{totalOfferPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
                size="lg"
                onClick={handleCheckout}
              >
                Proceed to Secure Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
