import React from "react";
import "../../globals.css";
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
    // {
    //   rating: 2,
    //   comment: "Need to be Better",
    //   profilePicture:
    //     "https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg",
    //   profileName: "Peter",
    //   designation: "Founder",
    //   Company: "Uber",
    // },
  ];

  return (
    <div className="linear-grey-gradient w-full h-fit text-white">
      <div className="text-center mt-14 mx-4">
        <div className="font-light text-3xl xl:text-5xl">Our Results</div>
        <div className="text-grey-200 font-thin pt-4 md:text-lg">
          Hear what our cilents have to say about our team and services.
        </div>
      </div>
      <Testimonal mockData={mockData} />
    </div>
  );
};

export default ReviewsSection;
