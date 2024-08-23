import Image from "next/image";
import React from "react";
import LightIcon from "../../assets/light-icon.svg";
import OurWork1 from "../../assets/work-1.svg";
import OurWork2 from "../../assets/work-2.svg";
import OurWork3 from "../../assets/work-3.png";
import Carousel from "./animated-component";

export const OurWorkSection = () => {
  const data = [OurWork1, OurWork2, OurWork3];
  const dataTitles = [
    "TotalQSR - Architecture & Development",
    "Routera - Architecture & Development",
    "Beantown - Website Development",
  ];

  return (
    <div className="w-full lg:h-screen xl:h-[800px] h-[800px] relative flex flex-col items-center  text-black ">
      <div className="w-full bg-gradient-to-b from-[#F0F8FE] to-[#FFFFFF] flex justify-center flex-col items-center gap-5 pb-10  ">
        <div className=" mt-8 bg-gradient-to-l from-[#EDF1F2] to-[#545454] rounded-full w-20 h-20 items-center flex p-2  ">
          <Image src={LightIcon} alt={"Idea-icon"} width={75} height={75} />
        </div>
        <div className="text-2xl text-violet-700 ">
          What makes us different?
        </div>
        <div className="lg:w-[50%] px-5 max-w-[1000px] text-center text-grey-500 ">
          Our deep expertise in software design & architecture combined with
          ability to understand business needs and market makes us your
          preferred tech partner
        </div>
      </div>
      <div className="flex w-full h-full flex justify-center bg-gradient-to-t from-[#F0F8FE] to-[#FFFFFF]">
        <Carousel Data={data} DataDescription={dataTitles} />
        <div className="bg-white-wave w-full absolute bottom-0 bg-cover bg-no-repeat h-10 md:h-20"></div>
      </div>
    </div>
  );
};
