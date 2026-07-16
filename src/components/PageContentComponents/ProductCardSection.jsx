import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getProducts } from "../../actions/productActions";
import ShopProductCard from "../ShopPageComponents/ShopProductCard";

function SectionHeading({ kicker, title, body }) {
  return (
    <div className="mx-auto max-w-[692px] text-center">
      {kicker && (
        <p className="text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
          {kicker}
        </p>
      )}
      <h2 className="mt-2.5 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
        {title}
      </h2>
      {body && (
        <p className="mx-auto mt-2.5 max-w-[469px] text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
          {body}
        </p>
      )}
    </div>
  );
}

function ProductCardsSection() {

  function handleProductClick(productItem) {
    const productCategoryId = productItem.category_id;
    const category = categories.find(
      (category) => category.id === productCategoryId,
    );

    const productNameSlug = productItem.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-");

    history.push(
      `/shop/${category.gender === "k" ? "kadin" : "erkek"}/${category.title}/${category.id}/${productNameSlug}/${productItem.id}`,
    );
    
    
  };

  const products = useSelector((store) => store.product.productList);
   const categories = useSelector((store) => store.product.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProducts())
  },[])

 const topProducts = [...products].sort((a, b) => b.rating - a.rating)
  .slice(0, 10);


  return (
    <section className="bg-white">
      <div className="mx-auto min-h-[1241px] max-w-[1124px] px-5 py-14 sm:px-6 md:py-20 xl:px-0">
        <SectionHeading
          body="Problems trying to resolve the conflict between"
          kicker="Featured Products"
          title="BESTSELLER PRODUCTS"
        />
        <div className="mx-auto mt-12 grid max-w-[1035px] gap-x-[30px] gap-y-[30px] sm:grid-cols-2 md:grid-cols-3 lg:mt-20 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-[15px]">
          {topProducts.map((product, index) => (
             <ShopProductCard
              key={`${product.title}-${index}`}
              product={product}
              id={product.id}
              handleProductClick={handleProductClick}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="h-[52px] w-64 rounded-[5px] border border-[#23a6f0] text-sm font-bold leading-[22px] tracking-[0.2px] text-[#23a6f0] cursor-pointer"
            type="button"
            onClick={() => history.push("/shop")}
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProductCardsSection;
