import React from "react";

function TeamMemberCard({ member }) {
  return (
    <article className="flex min-w-0 items-center gap-4 sm:gap-[22px]">
      <img
        alt={member.name}
        className="h-[56px] w-[56px] shrink-0 rounded-full object-cover"
        src={member.avatar}
      />
      <div className="min-w-0">
        <h3 className="break-words text-sm font-bold leading-5 tracking-[0.1px] text-[#252b42] sm:text-base sm:leading-6">
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
