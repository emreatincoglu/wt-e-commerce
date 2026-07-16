import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const cards = [
  {
    icon: <Phone aria-hidden="true" size={72} strokeWidth={1.5} />,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    active: false,
  },
  {
    icon: <MapPin aria-hidden="true" size={72} strokeWidth={1.5} />,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    active: true,
  },
  {
    icon: <Mail aria-hidden="true" size={72} strokeWidth={1.5} />,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    active: false,
  },
];

function ContactCards() {
  return (
    <section className="bg-white py-20 font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 text-center md:px-0">
        <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#252b42]">
          VISIT OUR OFFICE
        </p>
        <h2 className="mx-auto mt-2.5 max-w-[531px] text-[32px] font-bold leading-10 tracking-[0.2px] text-[#252b42] sm:text-[40px] sm:leading-[50px]">
          We help small businesses with big ideas
        </h2>

        <div className="mt-14 grid items-center md:mt-20 md:grid-cols-3">
          {cards.map((card, index) => (
            <article
              className={`flex min-h-[343px] flex-col items-center justify-center px-10 py-[50px] ${
                card.active ? 'bg-[#252b42] text-white md:min-h-[403px]' : 'bg-white text-[#252b42]'
              }`}
              key={index}
            >
              <div className="text-[#23a6f0]">{card.icon}</div>
              <div className="mt-[15px] text-sm font-bold leading-6 tracking-[0.2px]">
                {card.emails.map((email) => (
                  <p key={email}>{email}</p>
                ))}
              </div>
              <h3 className="mt-[15px] text-base font-bold leading-6 tracking-[0.1px]">
                Get Support
              </h3>
              <a
                className="mt-[15px] rounded-[37px] border border-[#23a6f0] px-5 py-[15px] text-sm font-bold leading-6 tracking-[0.2px] text-[#23a6f0]"
                href="/contact"
              >
                Submit Request
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactCards;
