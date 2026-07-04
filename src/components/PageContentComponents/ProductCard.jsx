function ProductCard({ product }) {
    
    
  return (
    <article className="w-full bg-white text-center md:w-[183px]">
      <img alt="" className="h-[238px] w-full object-cover" src={product.image} />
      <div className="flex h-[162px] flex-col items-center px-0 pt-[25px]">
        <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {product.title}
        </h3>
        <p className="mt-2.5 text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          {product.department}
        </p>
        <div className="mt-2.5 flex items-center gap-[5px] py-[5px] text-base font-bold leading-6 tracking-[0.1px]">
          <span className="text-[#bdbdbd]">{product.oldPrice}</span>
          <span className="text-[#23856d]">{product.price}</span>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;