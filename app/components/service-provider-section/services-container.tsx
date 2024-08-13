import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import WebDesign from "../../assets/service-provider-sections/web-design.svg";

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
    <div
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
    </div>
  );
};
