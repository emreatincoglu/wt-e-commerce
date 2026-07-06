import React from 'react';
import ContactSocialLinks from './ContactSocialLinks';

function ContactHero() {
  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid min-h-[742px] max-w-[1050px] items-center gap-12 px-6 py-16 md:grid-cols-[469px_1fr] md:px-0">
        <div>
          <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
            CONTACT US
          </p>
          <h1 className="mt-[35px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42] md:text-[58px] md:leading-[80px]">
            Get in touch today!
          </h1>
          <p className="mt-[35px] max-w-[376px] text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mt-[35px] space-y-[15px] text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>
          <ContactSocialLinks className="mt-[35px] text-[#252b42]" />
        </div>

        <div className="relative mx-auto h-[531px] w-full max-w-[531px] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[#ffe9ea]" />
          <div className="absolute left-[28px] top-[32px] h-[76px] w-[76px] rounded-full bg-[#977df4]" />
          <div className="absolute right-[25px] top-[86px] h-4 w-4 rounded-full bg-[#977df4]" />
          <div className="absolute bottom-[72px] right-[42px] h-[31px] w-[31px] rounded-full bg-[#977df4]" />
          <img
            alt=""
            className="absolute bottom-0 left-1/2 h-[560px] max-w-none -translate-x-1/2 object-contain"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
