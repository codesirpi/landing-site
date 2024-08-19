import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import "../../globals.css";

type MockData = {
  rating: number;
  comment: string;
  profilePicture: string;
  profileName: string;
  designation: string;
  Company: string;
};

const Testimonal = ({ mockData }: { mockData: MockData[] }) => {
  return (
    <motion.div
      className="flex gap-x-6 linear-gradient-fade w-full max-w-[1145px] mx-auto overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      viewport={{ once: true }}
    >
      <div>
        <motion.div
          className="flex gap-x-6  w-full h-fit my-20  overflow-x-hidden"
          initial={{ x: 0 }}
          animate={{
            x: "-100%",
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {mockData.map((data: MockData, index: number) => (
            <div
              className="flex flex-col gap-y-10 w-full min-w-[290px]  max-w-[361px]  bg-background-black px-7 py-10 xs:min-w-[361px]"
              key={index}
            >
              <div className="flex">
                {Array.from({ length: data.rating }, (_, i) => (
                  <Icon
                    icon="material-symbols:star"
                    width={14}
                    height={14}
                    key={i}
                    color="#FF520E"
                  />
                ))}
                {Array.from({ length: 5 - data.rating }, (_, i) => (
                  <Icon
                    icon="material-symbols:star"
                    width={14}
                    height={14}
                    key={i}
                    color="#5C5C5C"
                  />
                ))}
              </div>
              <div className="text-lg xl:text-xl">{data.comment}</div>
              <div className="flex items-center gap-x-5">
                <Image
                  src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
                  width={28}
                  height={28}
                  unoptimized
                  alt="profile-photo"
                  className="w-7 h-7 rounded-full"
                />
                <div className="text-sm">
                  <div>{data.profileName}</div>
                  <div>
                    {data.designation} @{data.Company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* For now,data is repeated to create a infinity loop effect */}
      <div>
        <motion.div
          className="flex gap-x-6 w-full h-fit my-20  overflow-x-hidden  ml-4"
          initial={{ x: 0 }}
          animate={{
            x: "-100%",
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {mockData.map((data: MockData, index: number) => (
            <div
              className="flex flex-col gap-y-10 w-full min-w-[290px]  max-w-[361px]  bg-background-black px-7 py-10 xs:min-w-[361px]"
              key={index}
            >
              <div className="flex">
                {Array.from({ length: data.rating }, (_, i) => (
                  <Icon
                    icon="material-symbols:star"
                    width={14}
                    height={14}
                    key={i}
                    color="#FF520E"
                  />
                ))}
                {Array.from({ length: 5 - data.rating }, (_, i) => (
                  <Icon
                    icon="material-symbols:star"
                    width={14}
                    height={14}
                    key={i}
                    color="#5C5C5C"
                  />
                ))}
              </div>
              <div className="text-lg xl:text-xl">{data.comment}</div>
              <div className="flex items-center gap-x-5">
                <Image
                  src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
                  width={28}
                  height={28}
                  unoptimized
                  alt="profile-photo"
                  className="w-7 h-7 rounded-full"
                />
                <div className="text-sm">
                  <div>{data.profileName}</div>
                  <div>
                    {data.designation} @{data.Company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonal;
