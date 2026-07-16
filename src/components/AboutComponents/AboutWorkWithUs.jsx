import React from "react";

function AboutWorkWithUs() {
  return (
    <section className="grid font-['Montserrat',ui-sans-serif,system-ui] lg:grid-cols-[minmax(0,1fr)_minmax(360px,590px)]">
      <div className="bg-[#2a7cc7] px-6 py-16 text-white lg:flex lg:min-h-[636px] lg:items-center lg:justify-end lg:px-0">
        <div className="w-full max-w-[750px] lg:mr-[clamp(32px,6vw,90px)]">
          <p className="text-base font-bold leading-6 tracking-[0.1px]">WORK WITH US</p>
          <h2 className="mt-6 text-[32px] font-bold leading-10 tracking-[0.2px] sm:text-[40px] sm:leading-[50px]">
            Now Let&apos;s grow Yours
          </h2>
          <p className="mt-6 max-w-[320px] text-sm font-bold leading-5 tracking-[0.2px]">
            The gradual accumulation of information about atomic and small-scale behavior during
            the first quarter of the 20th
          </p>
          <a
            className="mt-6 inline-flex h-[52px] items-center justify-center rounded-[5px] border border-white px-10 text-sm font-bold leading-[22px] tracking-[0.2px] text-white"
            href="/contact"
          >
            Button
          </a>
        </div>
      </div>
      <div className="hidden bg-[#f2f4f6] lg:block">
        <img
          alt=""
          className="h-full min-h-[636px] w-full object-cover object-top"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
        />
      </div>
    </section>
  );
}

export default AboutWorkWithUs;
