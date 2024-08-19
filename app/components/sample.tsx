import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Carousel = ({ Data }: { Data: string[] }) => {
  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(Data.length - 1);
  const [RightId, setRightId] = useState(1);

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0);
    } else {
      setLeftId(LeftId + 1);
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0);
    } else {
      setCenterId(CenterId + 1);
    }

    if (RightId === Data.length - 1) {
      setRightId(0);
    } else {
      setRightId(RightId + 1);
    }
    setFlowDirection(true);
  };
  const prevBtn = () => {
    setFlowDirection(false);
    if (LeftId === 0) {
      setLeftId(Data.length - 1);
    } else {
      setLeftId(LeftId - 1);
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1);
    } else {
      setCenterId(CenterId - 1);
    }
    if (RightId === 0) {
      setRightId(Data.length - 1);
    } else {
      setRightId(RightId - 1);
    }
  };

  // useEffect(() => {
  //   const timerId = setInterval(() => nextBtn(), 2000);
  //   return () => clearInterval(timerId);
  // });
  const variants = {
    center: {
      x: "0rem",
      opacity: 1,
      scale: 1,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: Data[CenterId],
      boxShadow: "-2px -4px 10px 0 #FFFFFF",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-18rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: Data[LeftId],
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: Data[RightId],
      x: "18rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "8rem",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-10rem",
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <motion.div className="carousel-wrapper w-full justify-center px-5 md:px-10">
      <div className="w-full">
        <div className="lg:w-[800px] w-full flex flex-col overflow-x-clip items-center h-[360px] text-center bg-gradient-to-r from-[#E5EAFF] via-[#ebe7fd] to-[#FBD8F5] rounded-[25px]">
          <div className="p-5">
            <div className="font-bold md:text-3xl text-2xl">Our Work</div>
            <div className="text-grey-500 md:text-lg ">
              Check out some of our work
            </div>
          </div>
          <motion.div className="carousel-content">
            <AnimatePresence initial={false}>
              <motion.div
                key={LeftId}
                variants={variants}
                initial={FlowDirection ? "center" : "leftHidden"}
                animate="left"
                exit={"leftHidden"}
                className="carousel-item"
              >
                <Image
                  src={variants.left.backgroundImage}
                  alt={""}
                  className="w-full h-full"
                />
              </motion.div>
              <motion.div
                variants={variants}
                key={CenterId}
                initial={FlowDirection ? "right" : "left"}
                animate="center"
                className="carousel-item top-10 "
              >
                <Image
                  src={variants.center.backgroundImage}
                  alt={""}
                  className="w-full h-full"
                />
                <div className="bg-black text-white shadow-card absolute w-full left-0 h-10 flex items-center justify-center rounded-b-[5px]">
                  ajith
                </div>
              </motion.div>
              <motion.div
                key={RightId}
                variants={variants}
                initial={FlowDirection ? "rightHidden" : "center"}
                animate="right"
                exit={"rightHidden"}
                className="carousel-item"
              >
                <Image
                  src={variants.right.backgroundImage}
                  alt={""}
                  className="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
