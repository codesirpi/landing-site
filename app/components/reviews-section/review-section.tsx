import React from "react";
import "../../globals.css";
import { motion } from "framer-motion";
import Testimonal from "./testimonal";

const ReviewsSection = () => {
  const resultContent =
    "Hear what our cilents have to say about our team and services.".split(" ");

  const mockData = [
    {
      rating: 5,
      comment: "They helped build MVP for our company",
      profilePicture:
        "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
      profileName: "Eddie",
      designation: "Founder",
      Company: "UrbanCore",
    },
    {
      rating: 4,
      comment: "The landing page design exceeded our expectations",
      profilePicture:
        "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
      profileName: "John",
      designation: "Founder",
      Company: "UrbanCore",
    },
    {
      rating: 4,
      comment: "They built the labor feature for our product",
      profilePicture:
        "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
      profileName: "Max",
      designation: "Head of Design",
      Company: "Fabrics",
    },
    {
      rating: 2,
      comment: "Need to be Better",
      profilePicture:
        "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
      profileName: "Peter",
      designation: "Founder",
      Company: "Uber",
    },
  ];

  return (
    <div className="linear-grey-gradient w-full h-fit text-white">
      <div className="text-center mt-14 mx-4">
        <motion.div
          className="font-light text-3xl xl:text-5xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
        >
          Our Results
        </motion.div>
        <motion.div
          className="text-grey-200 font-thin pt-4 md:text-lg"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
        >
          {resultContent.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block break-words"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              viewport={{ once: true }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Testimonal mockData={mockData} />
    </div>
  );
};

export default ReviewsSection;
