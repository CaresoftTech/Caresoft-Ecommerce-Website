import { useCart } from '@/contexts/CartContext'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';   

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalOfferPrice } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();   

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
  };


  if (cart.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-[#0b96dc] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>

       
          <Button 
            onClick={() => navigate(user ? '/' : '/')}
            className='bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]'
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const savings = totalPrice - totalOfferPrice;

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-tr from-[#f0faff] via-[#e2f5ff] to-[#ffffff] ">
      <h1 className="text-3xl font-bold mb-8 text-[#0da1e1]">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
       
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{item.description}</p>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-500">₹{item.offerPrice || item.price}</span>
                      {item.offerPrice && (
                        <span className="text-sm text-red-500 line-through">₹{item.price}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-8 text-center font-semibold">{item.quantity}</span>

                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

   
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Savings</span>
                    <span className="font-semibold text-red-500">-₹{savings.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-success">FREE</span>
                </div>

                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-green-500">₹{totalOfferPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]"
                size="lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

          
              <Button
                variant="outline"
                className="w-full mt-2 hover:bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]"
                onClick={() => navigate(user ? '/customer' : '/')}
              >
                Continue Shopping
              </Button>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
