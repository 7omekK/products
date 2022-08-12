import { createContext } from "react";
import { ProductFilters } from "../types/product";

interface ContextValue {
  filters: ProductFilters;
  updateFilters: (filters: ProductFilters) => void;
}

export const ProductFiltersContext = createContext<ContextValue>({
  filters: {},
  updateFilters: () => {},
});
