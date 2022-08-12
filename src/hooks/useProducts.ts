import { useState } from "react";
import { getProducts } from "../services/productService";
import { Product, ProductFilters } from "../types/product";

const PAGE_LIMIT = 5;

interface ProductsPaginationState {
  page: number;
  lastPage: boolean;
  products: Product[];
}

const initialState = {
  page: 1,
  products: [],
  lastPage: false,
};

function useProducts() {
  const [state, setState] = useState<ProductsPaginationState>(initialState);

  const fetchProductPage = async (filters: ProductFilters) => {
    try {
      const newProducts = await getProducts({
        ...filters,
        page: state.page,
        limit: PAGE_LIMIT,
      });
      setState((prevState) => {
        return {
          page: prevState.page + 1,
          products: [...prevState.products, ...newProducts],
          lastPage: newProducts.length < PAGE_LIMIT || !newProducts.length,
        };
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProductWithFiltersApplayed = async (filters: ProductFilters) => {
    try {
      const newProducts = await getProducts({
        ...filters,
        page: 1,
        limit: PAGE_LIMIT,
      });
      setState({
        page: 2,
        products: newProducts,
        lastPage: newProducts.length < PAGE_LIMIT || !newProducts.length,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const reset = () => {
    setState(initialState);
  };

  return { state, fetchProductPage, fetchProductWithFiltersApplayed, reset };
}

export default useProducts;
