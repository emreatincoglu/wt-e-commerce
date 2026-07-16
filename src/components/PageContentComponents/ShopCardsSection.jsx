import PromoCard from "./PromoCard";
function ShopCardsSection() {
  const categoryCards = [
    {
      title: "Top Product Of the Week",
      className: "lg:h-[572px]",
      contentClassName:
        "lg:h-[238px] lg:w-[420px] lg:pl-[66px] lg:pt-[60px]",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Top Product Of the Week",
      className: "lg:h-[289px]",
      contentClassName: "lg:h-[173px] lg:w-[347px] lg:pl-9 lg:pt-10",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Top Product Of the Week",
      className: "lg:h-[261px]",
      contentClassName: "lg:h-[153px] lg:w-[360px] lg:pl-9 lg:pt-7",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto h-auto max-w-[1185px] px-5 py-14 sm:px-6 md:py-20 lg:h-[732px] lg:px-0">
        <div className="grid gap-[15px] lg:h-[572px] lg:grid-cols-[minmax(0,612px)_minmax(0,558px)]">
          <PromoCard card={categoryCards[0]} />
          <div className="grid gap-[22px] lg:h-[572px] lg:grid-rows-[289px_261px]">
            <PromoCard card={categoryCards[1]} />
            <PromoCard card={categoryCards[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ShopCardsSection;
