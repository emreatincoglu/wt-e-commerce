function ContentSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[658px] max-w-[1050px] items-center gap-[90px] px-6 py-20 md:grid-cols-[513px_447px] md:px-0">
        <div className="grid h-[498px] grid-cols-[217px_280px] gap-4 overflow-hidden">
          <img
            alt=""
            className="h-[498px] w-full object-cover"
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=720&q=80"
          />
          <img
            alt=""
            className="h-[498px] w-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=520&q=80"
          />
        </div>
        <div className="max-w-[447px]">
          <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#23a6f0]">
            Featured Products
          </p>
          <h2 className="mt-4 text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42]">
            We love what we do
          </h2>
          <p className="mt-4 max-w-[351px] text-sm font-bold leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics. Problems trying to resolve the conflict between the two
            major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>
  );
}
export default ContentSection;