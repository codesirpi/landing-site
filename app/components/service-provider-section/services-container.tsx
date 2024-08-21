import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import WebDesign from "../../assets/service-provider-sections/web-design.svg";
import { motion, useInView } from "framer-motion";
import "../../globals.css";

type ServiceContainerProps = {
  title: string;
  image: StaticImageData;
  description: string;
  isCardIsEven: boolean;
};

export const ServiceContainer = ({
  image,
  title,
  description,
  isCardIsEven,
}: ServiceContainerProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isCardIsEven ? 100 : -100,
        y: isCardIsEven ? 20 : -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className={clsx(
        "flex flex-col lg:shadow-none shadow-lg p-8 lg:p-0 rounded-lg lg:rounded-none ",
        {
          "lg:flex-row-reverse gap-10 lg:gap-0": isCardIsEven,
          "lg:flex-row gap-10": !isCardIsEven,
        }
      )}
    >
      {/* image section*/}
      <div className="flex overflow-hidden lg:w-[50%] md:justify-center">
        <Image src={image} alt={title} className=" object-cover image-clip" />
      </div>
      {/*description and title section*/}
      <div
        className={clsx(
          "flex flex-col lg:w-[50%] justify-center items-center lg:items-start text-center lg:text-start text-grey-500 ",
          { "lg:ml-10": isCardIsEven, "lg:ml-0": !isCardIsEven }
        )}
      >
        <h5 className="text-xl lg:text-4xl font-bold text-black py-4">
          {title}
        </h5>
        <div className="flex  w-full text-center lg:text-start md:w-[60%] lg:w-[70%] font-medium text-xl">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
