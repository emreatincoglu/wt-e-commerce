import React from "react";

function AboutHero() {
  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid min-h-[620px] max-w-[1050px] items-center gap-12 px-6 py-14 md:grid-cols-[420px_1fr] md:px-0">
        <div className="text-center md:text-left">
          <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
            ABOUT COMPANY
          </p>
          <h1 className="mt-[35px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42] md:text-[58px] md:leading-[80px]">
            ABOUT US
          </h1>
          <p className="mx-auto mt-[35px] max-w-[320px] text-xl leading-[30px] tracking-[0.2px] text-[#737373] md:mx-0 md:max-w-[376px]">
            We know how large objects will act, but things on a small scale
          </p>
          <a
            className="mt-[35px] inline-flex h-[52px] items-center justify-center rounded-[5px] bg-[#23a6f0] px-10 text-sm font-bold leading-[22px] tracking-[0.2px] text-white"
            href="/contact"
          >
            Get Quote Now
          </a>
        </div>

        <div className="relative mx-auto h-[430px] w-full max-w-[520px] overflow-hidden md:h-[520px]">
          <div className="absolute left-[64px] top-[24px] h-[420px] w-[420px] rounded-full bg-[#ffe9ea] md:h-[500px] md:w-[500px]" />
          <div className="absolute left-[18px] top-[38px] h-[56px] w-[56px] rounded-full bg-[#ffe9ea]" />
          <div className="absolute right-[10px] top-[150px] h-4 w-4 rounded-full bg-[#977df4]" />
          <div className="absolute bottom-[95px] left-[18px] h-3 w-3 rounded-full bg-[#977df4]" />
          <div className="absolute right-[42px] top-[240px] h-[26px] w-[26px] rounded-full bg-[#ffe9ea]" />
          <img
            alt=""
            className="absolute bottom-0 left-1/2 h-[470px] max-w-none -translate-x-1/2 object-contain md:h-[560px]"
            src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=760&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
