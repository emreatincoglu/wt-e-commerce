import React from 'react';

function SubscribeForm() {
  return (
    <div>
      <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">Get In Touch</h3>
      <form className="mt-5 w-full max-w-[321px]">
        <div className="flex h-[58px] overflow-hidden rounded-[5px] border border-[#e6e6e6] bg-[#f9f9f9]">
          <label className="sr-only" htmlFor="footer-email">
            Your Email
          </label>
          <input
            className="min-w-0 flex-1 bg-transparent px-5 text-sm leading-7 tracking-[0.2px] text-[#737373] outline-none"
            id="footer-email"
            placeholder="Your Email"
            type="email"
          />
          <button
            className="w-[117px] shrink-0 border-l border-[#e6e6e6] bg-[#23a6f0] text-sm leading-7 tracking-[0.2px] text-white"
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <p className="mt-px pl-0.5 text-xs leading-7 tracking-[0.2px] text-[#737373]">
          Lore imp sum dolor Amit
        </p>
      </form>
    </div>
  );
}

export default SubscribeForm;
