import React from "react";

function AboutWorkWithUs() {
  return (
    <section className="grid font-['Montserrat',ui-sans-serif,system-ui] md:grid-cols-[1fr_590px]">
      <div className="bg-[#2a7cc7] px-6 py-20 text-white md:flex md:min-h-[636px] md:items-center md:justify-end md:px-0">
        <div className="w-full max-w-[750px] md:mr-[90px]">
          <p className="text-base font-bold leading-6 tracking-[0.1px]">WORK WITH US</p>
          <h2 className="mt-6 text-[40px] font-bold leading-[50px] tracking-[0.2px]">
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
      <div className="hidden bg-[#f2f4f6] md:block">
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
