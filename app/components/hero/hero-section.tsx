"use client";
import React from "react";
import Image from "next/image";
import logoImg from "../../assets/hero/logo.png";
import startIcon from "../../assets/hero/get-started-button-star.png";
import { motion } from "framer-motion";
import AnimatedSparkleSvg from "./animated-sparkle";
import AnimatedGetStartedButton from "./animated-button";
const HeroSection = () => {
  return (
    <div className="w-full h-[1191px] relative  bg-custom-gradient flex flex-col items-center   ">
      <div className="w-full  absolute bg-transparent top-0 z-20  h-[100px] flex items-center gap-2 ">
        <div className="flex items-center">
          <Image
            src={logoImg}
            alt={"Company Logo"}
            width={44}
            height={30}
          ></Image>
        </div>

        <span className="text-white text-[32px] font-semibold">Code Sirpi</span>
      </div>

      <div className="absolute w-full z-20 h-full bg-cover bg-center bg-no-repeat">
        <AnimatedSparkleSvg />
      </div>

      <div className=" absolute h-[600px] z-20  flex flex-col items-center  justify-center px-8 gap-[10px]">
        <h1 className=" font-bold text-xl  md:text-7xl  text-center mt-20 text-white">
          We scultpure ideas to code for digital platform & experience
        </h1>
        <div className=" h-[50px]">
          <p className="text-grey-400 text-center flex px-8">
            Your partner for website development, MVP builder and data
            visualizations
          </p>
        </div>
        <div className="relative flex items-center justify-center w-[120px] h-[24px]   md:w-[182px] md:h-[46px] rounded-full drop-shadow-md border-violet-400 text-white  bg-cover bg-center bg-no-repeat  border-4">
          <AnimatedGetStartedButton />
          <button className="absolute">
            <div className="flex gap-2 ">
              <Image
                src={startIcon}
                width={16}
                height={16}
                alt={"star image"}
              ></Image>
              <span>Get Started</span>
            </div>{" "}
          </button>
        </div>
      </div>
      <motion.div
        className="absolute top-24 z-30  -left-4 bg-hero-vector h-full w-full bg-cover bg-center bg-no-repeat "
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
      <div className="absolute z-20 left-0 top-0 w-full h-full bg-hero-right-vector bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute z-10 left-0  -top-[40rem] w-full h-full  bg-hero-top-vector bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default HeroSection;
