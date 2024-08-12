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
    <section className="container mx-8">
      <div className="w-[1200px] h-[930px] ">
        <div className="flex flex-col items-center">
          <span className="text-lg md:text-3xl font-bold">Our Team</span>
          <div className="w-[400px] h-[72px] ">
            <span className="text-center  flex flex-wrap text-sm  text-gray-500">
              Just sit back and relax while we take care of your business needs
              for you
            </span>
          </div>
        </div>
        <div className="w-[1069px] h-[483px] overflow-scroll z-10  gap-[10px] flex items-center">
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
