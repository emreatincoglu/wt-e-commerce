import React from 'react';
import { NavLink } from 'react-router-dom';

const heroImage =
  'https://www.figma.com/api/mcp/asset/edd0b1ab-c6da-4d6f-901f-ac81060e100a';

function HeroSection() {
  return (
    <>
      <section className="px-[13px] md:hidden">
        <div className="flex min-h-[902px] flex-col items-center overflow-hidden">
          <div className="flex w-full max-w-[394px] flex-col items-center pt-20 text-center">
            <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#2a7cc7]">
              SUMMER 2020
            </p>
            <h1 className="mt-8 max-w-[300px] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42]">
              NEW COLLECTION
            </h1>
            <p className="mt-8 max-w-[291px] text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </p>
            <NavLink
              className="mt-8 rounded-[5px] bg-[#23a6f0] px-10 py-[15px] text-2xl font-bold leading-8 tracking-[0.1px] text-white"
              to="/shop"
            >
              SHOP NOW
            </NavLink>
          </div>

          <div className="pointer-events-none relative mt-[66px] h-[453px] w-full max-w-[388px]">
            <div className="absolute left-[37px] top-10 h-[294px] w-[294px] rounded-full bg-white" />
            <div className="absolute left-0 top-12 h-[47px] w-[47px] rounded-full bg-white" />
            <div className="absolute right-[32px] top-[191px] h-[18px] w-[18px] rounded-full bg-[#977df4]" />
            <div className="absolute right-[28px] top-[114px] h-[9px] w-[9px] rounded-full bg-[#977df4]" />
            <div className="absolute left-[16px] top-[289px] h-[9px] w-[9px] rounded-full bg-[#977df4]" />
            <img
              alt=""
              className="absolute left-1/2 top-[6px] h-[433px] w-[410px] max-w-none -translate-x-1/2 object-contain object-bottom"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mb-8 hidden max-w-[1292px] px-4 pt-6 md:block lg:px-0">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#96e9fb] to-[#abecd6]">
          <div className="grid min-h-[622px] items-center lg:grid-cols-[548px_minmax(0,1fr)] lg:pl-[112px] xl:pl-[116px]">
            <div className="relative z-10 flex flex-col items-start gap-[30px] px-8 py-14 sm:px-14 lg:px-0 lg:py-0">
              <p className="text-base font-bold leading-6 tracking-[0.1px] text-[#2a7cc7]">
                SUMMER 2020
              </p>
              <h1 className="max-w-[548px] text-[42px] font-bold leading-[52px] tracking-[0.2px] text-[#252b42] sm:text-[58px] sm:leading-[80px]">
                NEW COLLECTION
              </h1>
              <p className="max-w-[376px] text-xl leading-[30px] tracking-[0.2px] text-[#737373]">
                We know how large objects will act, but things on a small scale.
              </p>
              <NavLink
                className="rounded-[5px] bg-[#23a6f0] px-10 py-[15px] text-2xl font-bold leading-8 tracking-[0.1px] text-white transition hover:bg-[#168bd0]"
                to="/shop"
              >
                SHOP NOW
              </NavLink>
            </div>

            <div className="pointer-events-none relative hidden h-[622px] lg:block">
              <div className="absolute left-[42px] top-[1px] h-[500px] w-[500px] rounded-full bg-white" />
              <div className="absolute left-[0px] top-[38px] h-20 w-20 rounded-full bg-white" />
              <div className="absolute right-[-45px] top-[84px] h-8 w-8 rounded-full bg-[#977df4]" />
              <div className="absolute right-[-10px] top-[216px] h-8 w-8 rounded-full bg-white" />
              <div className="absolute left-[42px] top-[292px] h-[15px] w-[15px] rounded-full bg-[#977df4]" />
              <img
                alt=""
                className="absolute bottom-0 right-[-65px] h-[565px] w-[850px] max-w-none object-contain object-bottom"
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
