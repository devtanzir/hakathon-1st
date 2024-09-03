import Image from "next/image";
import Link from "next/link";

const ProductsItem = ({ product }) => {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link
          href={`/product/${product.id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <Image
            alt="ecommerce"
            className="object-contain object-center w-full h-full block cursor-pointer hover:scale-125 transition-all"
            src={product.thumbnail}
            width={300}
            height={300}
            loading="lazy"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.category}
          </h3>
          <Link href={`/product/${product.id}`}>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.title}
            </h2>
          </Link>

          <p className="mt-1">${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
