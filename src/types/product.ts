export interface Product {
  id: number;
  title: string;
  categoryId: number;
  brandId: number;
  price: number;
  thumbnail: string;
}

export interface ProductCategory {
  id: number;
  name: string;
}

export interface ProductBrand {
  id: number;
  name: string;
}

export interface ProductFilters {
  categoryId?: number | null;
  brandId?: number | null;
}

export interface GetProductConfig extends ProductFilters {
  page: number;
  limit?: number;
}
