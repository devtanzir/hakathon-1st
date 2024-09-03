import ProductSkeleton from "@/components/shared/product-skeleton";
import RateOnHover from "@/components/shared/ratings";
import getProducts from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = async ({ params }) => {
  const data = await getProducts(`https://dummyjson.com/products/${params.id}`);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data.images[0]}
              width={950}
              height={950}
              loading="lazy"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
                {data.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <RateOnHover />
                  <span className="text-gray-600 ml-3">
                    {data.reviews.length} Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{data.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${data.price}
                </span>
                <Link
                  href={"/products"}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
