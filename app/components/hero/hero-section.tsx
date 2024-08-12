"use client";
import React from "react";
import Image from "next/image";
import logoImg from "../../assets/hero/logo.png";
import startIcon from "../../assets/hero/get-started-button-star.png";
import leftSideVector from "../../assets/hero/left-mask-vector.png";
import rightSideVector from "../../assets/hero/right-blue-vector.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const MotionImage = motion(Image);
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#0F0F0F] flex flex-col items-center   via-[#292929] via-80% to-[#858585]  ">
      <div className="  container mx-8  h-[100px] flex items-center gap-2 ">
        <div className="flex items-center">
          <Image
            src={logoImg}
            alt={"Company Logo"}
            width={44}
            height={30}
          ></Image>
        </div>

        <span className="text-white text-[32px] font-semibold">code sirpi</span>
      </div>

      <div className=" absolute w-[1500px] h-[600px]  flex flex-col items-center justify-center px-8 gap-[10px]">
        <div className="absolute -top-[30%] right-[12%] transform rotate-160">
          <MotionImage
            src={leftSideVector}
            height={1800}
            width={1200}
            alt={"left side vector"}
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          ></MotionImage>
        </div>
        {/* <div className="absolute top-[30%] -right-[12%] transform rotate-160">
          <Image
            src={rightSideVector}
            height={1800}
            width={1200}
            alt={"right side vector"}
          ></Image>
        </div> */}

        <h1 className=" font-bold text-7xl text-center text-white">
          We scultpure ideas to code for digital platform & experience
        </h1>
        <div className="w-[470px] h-[50px]">
          <p className="text-grey-400 text-center flex px-8">
            Your partner for website development, MVP builder and data
            visualizations
          </p>
        </div>
        <div className="flex items-center justify-center w-[182px] h-[46px] rounded-full drop-shadow-md border-violet-400 text-white bg-violet-700 border-4">
          <button>
            <div className="flex gap-2">
              <Image
                src={startIcon}
                width={16}
                height={16}
                alt={"star image"}
              ></Image>
              Get Started
            </div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
