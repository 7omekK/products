import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ProductFiltersContext } from "../../contexts/productFilersContext";
import {
  getProductsBrands,
  getProductsCategories,
} from "../../services/productService";
import { ProductBrand, ProductCategory } from "../../types/product";
import Select from "../inputs/select";

interface ProductFilteringProps {
  className?: string;
}

function ProductFiltering({ className }: ProductFilteringProps) {
  const [productsCategories, setProductsCategories] = useState<
    ProductCategory[]
  >([]);
  const [productsBrands, setProductsBrands] = useState<ProductBrand[]>([]);
  const { filters, updateFilters } = useContext(ProductFiltersContext);

  const fetchProductsCategories = async () => {
    try {
      const data = await getProductsCategories();
      setProductsCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductsBrands = async () => {
    try {
      const data = await getProductsBrands();
      setProductsBrands(data);
    } catch (error) {
      // In real project I would also inform an user about the error,
      // like displaying snackbar with error message
      console.error(error);
    }
  };

  const brandIdChangeHandler = (brandId: string) => {
    updateFilters({ ...filters, brandId: brandId ? parseInt(brandId) : null });
  };

  const categoryIdChangeHandler = (categoryId: string) => {
    updateFilters({
      ...filters,
      categoryId: categoryId ? parseInt(categoryId) : null,
    });
  };

  useEffect(() => {
    fetchProductsCategories();
    fetchProductsBrands();
  }, []);

  return (
    <div className={clsx("border-2 border-solid border-gray-500", className)}>
      <h4 className="py-3 uppercase text-center">filtering</h4>
      <hr className="border-t-2 border-solid border-gray-500" />
      <div className="flex flex-wrap justify-between py-3 px-8">
        <div className="shrink-0">
          <Select
            className="border-2 border-solid border-gray-500"
            label="select brand"
            onChange={brandIdChangeHandler}
          >
            {productsBrands.map((brand) => (
              <Select.Option key={brand.id} value={brand.id}>
                {brand.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="shrink-0">
          <Select
            className="border-2 border-solid border-gray-500"
            label="select category"
            onChange={categoryIdChangeHandler}
          >
            {productsCategories.map((category) => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ProductFiltering;
