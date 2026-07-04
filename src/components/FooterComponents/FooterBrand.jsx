import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterSocialLinks from './FooterSocialLinks';

function FooterBrand() {
  return (
    <div className="bg-[#fafafa]">
      <div className="mx-auto flex min-h-[173px] max-w-[1050px] flex-col items-start justify-center gap-[11.5px] px-11 md:min-h-[142px] md:flex-row md:items-center md:justify-between md:px-0">
        <NavLink
          className="text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]"
          exact
          to="/"
        >
          Bandage
        </NavLink>
        <FooterSocialLinks />
      </div>
    </div>
  );
}

export default FooterBrand;
