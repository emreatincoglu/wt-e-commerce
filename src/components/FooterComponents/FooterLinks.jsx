import React from 'react';
import FooterColumn from './FooterColumn';
import SubscribeForm from './SubscribeForm';

const footerSections = [
  {
    title: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Features',
    links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
  },
  {
    title: 'Resources',
    links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  },
];

function FooterLinks() {
  return (
    <div className="border-t border-[#e6e6e6] bg-white">
      <div className="mx-auto grid max-w-[1050px] gap-10 px-6 py-14 sm:grid-cols-2 sm:px-10 md:grid-cols-3 lg:grid-cols-[148px_152px_148px_152px_321px] lg:gap-[30px] lg:px-0 lg:py-[50px]">
        {footerSections.map((section) => (
          <FooterColumn key={section.title} {...section} />
        ))}
        <SubscribeForm />
      </div>
    </div>
  );
}

export default FooterLinks;
