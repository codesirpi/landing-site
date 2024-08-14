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

    className={clsx("flex flex-col", {
        "lg:flex-row-reverse": isCardIsEven,
        "lg:flex-row": !isCardIsEven,
      })}
    >
      {/* image section*/}
      <div className="flex overflow-hidden w-[50%]">
        <Image src={image} alt={title} className="flex object-none" />
      </div>
      {/*description and title section*/}
      <div className={"flex flex-col w-[50%] justify-center items-center lg:items-start text-center lg:text-start text-grey-500 "}>
        <h5 className="text-xl lg:text-4xl font-bold text-black py-4">
          {title}
        </h5>
        <div className="flex  w-full text-center lg:text-start md:w-[60%] lg:w-[60%] font-medium text-xl">
         {description}
        </div>
      </div>
    </motion.div>
  );
};


// export const ServiceContainer = ({
//     image,
//     title,
//     description,
//     isCardIsEven,
//   }: ServiceContainerProps) => {
//     return (
//       <div className={clsx("flex flex-row justify-between items-center", {
//         "flex-row-reverse": isCardIsEven  
//       })}>
//         {/* image section*/}
//         <div className="flex object-cover">
//           <Image src={image} alt={title} className="flex fit" />
//         </div>

//         {/* title and description section */}
//         <div className="flex flex-col ml-10">
//         <h5 className="text-xl lg:text-4xl font-bold text-black py-4">
//           {title}
//          </h5>
//         <div className="flex  w-full text-center lg:text-start md:w-[60%] lg:w-[60%] font-medium text-xl">
//           {description}
//         </div>
//       </div>
//       </div>
//     )
//   }
  