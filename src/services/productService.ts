import { config } from "../constants/env";
import {
  GetProductConfig,
  Product,
  ProductBrand,
  ProductCategory,
} from "../types/product";

export async function getProducts(
  parameters: GetProductConfig
): Promise<Product[]> {
  const cateogryFilterQuery = parameters.categoryId
    ? `&categoryId=${parameters.categoryId}`
    : "";
  const brandFilterQuery = parameters.brandId
    ? `&brandId=${parameters.brandId}`
    : "";
  const limitQuery = parameters.limit ? `&_limit=${parameters.limit}` : "";
  const response = await fetch(
    `${config.HOST}/products?_page=${
      parameters.page + limitQuery + cateogryFilterQuery + brandFilterQuery
    }`
  );
  if (!response.ok) {
    throw new Error("An error occured while fetching products");
  }
  return await response.json();
}

export async function getProductsCategories(): Promise<ProductCategory[]> {
  const response = await fetch(`${config.HOST}/categories`);
  if (!response.ok) {
    throw new Error("An error occured while fetching products categories");
  }
  return await response.json();
}

export async function getProductsBrands(): Promise<ProductBrand[]> {
  const response = await fetch(`${config.HOST}/brands`);

  if (!response.ok) {
    throw new Error("An error occured while fetching products brands");
  }

  return await response.json();
}
