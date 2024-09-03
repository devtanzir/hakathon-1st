const ProductSkeleton = () => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto animate-pulse flex justify-between items-center lg:w-4/5">
        {/* Card Image Skeleton */}
        <div className="lg:w-1/2 w-full h-[400px] bg-gray-400 rounded"></div>
        {/* Card Heading and Rating Skeleton */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:ml-4">
          <div className="w-1/4 h-6 bg-gray-400 rounded"></div>
          <div className="h-6 bg-gray-400 rounded mt-3"></div>
          <div className="w-1/3 h-6 bg-gray-400 rounded mt-3"></div>
          <div className="h-20 bg-gray-400 rounded  mt-3"></div>
          <div className="flex justify-between items-center mt-3">
            <div className="w-1/6 h-6 bg-gray-400 rounded"></div>
            <div className="w-1/6 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
