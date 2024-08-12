import React from "react";
import "../../globals.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Testimonal from "./testimonal";

const ReviewsSection = () => {
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
      rating: 3,
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
  ];

  return (
    <div className="linear-grey-gradient w-full h-fit">
      <div className="text-center mt-14 mx-4">
        <div className="text-5xl font-light">Our Results</div>
        <div className="text-lg text-grey-200 font-thin pt-4">
          Hear what our cilents have to say about our team and services.
        </div>
      </div>
      <Testimonal mockData={mockData} />
    </div>
  );
};

export default ReviewsSection;
