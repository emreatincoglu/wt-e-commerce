import ProductCard from './ProductCard';

function SectionHeading({ kicker, title, body }) {
  return (
    <div className="mx-auto max-w-[692px] text-center">
      {kicker && (
        <p className="text-xl leading-[30px] tracking-[0.2px] text-[#737373]">{kicker}</p>
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
    
      const products = Array.from({ length: 10 }, (_, index) => ({
  title: 'Graphic Design',
  department: 'English Department',
  oldPrice: '$16.48',
  price: '$6.48',
  image: `https://picsum.photos/seed/bandage-accurate-product-${index + 1}/366/476`,
}));

  return (
    <section className="bg-white">
      <div className="mx-auto min-h-[1241px] max-w-[1124px] px-6 py-20 md:px-0">
        <SectionHeading
          body="Problems trying to resolve the conflict between"
          kicker="Featured Products"
          title="BESTSELLER PRODUCTS"
        />
        <div className="mx-auto mt-20 grid max-w-[1035px] gap-x-[30px] gap-y-[15px] sm:grid-cols-2 md:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={`${product.title}-${index}`} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="h-[52px] w-64 rounded-[5px] border border-[#23a6f0] text-sm font-bold leading-[22px] tracking-[0.2px] text-[#23a6f0]"
            type="button"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProductCardsSection;