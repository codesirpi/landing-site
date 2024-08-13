import Image from "next/image";
import React from "react";
import LightIcon from "../assets/light-icon.svg";
import OurWork1 from "../assets/work-1.svg";
import OurWork2 from "../assets/work-2.svg";
import OurWork3 from "../assets/work-3.svg";

export const OurWorkSection = () => {
  return (
    <div className="w-full min-h-screen md:h-screen lg:h-full flex flex-col items-center ">
      <div className="w-full bg-gradient-to-b from-[#F0F8FE] to-[#FFFFFF] flex justify-center flex-col items-center gap-2 py-10 md:pt-20 lg:pt-10 2xl:pb-0">
        <div className="bg-gradient-to-l from-[#EDF1F2] to-[#545454] rounded-full w-20 h-20 items-center flex p-2 ">
          <Image src={LightIcon} alt={"Idea-icon"} width={75} height={75} />
        </div>
        <div className="text-2xl text-violet-700">What makes us different?</div>
        <div className="lg:w-[50%] md:p-10 px-5 max-w-[1000px] text-center text-grey-500">
          Our deep expertise in software design & architecture combined with
          ability to understand business needs and market makes us your
          preferred tech partner
        </div>
      </div>
      <div className="flex w-full  h-[calc(100vh-300px)] md:h-[calc(100vh-256px)] relative bg-gradient-to-t from-[#F0F8FE] to-[#FFFFFF]">
        <div className=" w-full lg:h-[70%] h-80  2xl:h-[75%] pb-20 px-5 md:px-20 flex justify-center flex-col items-center">
          <div className="relative w-full max-w-[1000px] overflow-hidden h-full text-center bg-gradient-to-r from-[#E5EAFF] via-[#ebe7fd] to-[#FBD8F5] rounded-[25px]">
            <div className="p-5">
              <div className="font-bold md:text-3xl text-2xl">Our Work</div>
              <div className="text-grey-500 md:text-lg ">
                Check out some of our work
              </div>
            </div>
            <div className="bg-black w-[30%] top-35 absolute left-0 p-10  rounded-2xl hidden lg:inline-flex ">
              <Image src={OurWork1} alt={""} className="w-full h-full" />
            </div>
            <div className="bg-black w-[30%] top-35 right-0 bottom-0 h-[65%] absolute rounded-2xl hidden lg:inline-flex ">
              <Image
                src={OurWork3}
                alt={""}
                className="w-full h-full p-8 pb-0"
              />
            </div>
          </div>
        </div>

        <div className="w-full px-10 flex justify-center top-28 lg:top-40 absolute h-[50%] ">
          <div className="bg-black  h-full md:w-[450px] w-full rounded-2xl drop-shadow-t-md shadow-xl ">
            <Image
              src={OurWork2}
              alt={""}
              className="w-full h-full p-10 pb-0 container object-contain"
            />
            <div className="bg-[red] md:w-[450px] w-full h-14 flex justify-center items-center absolute bottom-0 rounded-b-2xl duration-100 invisible conatiner-hover:visible">
              Developed by Ajith kumar
            </div>
          </div>
        </div>
        <div className="bg-white-wave w-full absolute bottom-0 bg-cover bg-no-repeat h-10 md:h-20"></div>
      </div>
    </div>
  );
};
