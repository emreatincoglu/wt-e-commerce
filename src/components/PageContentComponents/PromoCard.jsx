function PromoCard({ card }) {
  return (
    <article
      className={`relative min-h-[261px] overflow-hidden ${card.className}`}
    >
      <img
        alt=""
        className="h-full min-h-[280px] w-full object-cover"
        src={card.image}
      />
      <div
        className={`absolute inset-x-0 bottom-0 p-6 bg-[rgba(45,139,192,0.75)] lg:inset-x-auto ${card.contentClassName}`}
      >
        <h2 className="max-w-[260px] text-xl font-bold leading-8 tracking-[0.1px] text-white">
          {card.title}
        </h2>
        <a
          className="mt-5 inline-flex h-[52px] w-[198px] items-center justify-center border border-white text-sm font-bold leading-[22px] tracking-[0.2px] text-white"
          href="/"
        >
          EXPLORE ITEMS
        </a>
      </div>
    </article>
  );
}
export default PromoCard;
