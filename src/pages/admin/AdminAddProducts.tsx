import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export default function AdminAddProducts() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    offerPrice: "",
    discount: "",
    image: "",
    stock_quantity: "",
    category: "",
  });

  useEffect(() => {
    if (!loading && !isAdmin) navigate("/signin");
  }, [loading, isAdmin, navigate]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: form.name,
      description: form.description,
      price: Number(form.price),
      offerPrice: form.offerPrice ? Number(form.offerPrice) : undefined,
      discount: form.discount ? Number(form.discount) : undefined,
      image: form.image,
      stock_quantity: Number(form.stock_quantity || 0),
      category: form.category || "General",
      is_active: true,
    };

    console.log("Added Product (demo):", newProduct);
    toast.success("Product added successfully (demo)");
    navigate("/admin/products");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dff2ff] via-[#ecf9ff] to-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/admin/products")}
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-3xl font-bold text-[#3491cb]">
            Add New Product
          </h1>
        </div>

        <Card className="rounded-3xl shadow-xl text-[#3491cb] text-xl hover:shadow-[#3491cb]">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <Label>Product Name</Label>
                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Price</Label>
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Offer Price</Label>
                  <Input
                    type="number"
                    value={form.offerPrice}
                    onChange={(e) =>
                      setForm({ ...form, offerPrice: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Discount (%)</Label>
                  <Input
                    type="number"
                    value={form.discount}
                    onChange={(e) =>
                      setForm({ ...form, discount: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Stock Quantity</Label>
                  <Input
                    type="number"
                    value={form.stock_quantity}
                    onChange={(e) =>
                      setForm({ ...form, stock_quantity: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label>Category</Label>
                <Input
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                />
              </div>

              {/* ✅ IMAGE URL FIELD */}
              <div>
                <Label>Image URL</Label>
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                />
              </div>

              {/* ✅ IMAGE FILE UPLOAD FIELD */}
              <div>
                <Label>Upload Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setForm({
                        ...form,
                        image: URL.createObjectURL(file),
                      });
                    }
                  }}
                />

                {form.image && (
                  <img
                    src={form.image}
                    alt="Preview"
                    className="mt-3 h-32 rounded-lg object-cover"
                  />
                )}
              </div>

              <Button className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-blue-700">
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
