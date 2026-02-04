import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // FIXED ID ERROR HERE
  const product = products.find(
    (p) => String(p.id) === id
  );

  const [selectedImg, setSelectedImg] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  // If multiple images later you can replace
  const images = [
    product.image,
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to Cart");
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 md:px-10 py-8">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT IMAGE SECTION */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
                <img
                  src={selectedImg}
                  alt={product.name}
                  className="w-full h-80 object-contain"
                />
              </div>

              <div className="flex gap-3">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setSelectedImg(img)}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
                    ${
                      selectedImg === img
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT DETAILS SECTION */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                {product.name}
              </h1>

              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-green-600">
                  ₹{product.offerPrice || product.price}
                </span>

                {product.offerPrice && (
                  <span className="text-lg text-red-500 line-through">
                    ₹{product.price}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Inclusive of all taxes • Free Delivery Available
              </p>

              <Button
                className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
