import React from "react";

const companies = ["hooli", "lyft", "stripe", "aws", "reddit"];

function AboutCompanies() {
  return (
    <section className="bg-[#fafafa] py-20 font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 text-center md:px-0">
        <h2 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42]">
          Big Companies Are Here
        </h2>
        <p className="mx-auto mt-[30px] max-w-[547px] text-sm leading-5 tracking-[0.2px] text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </p>
        <div className="mt-[60px] grid grid-cols-2 items-center justify-items-center gap-10 text-[#737373] md:grid-cols-5">
          {companies.map((company) => (
            <div
              className="text-[34px] font-bold leading-none tracking-[-1px] opacity-80 grayscale"
              key={company}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCompanies;
