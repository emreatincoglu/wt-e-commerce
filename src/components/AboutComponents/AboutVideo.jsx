import React from "react";
import { Play } from "lucide-react";

function AboutVideo() {
  return (
    <section className="bg-white py-20 font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[989px] px-6 md:px-0">
        <div className="relative h-[260px] overflow-hidden rounded-[12px] md:h-[540px]">
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
          />
          <div className="absolute inset-0 bg-black/25" />
          <button
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23a6f0] text-white md:h-[92px] md:w-[92px]"
            type="button"
          >
            <Play aria-hidden="true" className="ml-1 fill-white" size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
