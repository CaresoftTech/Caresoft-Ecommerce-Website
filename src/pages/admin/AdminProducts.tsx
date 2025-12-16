import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { products as initialProducts } from "@/data/products";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { toast } from "sonner";
import { Package, Plus, Edit, Trash2 } from "lucide-react";

// ---- Interface ----
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  offerPrice?: number;
  discount?: number;
  image: string;
  category: string;
  stock_quantity?: number;
  is_active?: boolean;
}

export default function AdminProducts() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>(
    initialProducts.map((p) => ({ ...p, stock_quantity: 100, is_active: true }))
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
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
  }, [isAdmin, loading, navigate]);

  // ---- Submit Handler ----
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      offerPrice: formData.offerPrice ? parseFloat(formData.offerPrice) : undefined,
      discount: formData.discount ? parseInt(formData.discount) : undefined,
      image: formData.image,
      category: formData.category || "General",
      stock_quantity: formData.stock_quantity
        ? parseInt(formData.stock_quantity)
        : 0,
      is_active: true,
    };

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? productData : p))
      );
      toast.success("Product updated (demo only)");
    } else {
      setProducts((prev) => [productData, ...prev]);
      toast.success("Product added (demo only)");
    }

    setIsDialogOpen(false);
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      offerPrice: "",
      discount: "",
      image: "",
      stock_quantity: "",
      category: "",
    });
  };

  // ---- Edit ----
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      offerPrice: product.offerPrice?.toString() || "",
      discount: product.discount?.toString() || "",
      image: product.image,
      stock_quantity: product.stock_quantity?.toString() || "",
      category: product.category,
    });
    setIsDialogOpen(true);
  };

  // ---- Delete ----
  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("Product deleted (demo only)");
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dff2ff] via-[#ecf9ff] to-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">

   
        <div className="mb-10 animate-slideUp">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0f84c9] via-[#2a9eed] to-[#153f5b] bg-clip-text text-transparent">
            Product Management
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Add, edit, update, or remove products from your inventory.
          </p>
        </div>


        <Card className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl animate-fadeIn">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Package className="h-7 w-7 text-[#2a9eed]" />
                Products
              </CardTitle>

   
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => navigate("/admin/products/add")}
                    className="bg-gradient-to-r from-[#43b2f6] via-[#1e85c7] to-[#0f425c] text-white shadow-md"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>

                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingProduct ? "Edit Product" : "Add New Product"}
                    </DialogTitle>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Inputs */}
                    <div>
                      <Label>Product Name</Label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Price (₹)</Label>
                        <Input
                          type="number"
                          value={formData.price}
                          onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label>Offer Price (₹)</Label>
                        <Input
                          type="number"
                          value={formData.offerPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              offerPrice: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Discount (%)</Label>
                        <Input
                          type="number"
                          value={formData.discount}
                          onChange={(e) =>
                            setFormData({ ...formData, discount: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <Label>Stock Quantity</Label>
                        <Input
                          type="number"
                          value={formData.stock_quantity}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              stock_quantity: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Category</Label>
                      <Input
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label>Image URL</Label>
                      <Input
                        value={formData.image}
                        onChange={(e) =>
                          setFormData({ ...formData, image: e.target.value })
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#43b2f6] via-[#1e85c7] to-[#0f425c] text-white"
                    >
                      {editingProduct ? "Update Product" : "Add Product"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>

         
          <CardContent>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <Table className="min-w-full">
                <TableHeader className="bg-gradient-to-r from-[#43b2f6] via-[#1e85c7] to-[#0f425c]">
                  <TableRow>
                    <TableHead className="text-white">Image</TableHead>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Price</TableHead>
                    <TableHead className="text-white">Stock</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      key={product.id}
                      className="hover:bg-[#e8f7ff] transition-all"
                    >
                      <TableCell>
                        <img
                          src={product.image}
                          className="h-12 w-12 object-cover rounded"
                        />
                      </TableCell>

                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>

                      <TableCell>
                        ₹{product.offerPrice || product.price}
                        {product.discount && (
                          <span className="text-xs ml-2 line-through text-gray-500">
                            ₹{product.price}
                          </span>
                        )}
                      </TableCell>

                      <TableCell>{product.stock_quantity}</TableCell>

                      <TableCell
                        className={
                          product.is_active
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {product.is_active ? "Active" : "Inactive"}
                      </TableCell>

                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(product)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

    
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn .8s ease-out forwards; }

            @keyframes slideUp {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slideUp { animation: slideUp .7s ease-out forwards; }
          `}
        </style>
      </div>
    </div>
  );
}
