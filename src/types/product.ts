interface Image {
  public_id: string;
  url: string;
}

type VariantOption = {
  name: string;
  value: string;
  type: "color" | "size" | "material" | "style";
  displayName: string;
  hexCode?: string;
  _id: string;
};

interface PriceAdjustment {
  type: "fixed" | "percentage";
  value: number;
}

type Variant = {
  combination: {
    id: string;
    isActive: boolean;
    isDefault: boolean;
  };
  inventory: {
    inStock: number;
    lowStockThreshold: number;
    backorderable: boolean;
    preorderable: boolean;
  };
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  _id: string;
  product: string;
  name: string;
  options: VariantOption[];
  basePrice: number;
  sku: string;
  weight: number;
  images: string[];
  isActive: boolean;
  priceAdjustments: PriceAdjustment[];
};

export interface Product {
  _id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  tags: string[];
  categories: string[];
  images: Image[];
  inStock: number;
  brand: string;
  rating: number;
  featured: boolean;
  variants: Variant[];
  reviews: [];
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  brands?: string;
  minPrice?: string;
  maxPrice?: string;
  featured?: boolean;
  search?: string;
  colors?: string;
  tags?: string;
  availability?: string;
  rating?: number;
}

export type StockStats = {
  inStock: number;
  outOfStock: number;
};

export type Tag = {
  count: number;
  tag: string;
};

export type Color = {
  hexCode: string;
  displayName: string;
  value: string;
};

export type Brand = {
  count: number;
  brand: string;
};

export type ProductFilters = {
  stockStats: StockStats;
  productHighestPrice: number;
  tags: Tag[];
  colors: Color[];
  brands: Brand[];
};
