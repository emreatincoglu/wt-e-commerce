import PromoCard from "./PromoCard";
function ShopCardsSection() {
  const categoryCards = [
    {
      title: "Top Product Of the Week",
      className: "md:h-[572px]",
      contentClassName:
        "bottom-0 left-0 h-[238px] w-[420px] pl-[66px] pt-[60px]",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Top Product Of the Week",
      className: "md:h-[289px]",
      contentClassName: "bottom-0 left-0 h-[173px] w-[347px] pl-9 pt-10",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Top Product Of the Week",
      className: "md:h-[261px]",
      contentClassName: "bottom-0 left-0 h-[153px] w-[360px] pl-9 pt-7",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto h-auto max-w-[1185px] px-6 py-20 md:h-[732px] md:px-0">
        <div className="grid gap-[15px] md:h-[572px] md:grid-cols-[612px_558px]">
          <PromoCard card={categoryCards[0]} />
          <div className="grid gap-[22px] md:h-[572px] md:grid-rows-[289px_261px]">
            <PromoCard card={categoryCards[1]} />
            <PromoCard card={categoryCards[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ShopCardsSection;
