import React, { useEffect } from "react";
import ShopProductCard from "./ShopProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setFetchState } from "../../actions/productActions";

function ShopProducts() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);
  const fetchStatus = useSelector((store) => store.product.fetchState);

  const isFetched = fetchStatus === "NOT_FETCHED";

  useEffect(() => {
    dispatch(setFetchState('NOT_FETCHED'))
    dispatch(getProducts());
  }, []);

  return isFetched ? (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <svg className="text-cyan-400 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
    width="24" height="24">
    <path
      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
      stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path
      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
      stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
    </path>
  </svg>
</div>
  ) : (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 pb-12 md:px-0">
        <div className="grid gap-x-[30px] gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
           {products.map((product, index) => (
            <ShopProductCard
              key={`${product.name}-${index}`}
              product={product}
              id={product.id}
            />
          ))} 
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex overflow-hidden rounded-[6px] border border-[#bdbdbd] text-sm font-bold leading-6 tracking-[0.2px]">
            <button
              className="bg-[#f3f3f3] px-[15px] py-[20px] text-[#bdbdbd]"
              type="button"
            >
              First
            </button>
            <button
              className="border-l border-[#bdbdbd] px-3 py-[20px] text-[#23a6f0]"
              type="button"
            >
              1
            </button>
            <button
              className="bg-[#23a6f0] px-3 py-[20px] text-white"
              type="button"
            >
              2
            </button>
            <button
              className="border-l border-[#bdbdbd] px-3 py-[20px] text-[#23a6f0]"
              type="button"
            >
              3
            </button>
            <button
              className="border-l border-[#bdbdbd] px-[15px] py-[20px] text-[#23a6f0]"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopProducts;