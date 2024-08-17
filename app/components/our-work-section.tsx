import Image from "next/image";
import React from "react";
import LightIcon from "../assets/light-icon.svg";
import OurWork1 from "../assets/work-1.svg";
import OurWork2 from "../assets/work-2.svg";
import OurWork3 from "../assets/work-3.svg";
import Carousel from "./sample";

export const OurWorkSection = () => {
  const data = [OurWork1, OurWork2, OurWork3];
  const CarouselData = [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80",
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  ];

  return (
    <div className="w-full h-screen relative flex flex-col items-center ">
      <div className="w-full bg-gradient-to-b from-[#F0F8FE] to-[#FFFFFF] flex justify-center flex-col items-center gap-5 py-10 2xl:pt-32 ">
        <div className="bg-gradient-to-l from-[#EDF1F2] to-[#545454] rounded-full w-20 h-20 items-center flex p-2  ">
          <Image src={LightIcon} alt={"Idea-icon"} width={75} height={75} />
        </div>
        <div className="text-2xl text-violet-700 2xl:text-4xl">
          What makes us different?
        </div>
        <div className="lg:w-[50%] px-5 max-w-[1000px] text-center text-grey-500 2xl:text-2xl">
          Our deep expertise in software design & architecture combined with
          ability to understand business needs and market makes us your
          preferred tech partner
        </div>
      </div>
      <div className="flex w-full h-full flex justify-center relative bg-gradient-to-t from-[#F0F8FE] to-[#FFFFFF]">
        <div className="relative w-full max-w-[1200px] w-[60%] h-[55%] max-h-[500px] overflow-hidden h-full text-center bg-gradient-to-r from-[#E5EAFF] via-[#ebe7fd] to-[#FBD8F5] rounded-[25px]">
          <div className="p-5">
            <div className="font-bold md:text-3xl text-2xl">Our Work</div>
            <div className="text-grey-500 md:text-lg ">
              Check out some of our work
            </div>
          </div>
          <Carousel Data={data} />
        </div>
        {/* <div className="w-full px-10 flex justify-center top-28 lg:top-40 absolute h-[50%] ">
          <div className="bg-black  h-full md:w-[450px] w-full rounded-2xl drop-shadow-t-md shadow-xl ">
            <Image
              src={OurWork2}
              alt={""}
              className="w-full h-full p-10 pb-0 container object-cover"
            />
            <div className="bg-[red] md:w-[450px] w-full h-14 flex justify-center items-center absolute bottom-0 rounded-b-2xl duration-100 invisible conatiner-hover:visible">
              Developed by Ajith kumar
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-white-wave w-full absolute bottom-0 bg-cover bg-no-repeat h-10 md:h-20"></div>
    </div>
  );
};
