import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getCategories } from "../../actions/productActions";

function ShopCategoryCards() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((store) => store.product.categories);

  const navigateToCategory = (category) => {
    history.push(`/shop/${category.gender === 'k' ? 'kadin' : 'erkek' }/${category.title}/${category.id}`);
  };

  const topCategories = [...categories]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5);

  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid max-w-[1088px] gap-[15px] px-6 pb-12 pt-4 sm:grid-cols-2 lg:grid-cols-5 lg:px-0" >
        {topCategories.map((category, index) => (
          <a
            className="group relative flex h-[223px] items-center justify-center overflow-hidden bg-[#252b42]"
            href="/shop"
            key={`${category.title}-${index}`}
            onClick={() => navigateToCategory(category)}
          >
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105"
              src={category.img}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative text-center text-white">
              <h2 className="text-base font-bold leading-6 tracking-[0.1px]">
                {category.gender === 'k' ? 'Kadın' : 'Erkek'} {category.title}
              </h2>
              <p className="mt-1 text-sm font-bold leading-6 tracking-[0.2px]">
                {category.rating}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ShopCategoryCards;