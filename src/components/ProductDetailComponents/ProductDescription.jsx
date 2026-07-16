import React from "react";

const descriptionPoints = [
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
  "the quick fox jumps over the lazy dog",
];

function ProductDescription() {
  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-5 sm:px-6 lg:px-0">
        <div className="flex min-h-[72px] items-center justify-center border-b border-[#ececec]">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 py-4 text-center text-sm font-bold leading-6 tracking-[0.2px] text-[#737373] sm:gap-8">
            <a className="text-[#737373]" href="/">
              Description
            </a>
            <a href="/">Additional Information</a>
            <a href="/">
              Reviews <span className="text-[#23856d]">(0)</span>
            </a>
          </nav>
        </div>

        <div className="grid gap-[30px] py-10 md:grid-cols-3 md:py-12">
          <div className="overflow-hidden rounded-[6px] shadow-[0_13px_19px_rgba(0,0,0,0.07)]">
            <img
              alt=""
              className="h-[372px] w-full object-cover"
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
              the quick fox jumps over
            </h2>
            <div className="mt-[30px] flex flex-col gap-[30px] text-sm leading-5 tracking-[0.2px] text-[#737373]">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
              the quick fox jumps over
            </h2>
            <div className="mt-[30px] flex flex-col gap-2.5">
              {descriptionPoints.map((point, index) => (
                <p
                  className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
                  key={`${point}-${index}`}
                >
                  &gt; {point}
                </p>
              ))}
            </div>
            <h2 className="mt-[30px] text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
              the quick fox jumps over
            </h2>
            <div className="mt-[30px] flex flex-col gap-2.5">
              {descriptionPoints.slice(0, 3).map((point, index) => (
                <p
                  className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
                  key={`${point}-second-${index}`}
                >
                  &gt; {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
