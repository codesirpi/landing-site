"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import { motion } from "framer-motion";
import AnimatedSparkleSvg from "./animated-sparkle";
import AnimatedGetStartedButton from "./animated-button";
import AnimatedRedo from "./animated-text";
import CursorBlinker from "./cursor-blinker";
const HeroSection = () => {
  return (
    <div className="w-full h-[1191px] relative  linear-gradient-hero-section flex flex-col items-center  -z-50 ">
      <div className="w-full  absolute bg-transparent top-0 z-20  h-[100px] flex items-center gap-2 pl-12 ">
        <div className="flex items-center">
          <Image src={logo} alt={"Company Logo"} width={44} height={30}></Image>
        </div>

        <span className="text-white  text-[32px] font-semibold linear-gradient-company">
          CodeSirpi
        </span>
      </div>

      <div className="absolute w-full top-4 left-4 z-20 h-full bg-cover bg-center bg-no-repeat">
        <AnimatedSparkleSvg />
      </div>

      <div className=" mt-20 absolute h-[620px] lg:w-[1187px] z-20  flex flex-col items-center  justify-center  gap-[10px]">
        <span className=" font-bold text-xl md:text-7xl  text-center text-gradient  ">
          We scultpure ideas to code for&nbsp;
          <span className="text-white">digital platform & experience</span>
        </span>
        <div className=" h-[50px]">
          <motion.span className="text-violet-700 text-center text-lg xs:text-xl sm:text-2xl px-8">
            <span>Your partner for&nbsp;</span>
            <AnimatedRedo />
            <CursorBlinker />
          </motion.span>
        </div>
        {/* <div className="relative flex items-center justify-center  h-[24px] get-started-button-gradient    md:h-[46px] rounded-full drop-shadow-md  border-[#5E0BEF] text-white  bg-white  border-4">
          <AnimatedGetStartedButton />
          <button className="absolute w-full h-full">
            <div className="flex gap-2  items-center justify-center">
              <Image
                src={startIcon}
                width={18}
                height={18}
                alt={"star image"}
              ></Image>
              <span>Get Started</span>
            </div>{" "}
          </button>
        </div> */}
        <motion.button className="py-2 px-9 rounded-full border-4 border-violet-700 bg-button-background mt-8 mb-5 hover:cursor-pointer flex items-center relative">
          <div className="absolute w-10 left-0">
            <AnimatedGetStartedButton />
          </div>
          <Image
            src={star}
            width={16}
            height={16}
            alt="star"
            className="inline-bock align-midle mr-1"
          />
          Get Started
        </motion.button>
      </div>
      <motion.div
        className="absolute top-24 z-30  -left-4 bg-hero-vector h-full w-full bg-cover bg-center bg-no-repeat "
        initial={{ rotate: 0 }}
        animate={{ rotate: 90 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
      <div className="absolute z-20 left-0 opacity-60   top-0 w-full h-full bg-hero-right-vector bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute z-10 left-0 opacity-80  -top-[23rem] w-full h-full  bg-hero-top-vector bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default HeroSection;
