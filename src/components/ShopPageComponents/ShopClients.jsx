import React from 'react';

const clientLogos = ['hooli', 'lyft', 'pied piper', 'stripe', 'aws', 'reddit'];

function ShopClients() {
  return (
    <section className="bg-[#fafafa] py-[50px] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid max-w-[1054px] grid-cols-2 items-center justify-items-center gap-y-12 px-10 text-[#737373] md:grid-cols-6 md:gap-y-0">
        {clientLogos.map((logo) => (
          <div
            className="text-[30px] font-bold leading-none tracking-[-1px] opacity-80 grayscale md:text-[34px]"
            key={logo}
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopClients;
