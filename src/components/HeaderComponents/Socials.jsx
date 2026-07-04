import React from 'react';
import { Mail, Phone } from 'lucide-react';

const topSocialIcons = [
  {
    label: 'Instagram',
    src: 'https://www.figma.com/api/mcp/asset/70cc9ea2-9bc9-4e6a-a46a-f1b7dd7fee84',
  },
  {
    label: 'YouTube',
    src: 'https://www.figma.com/api/mcp/asset/153c20bf-5a3d-4c50-aea9-8dfc054f8f0b',
  },
  {
    label: 'Facebook',
    src: 'https://www.figma.com/api/mcp/asset/ad580564-6e27-4f54-be7b-fd9f97930905',
  },
  {
    label: 'Twitter',
    src: 'https://www.figma.com/api/mcp/asset/76e63f61-1f4d-46d6-9852-766e107528a7',
  },
];

function Socials() {
  return (
    <div className="hidden bg-[#252b42] text-white lg:block">
      <div className="mx-auto flex h-[58px] max-w-[1438px] items-center justify-between px-8 text-sm font-bold tracking-[0.2px]">
        <div className="flex items-center gap-1">
          <a className="flex items-center gap-[5px] rounded-[5px] p-2.5" href="tel:2255550118">
            <Phone aria-hidden="true" size={16} strokeWidth={2.3} />
            <span>(225) 555-0118</span>
          </a>
          <a
            className="flex items-center gap-[5px] rounded-[5px] p-2.5"
            href="mailto:michelle.rivera@example.com"
          >
            <Mail aria-hidden="true" size={16} strokeWidth={2.3} />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>

        <p className="px-2.5 py-2.5">Follow Us and get a chance to win 80% off</p>

        <div className="flex items-center gap-2.5 p-2.5">
          <span>Follow Us :</span>
          {topSocialIcons.map((icon) => (
            <a aria-label={icon.label} className="p-[5px]" href="/" key={icon.label}>
              <img alt="" className="h-4 w-4" src={icon.src} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Socials;
