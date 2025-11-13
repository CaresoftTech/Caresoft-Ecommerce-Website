import { Product, useCart } from '@/contexts/CartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
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
              <span className="text-2xl font-bold text-primary">
                ${product.offerPrice}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-primary">${product.price}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button
          className="flex-1"
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};
