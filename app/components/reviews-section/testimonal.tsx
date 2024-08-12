import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type MockData = {
  rating: number;
  comment: string;
  profilePicture: string;
  profileName: string;
  designation: string;
  Company: string;
};

const Testimonal = ({mockData}: {mockData:MockData[]}) => {
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
            </div>
            <div className="text-xl">{data.comment}</div>
            <div className="flex items-center gap-x-5">
              <img
                src={
                  "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg"
                }
                className="w-7 h-7 rounded-full"
                alt="profile-photo"
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
