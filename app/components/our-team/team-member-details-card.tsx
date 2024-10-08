"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import teamMember1 from "../../assets/team-members/team-member-1.jpg";
import teamMember2 from "../../assets/team-members/teamMember2.png";
import instaIcon from "../../assets/team-members/instagram-Icon.png";
type TeamMemberCardProps = {
  name: string;
  role: string;
  Imagepath?: string;
};
const TeamMemberDetailsCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  Imagepath,
}) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <div>
      <motion.div
        className="bg-white shadow-card w-[275px] h-[372px] rounded-lg flex flex-col justify-center items-center gap-[10px]"
        transition={spring}
        whileTap={{ scale: 2.05 }}
      >
        <div className="rounded-full w-[165px] h-[165px] ">
          <Image src={teamMember1} alt={"team member-1"}></Image>
        </div>
        <div className="p-6 flex flex-col items-center gap-2">
          <span className=" font-semibold">{name}</span>
          <span className="text-grey-500">{role}</span>
          <Image
            src={instaIcon}
            width={25}
            height={25}
            alt="Instagram Icon"
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMemberDetailsCard;
