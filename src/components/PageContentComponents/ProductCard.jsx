function ProductCard({ product }) {
  return (
    <article className="mx-auto w-full max-w-[260px] bg-white text-center xl:w-[183px]">
      <img
        alt=""
        className="h-[238px] w-full object-cover"
        src={product.images[0].url}
      />
      <div className="flex h-[162px] flex-col items-center px-0 pt-[25px]">
        <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {product.description}
        </h3>
    
        <div className="mt-2.5 flex items-center gap-[5px] py-[5px] text-base font-bold leading-6 tracking-[0.1px]">
      
          <span className="text-[#23856d]">$ {product.price}</span>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;
