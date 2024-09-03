import getProducts from "@/lib/getProducts";
import ProductsItem from "./products-item";

const Products = async () => {
  const data = await getProducts("https://dummyjson.com/products?limit=20");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.products.map((product) => (
              <ProductsItem key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
