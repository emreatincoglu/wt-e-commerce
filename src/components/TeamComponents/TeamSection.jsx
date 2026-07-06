import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "./teamMembers";

function TeamSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-8 font-['Montserrat',ui-sans-serif,system-ui] md:px-0">
      <div className="mx-auto min-h-[846px] max-w-[414px] bg-white px-[50px] py-[66px] md:min-h-[735px] md:max-w-[1440px] md:px-0 md:py-0">
        <div className="mx-auto flex flex-col items-center md:w-[910px] md:pt-[116px]">
          <div className="text-center">
            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252b42] md:text-[40px]">
              Meet Our Team
            </h1>
            <p className="mx-auto mt-2.5 max-w-[280px] text-sm leading-5 tracking-[0.2px] text-[#737373] md:max-w-[469px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="mt-[60px] grid w-full gap-y-[56px] md:mt-[110px] md:grid-cols-3 md:gap-x-[86px] md:gap-y-[61px]">
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
