function ContentSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[658px] max-w-[1050px] items-center gap-12 px-5 py-14 sm:px-6 md:py-20 lg:grid-cols-[513px_447px] lg:gap-[90px] lg:px-0">
        <div className="grid h-[360px] min-w-0 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3 overflow-hidden sm:h-[430px] md:gap-4 lg:h-[498px] lg:grid-cols-[217px_280px]">
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=720&q=80"
          />
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=520&q=80"
          />
        </div>
        <div className="mx-auto max-w-[447px] text-center lg:mx-0 lg:text-left">
          <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#23a6f0]">
            Featured Products
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-10 tracking-[0.2px] text-[#252b42] sm:text-[40px] sm:leading-[50px]">
            We love what we do
          </h2>
          <p className="mx-auto mt-4 max-w-[351px] text-sm font-bold leading-5 tracking-[0.2px] text-[#737373] lg:mx-0">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics. Problems trying to
            resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>
  );
}
export default ContentSection;
