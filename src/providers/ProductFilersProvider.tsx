import { ClassValue } from "clsx";
import { ReactNode, useState } from "react";
import { ProductFiltersContext } from "../contexts/productFilersContext";
import { ProductFilters } from "../types/product";

interface Props {
  children: ReactNode | ReactNode[];
}

const ProductFiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<ProductFilters>({});

  const updateFilters = (filters: ProductFilters) => {
    setFilters(filters);
  };

  return (
    <ProductFiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </ProductFiltersContext.Provider>
  );
};

export default ProductFiltersProvider;
