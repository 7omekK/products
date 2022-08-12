import ProductFiltering from "../../components/products/products-filtering";
import ProductsList from "../../components/products/products-list";
import ProductFiltersProvider from "../../providers/ProductFilersProvider";

function ProductsPage() {
  return (
    <ProductFiltersProvider>
      <div className="py-5">
        <header>
          <ProductFiltering className="w-152 mx-auto" />
        </header>
        <main>
          <ProductsList className="w-152 mx-auto mt-3" />
        </main>
      </div>
    </ProductFiltersProvider>
  );
}

export default ProductsPage;
