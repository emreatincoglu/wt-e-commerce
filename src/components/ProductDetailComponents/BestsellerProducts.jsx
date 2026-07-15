import React from "react";
import ShopProductCard from "../ShopPageComponents/ShopProductCard";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";



function BestsellerProducts() {

  
 const products = useSelector((store) => store.product.productList);
 const categories = useSelector((store) => store.product.categories);
 const history = useHistory();

 const topProducts = [...products].sort((a, b) => b.rating - a.rating)
  .slice(0, 8);

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
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 py-12 md:px-0">
        <h2 className="border-b border-[#ececec] pb-6 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
          BESTSELLER PRODUCTS
        </h2>
        <div className="mt-6 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {topProducts.map((product, index) => (
            <ShopProductCard
              key={`${product.title}-${index}`}
              product={product}
              id={product.id}
              handleProductClick={handleProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestsellerProducts;
