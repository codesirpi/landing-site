import React from "react";
import Image from "next/image";

import { ServiceContainer } from "./services-container";
import WebDesignSVG from "../../assets/service-provider-sections/web-design.svg";
import MVPBuilderSVG from "../../assets/service-provider-sections/mvp-builder.svg";
import DataVisualizationSVG from "../../assets/service-provider-sections/data-visualization.svg";
import WaveImage from "../../assets/wave.svg";
import { motion } from 'framer-motion';


const services = [
  {
    title: "Web Design",
    imge: WebDesignSVG,
    description: "Enhance your digital presence quickly with high quality website",
  },
  {
    title: "MVP Builder",
    imge: MVPBuilderSVG,
    description: "Go to market with appealing minimum viable product",
  },
  {
    title: "Data Visualization",
    imge: DataVisualizationSVG,
    description: "Turn data into engaging visuals to track trends & gain insights",
  },
];

export const ServiceProviderSection = () => {
  return (
    <div className="flex flex-col w-full pt-20 bg-white">
      <motion.div 
      initial={{
        y: 5,
        opacity: 0,
    }}
    whileInView={{
        y:0,
        opacity: 1,
    }}
    transition={{
        duration: 0.7,
    }}
    viewport={{
        once: true
    }}
      className="flex flex-col bg-white w-full items-center justify-center px-2">
        <div className="my-6 text-violet-700 font-medium text-xl ">
          What we do?
        </div>
        <div className="flex justify-center items-center flex-col lg:font-extrabold text-center font-bold lg:text-3xl text-wrap sm:text-xl text-grey-700 ">
          Expertly crafting and designing solutions that <br />
          meet your needs
        </div>

        {/* show Projects provider component */}
        <div className="grid grid-cols-1 items-center my-8  gap-10">
          {services.map(({ title, imge, description }, index: number) => (
            <ServiceContainer
              key={title}
              title={title}
              image={imge}
              description={description}
              isCardIsEven={(index + 1) % 2 === 0}
            />
          ))}
        </div>
    </motion.div>

    <div className="flex w-full bg-blue-wave h-20 bg-cover bg-white">
        {/* <Image src={WaveImage} alt="wave" /> */}
      </div>
    </div>
  );
};
