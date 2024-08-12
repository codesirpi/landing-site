import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import test from "../../assets/contact-section/logo.png";

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
    <div className="flex justify-center">
      <div className="flex gap-x-8  w-full h-fit my-20 max-w-[1145px]">
        {mockData.map((data: MockData, index: number) => (
          <div
            className="flex flex-col gap-y-10 max-w-[361px] w-full h-fit bg-background-black px-7 py-10"
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
            <div className="text-xl">{data.comment}</div>
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
      </div>
    </div>
  );
};

export default Testimonal;
