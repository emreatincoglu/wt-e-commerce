import React from "react";

function TeamMemberCard({ member }) {
  return (
    <article className="flex items-center gap-[22px]">
      <img
        alt={member.name}
        className="h-[56px] w-[56px] shrink-0 rounded-full object-cover"
        src={member.avatar}
      />
      <div>
        <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {member.name}
        </h3>
        <p className="mt-[3px] text-xs font-bold leading-4 tracking-[0.2px] text-[#737373]">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export default TeamMemberCard;
