import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import WebDesign from "../../assets/service-provider-sections/web-design.svg";
import { motion, useInView } from 'framer-motion';


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
        y: isCardIsEven ? 20: -20,
    }}
    whileInView={{
        opacity: 1,
        x: 0,
        y:0,
        transition: {
            duration: 2
        }
    }}
    viewport={{ once: true }}

    className={clsx("flex flex-col justify-between gap-10 my-9", {
        "lg:flex-row-reverse": isCardIsEven,
        "lg:flex-row": !isCardIsEven,
      })}
    >
      {/* image section*/}
      <div className="flex overflow-hidden">
        <Image src={image} alt={title} className="flex fit" />
      </div>
      {/*description and title section*/}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start text-grey-500">
        <h5 className="text-xl lg:text-4xl font-bold text-black py-4">
          {title}
        </h5>
        <div className="flex  w-full text-center lg:text-start md:w-[60%] lg:w-[60%] font-medium text-xl">
          Enhance your digital presence quickly with high quality website
        </div>
      </div>
    </motion.div>
  );
};
