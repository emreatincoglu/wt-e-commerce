import React from "react";

const stats = [
  { value: "15K", label: "Happy Customers" },
  { value: "150K", label: "Monthly Visitors" },
  { value: "15", label: "Countries Worldwide" },
  { value: "100+", label: "Top Partners" },
];

function AboutStats() {
  return (
    <section className="bg-white py-12 font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 md:px-0">
        <div className="grid gap-8 md:grid-cols-2 md:items-center lg:grid-cols-[394px_545px] lg:gap-[86px]">
          <div>
            <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#e74040]">
              Problems trying
            </p>
            <h2 className="mt-6 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>
          <p className="text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </div>

        <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[48px] font-bold leading-[64px] tracking-[0.2px] text-[#252b42] sm:text-[58px] sm:leading-[80px]">
                {stat.value}
              </p>
              <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStats;
