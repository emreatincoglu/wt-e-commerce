import React from 'react';

function TwitterIcon() {
  return (
    <svg aria-hidden="true" className="h-[30px] w-[30px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.6 6.1c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.7 1A4.13 4.13 0 0 0 15.2 4a4.2 4.2 0 0 0-4.1 5.1A11.86 11.86 0 0 1 2.5 4.8a4.15 4.15 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.7 2.1 2.9 3.9 2.9A8.31 8.31 0 0 1 2 18.6c-.3 0-.7 0-1-.1A11.74 11.74 0 0 0 7.4 20c7.7 0 12-6.4 12-12v-.5c.8-.4 1.6-1.2 2.2-2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-[30px] w-[30px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 8.2V6.6c0-.8.5-1 1-1h2.1V2.2L14.2 2c-3.2 0-4.9 1.9-4.9 5.2v1H6v3.8h3.3V22h4.1v-10H17l.6-3.8H14Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.1" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-[30px] w-[30px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.9 8.7H3.4V20h3.5V8.7ZM5.1 7.2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.6 20v-6.2c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.8 1-3.3 1.8V8.7H9.8V20h3.5v-5.6c0-1.5.3-2.9 2.1-2.9 1.7 0 1.7 1.6 1.7 3V20h3.5Z" />
    </svg>
  );
}

const socials = [
  { label: 'Twitter', icon: <TwitterIcon /> },
  { label: 'Facebook', icon: <FacebookIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
  { label: 'LinkedIn', icon: <LinkedinIcon /> },
];

function ContactSocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-[34px] ${className}`}>
      {socials.map((item) => (
        <a aria-label={item.label} href="/" key={item.label}>
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default ContactSocialLinks;
