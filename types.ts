
export type Category = 'Sweets' | 'Cakes' | 'Snacks';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserDetails {
  fullName: string;
  phone: string;
  address: string;
  deliveryMethod: 'pickup' | 'home';
  paymentMethod: 'qr' | 'cod';
}

export type AppView = 'catalog' | 'cart' | 'checkout' | 'success' | 'about';
