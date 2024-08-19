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
    <div className="w-full h-screen relative linear-gradient-hero-section flex flex-col items-center  -z-50 ">
      <div className="z-20 w-full ml-11 my-7 md:ml-[5%] md:my-[2.5%] ">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={34}
            height={22}
            className="inline-block align-middle mr-2.5 w-[34px] h-[22px] md:w-11 md:h-[29px] md:mr-3"
          />
          <div className="linear-gradient-company inline-block align-middle font-semibold text-2xl md:text-[32px]">
            CodeSirpi
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 z-20 h-full bg-cover bg-center bg-no-repeat">
        <AnimatedSparkleSvg />
      </div>

      <div className="absolute h-screen lg:w-[1187px] z-40  flex flex-col items-center  justify-center gap-2 xs:gap-7">
        <span className=" font-bold text-[22px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center text-gradient">
          We scultpure ideas to code for&nbsp;
          <span className="text-white block">
            digital platform & experience
          </span>
        </span>
        <div>
          <motion.span className="text-violet-700 text-center text-base xs:text-lg sm:text-xl md:text-2xl px-8">
            <span>Your partner for&nbsp;</span>
            <AnimatedRedo />
            <CursorBlinker />
          </motion.span>
        </div>
        <motion.button
          className=" mt-2 py-2 px-5 rounded-full border-4 border-violet-700 bg-button-background hover:cursor-pointer flex items-center relative xs:mt-0 xs:px-9"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          viewport={{ once: true }}
        >
          <div className="absolute w-full left-0">
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
      <div className="absolute z-20 left-0 opacity-55   top-[10%] w-full h-full bg-hero-right-vector bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute z-10 left-0 opacity-10  -top-[25%] w-full h-full  bg-hero-top-vector bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default HeroSection;
