import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "./teamMembers";

function TeamSection() {
  return (
    <section className="bg-[#f3f3f3] px-3 py-6 font-['Montserrat',ui-sans-serif,system-ui] sm:px-4 sm:py-8 lg:px-0">
      <div className="mx-auto min-h-[846px] max-w-[1440px] bg-white px-5 py-14 sm:px-10 md:min-h-[735px] lg:px-0 lg:py-0">
        <div className="mx-auto flex max-w-[910px] flex-col items-center lg:pt-[116px]">
          <div className="text-center">
            <h1 className="text-[32px] font-bold leading-10 tracking-[0.2px] text-[#252b42] sm:text-[40px] sm:leading-[50px]">
              Meet Our Team
            </h1>
            <p className="mx-auto mt-2.5 max-w-[280px] text-sm leading-5 tracking-[0.2px] text-[#737373] md:max-w-[469px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="mt-[60px] grid w-full gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:mt-[110px] lg:grid-cols-3 lg:gap-x-[86px] lg:gap-y-[61px]">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
