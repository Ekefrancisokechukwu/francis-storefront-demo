export interface Variant {
  combination: string;
}

export interface Product {
  name: string;
  price: number;
  brand: string;
  images: { url: string }[];
}
export interface CartItem {
  product: Product;
  unitPrice: number;
  quantity: number;
  itemTotal: number;
  _id: string;
}

export interface ApiResponse {
  cart: {
    _id: string;
    totalPrice: number;
    totalItems: number;
    items: CartItem[];
  };
}
