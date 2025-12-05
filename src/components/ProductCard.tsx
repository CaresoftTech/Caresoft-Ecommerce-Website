import { Product, useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  requireLogin?: boolean;
}

export const ProductCard = ({ product, requireLogin = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (requireLogin && !user) {
      toast.error('Please sign in to add items to cart');
      navigate('/signin');
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    if (requireLogin && !user) {
      toast.error('Please sign in to continue');
      navigate('/signin');
      return;
    }
    addToCart(product);
    navigate('/cart');
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {product.discount && (
          <Badge className="absolute top-3 right-3 bg-offer text-offer-foreground">
            {product.discount}% OFF
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-baseline gap-2">
          {product.offerPrice ? (
            <>
              <span className="text-2xl font-bold text-green-500">
                ₹{product.offerPrice}
              </span>
              <span className="text-sm text-muted-foreground line-through text-red-600">
                ₹{product.price}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-green-500">₹{product.price}</span>
          )}
        </div>
      </CardContent>

      <CardFooter
        className="
    p-4 pt-0 
    flex flex-col gap-2
    sm:flex-row 
  "
      >
        <Button
          variant="outline"
          className="
    flex-1 border-[#3491cb] text-[#3491cb] 
    hover:bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:text-white

    text-xs px-2 py-1
    sm:text-sm sm:px-3 sm:py-2
    md:text-base md:px-4 md:py-2
    flex items-center justify-center gap-2
  "
          onClick={handleAddToCart}
        >
          {/* Icon visible only on desktop */}
          <ShoppingCart className="hidden md:inline-block h-4 w-4" />

          Add to Cart
        </Button>

        <Button
          className="
      flex-1 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]

      text-xs px-2 py-1
      sm:text-sm sm:px-3 sm:py-2
      md:text-base md:px-4 md:py-2
    "
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </CardFooter>

    </Card>
  );
};
