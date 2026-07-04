import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterColumn({ links, title }) {
  return (
    <div>
      <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">{title}</h3>
      <div className="mt-5 flex flex-col gap-2.5">
        {links.map((link) => (
          <NavLink
            className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
            key={link}
            to={`/${link.toLowerCase().replaceAll(' ', '-')}`}
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn;
