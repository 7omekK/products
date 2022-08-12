import clsx from "clsx";
import { useContext, useEffect } from "react";
import { ProductFiltersContext } from "../../contexts/productFilersContext";
import useProducts from "../../hooks/useProducts";
import { Product as ProductType } from "../../types/product";
import Product from "./product";

interface ProductFilteringProps {
  className?: string;
}

function ProductsList({ className }: ProductFilteringProps) {
  const {
    state: { products, lastPage },
    fetchProductPage,
    fetchProductWithFiltersApplayed,
    reset,
  } = useProducts();
  const { filters } = useContext(ProductFiltersContext);

  useEffect(() => {
    const { brandId, categoryId } = filters;
    const initialFiltersState =
      brandId === undefined && categoryId === undefined;
    if (initialFiltersState) {
      return;
    }
    fetchProductWithFiltersApplayed(filters);
  }, [filters.brandId, filters.categoryId]);

  const fetchMoreProductsClickHandler = () => {
    fetchProductPage(filters);
  };

  useEffect(() => {
    fetchProductPage(filters);

    return () => {
      reset();
    };
  }, []);

  return (
    <div
      className={clsx(
        "border-2 border-solid border-gray-500 py-3 px-8",
        className
      )}
    >
      <ul className=" block grid gap-y-4 grid-cols-1">
        {products.map((product: ProductType) => (
          <Product
            key={product.id}
            imgSrc={product.thumbnail}
            name={product.title}
            price={product.price}
          />
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center pt-4">
        {lastPage ? null : (
          <button
            className="block py-2 px-4 border-2 border-solid border-gray-500"
            onClick={fetchMoreProductsClickHandler}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
