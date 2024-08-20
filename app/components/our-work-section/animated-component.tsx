import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Carousel = ({
  Data,
  DataDescription,
}: {
  Data: string[];
  DataDescription: string[];
}) => {
  const [flowDirection, setFlowDirection] = useState(true);
  const [centerId, setCenterId] = useState(0);
  const [leftId, setLeftId] = useState(Data.length - 1);
  const [rightId, setRightId] = useState(1);
  const [dataTitle, setDataTitle] = useState(0);

  const nextBtn = () => {
    if (leftId === Data.length - 1) {
      setLeftId(0);
    } else {
      setLeftId(leftId + 1);
    }
    if (centerId === Data.length - 1) {
      setDataTitle(0);
      setCenterId(0);
    } else {
      setDataTitle(centerId + 1);
      setCenterId(centerId + 1);
    }

    if (rightId === Data.length - 1) {
      setRightId(0);
    } else {
      setRightId(rightId + 1);
    }
    setFlowDirection(true);
  };
  const prevBtn = () => {
    setFlowDirection(false);
    if (leftId === 0) {
      setLeftId(Data.length - 1);
    } else {
      setLeftId(leftId - 1);
    }
    if (centerId === 0) {
      setDataTitle(Data.length - 1);
      setCenterId(Data.length - 1);
    } else {
      setDataTitle(centerId - 1);
      setCenterId(centerId - 1);
    }
    if (rightId === 0) {
      setRightId(Data.length - 1);
    } else {
      setRightId(rightId - 1);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => nextBtn(), 2000);
    return () => clearInterval(timerId);
  });
  const variants = {
    center: {
      x: "0rem",
      opacity: 1,
      scale: 1,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: Data[centerId],
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
      backgroundImage: Data[leftId],
      boxShadow: "0px 0px 0px 0px #FFFFFF",
      zIndex: "4",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: Data[rightId],
      x: "18rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: "0px 0px 0px 0px #FFFFFF",
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
    <motion.div className="flex justify-center w-full px-5 md:px-10">
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
              key={leftId}
              variants={variants}
              initial={flowDirection ? "center" : "leftHidden"}
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
              key={centerId}
              initial={flowDirection ? "right" : "left"}
              animate="center"
              className="carousel-item top-10 "
            >
              <Image
                src={variants.center.backgroundImage}
                alt={""}
                className="w-full h-full"
              />
              <div className="bg-black text-white shadow-card absolute w-full left-0 h-12 text-sm flex items-center justify-center rounded-b-[5px]">
                {DataDescription[dataTitle]}
              </div>
            </motion.div>
            <motion.div
              key={rightId}
              variants={variants}
              initial={flowDirection ? "rightHidden" : "center"}
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
    </motion.div>
  );
};

export default Carousel;
