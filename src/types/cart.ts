// export interface Variant {
//   combination: string;
// }

import { Variant } from "./product";

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
  selectedOptions: SelectedOption[];
  variant: Variant;
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

interface SelectedOption {
  name: string;
  value: string;
  type: string;
}

export interface AddToCartVariant {
  variantId?: string;
  quantity?: number;
  selectedOptions?: SelectedOption[];
}
