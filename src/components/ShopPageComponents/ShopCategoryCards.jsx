import React from "react";

const categories = [
  {
    title: "CLOTHS",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CLOTHS",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CLOTHS",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CLOTHS",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CLOTHS",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  },
];

function ShopCategoryCards() {
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid max-w-[1088px] gap-[15px] px-6 pb-12 pt-4 sm:grid-cols-2 lg:grid-cols-5 lg:px-0">
        {categories.map((category, index) => (
          <a
            className="group relative flex h-[223px] items-center justify-center overflow-hidden bg-[#252b42]"
            href="/shop"
            key={`${category.title}-${index}`}
          >
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105"
              src={category.image}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative text-center text-white">
              <h2 className="text-base font-bold leading-6 tracking-[0.1px]">
                {category.title}
              </h2>
              <p className="mt-1 text-sm font-bold leading-6 tracking-[0.2px]">
                5 Items
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ShopCategoryCards;
