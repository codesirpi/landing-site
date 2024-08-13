import React from "react";
import TeamMemberDetailsCard from "./team-member-details-card";

const teamMemberDetails = [
  {
    name: "Ajith",
    role: "SOFTWARE ENGINEER",
  },
  {
    name: "Ebalin",
    role: "FRONTEND DEVELOPER",
  },
  {
    name: "Arun",
    role: "FRONTEND DEVELOPER",
  },
  {
    name: "Swineetha",
    role: "SOFTWARE ENGINEER",
  },
  {
    name: "Ebalin",
    role: "FRONTEND DEVELOPER",
  },
];

const OurTeamSection: React.FC = () => {
  return (
    <section className="bg-white w-full flex justify-center">
      <div className="pb-20">
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg md:text-3xl font-bold">Our Team</div>
          <div className="md:w-[40%] text-center  flex flex-wrap text-sm  text-gray-500">
            Just sit back and relax while we take care of your business needs
            for you
          </div>
        </div>
        <div className="lg:w-[1069px] w-screen px-10 overflow-scroll h-[483px] overflow-scroll z-10  scrollbar-hide gap-[10px] flex items-center">
          {teamMemberDetails.map((data, index) => (
            <TeamMemberDetailsCard
              key={index}
              name={data.name}
              role={data.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
