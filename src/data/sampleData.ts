// Sample static data for frontend-only ecommerce site

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_id: string;
  total_amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Returned';
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  product_name: string;
  product_image: string;
  quantity: number;
  price: number;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

// Sample Categories
export const sampleCategories: Category[] = [
  { id: '1', name: 'All Products', slug: 'all' },
  { id: '2', name: 'Laptops', slug: 'laptops' },
  { id: '3', name: 'Smartphones', slug: 'smartphones' },
  { id: '4', name: 'Audio', slug: 'audio' },
  { id: '5', name: 'Monitors', slug: 'monitors' },
  { id: '6', name: 'Accessories', slug: 'accessories' },
  { id: '7', name: 'Storage', slug: 'storage' },
];

// Sample Customers
export const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    address: '123, MG Road, Bangalore, Karnataka 560001',
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91 9876543211',
    address: '456, Linking Road, Mumbai, Maharashtra 400050',
    created_at: '2024-02-20T14:45:00Z',
  },
  {
    id: '3',
    name: 'Amit Kumar',
    email: 'amit.kumar@email.com',
    phone: '+91 9876543212',
    address: '789, Connaught Place, New Delhi 110001',
    created_at: '2024-03-10T09:15:00Z',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@email.com',
    phone: '+91 9876543213',
    address: '321, Jubilee Hills, Hyderabad, Telangana 500033',
    created_at: '2024-03-25T16:20:00Z',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram.singh@email.com',
    phone: '+91 9876543214',
    address: '654, Salt Lake, Kolkata, West Bengal 700091',
    created_at: '2024-04-05T11:00:00Z',
  },
];

// Sample Orders
export const sampleOrders: Order[] = [
  {
    id: '1',
    order_number: 'ORD-20240401-001',
    customer_id: '1',
    total_amount: 1599,
    status: 'Delivered',
    created_at: '2024-04-01T10:30:00Z',
    items: [
      { id: '1-1', product_name: 'Gaming Laptop Pro X1', product_image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500', quantity: 1, price: 1599 },
    ],
  },
  {
    id: '2',
    order_number: 'ORD-20240405-002',
    customer_id: '2',
    total_amount: 778,
    status: 'Shipped',
    created_at: '2024-04-05T14:45:00Z',
    items: [
      { id: '2-1', product_name: 'Wireless Noise-Cancelling Headphones', product_image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500', quantity: 1, price: 279 },
      { id: '2-2', product_name: 'Ultra-Wide Monitor 34"', product_image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500', quantity: 1, price: 499 },
    ],
  },
  {
    id: '3',
    order_number: 'ORD-20240410-003',
    customer_id: '3',
    total_amount: 178,
    status: 'Processing',
    created_at: '2024-04-10T09:15:00Z',
    items: [
      { id: '3-1', product_name: 'Mechanical Gaming Keyboard RGB', product_image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500', quantity: 1, price: 119 },
      { id: '3-2', product_name: 'Wireless Gaming Mouse', product_image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500', quantity: 1, price: 59 },
    ],
  },
  {
    id: '4',
    order_number: 'ORD-20240415-004',
    customer_id: '4',
    total_amount: 1099,
    status: 'Pending',
    created_at: '2024-04-15T16:20:00Z',
    items: [
      { id: '4-1', product_name: 'Smartphone Pro Max 256GB', product_image: 'https://images.unsplash.com/photo-1592286927505-c0cdd2eb1f14?w=500', quantity: 1, price: 1099 },
    ],
  },
  {
    id: '5',
    order_number: 'ORD-20240420-005',
    customer_id: '5',
    total_amount: 408,
    status: 'Cancelled',
    created_at: '2024-04-20T11:00:00Z',
    items: [
      { id: '5-1', product_name: 'Portable SSD 2TB', product_image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500', quantity: 1, price: 249 },
      { id: '5-2', product_name: 'Webcam 4K Pro', product_image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500', quantity: 1, price: 159 },
    ],
  },
];

// Sample Banners
export const sampleBanners: Banner[] = [
  {
    id: '1',
    title: 'Summer Sale',
    subtitle: 'Up to 50% off on select items',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop',
    link: '/customer',
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Check out the latest tech gadgets',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=400&fit=crop',
    link: '/customer',
  },
  {
    id: '3',
    title: 'Free Shipping',
    subtitle: 'On orders above ₹5000',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop',
    link: '/customer',
  },
];

// Sample offers
export const sampleOffers = [
  { id: '1', title: 'Flash Sale', discount: '30% OFF', description: 'Limited time offer on laptops' },
  { id: '2', title: 'Bundle Deal', discount: 'Save ₹500', description: 'Buy keyboard + mouse combo' },
  { id: '3', title: 'Student Discount', discount: '15% OFF', description: 'With valid student ID' },
];

// Admin credentials (hardcoded for demo)
export const ADMIN_CREDENTIALS = {
  email: 'admin@caresoft.com',
  password: 'admin123',
};
