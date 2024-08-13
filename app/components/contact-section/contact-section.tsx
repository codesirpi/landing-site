"use client";
import React from "react";
import logo from "../../assets/contact-section/logo.png";
import Image from "next/image";
import "../../globals.css";

import { useForm, ValidationError } from "@formspree/react";
import { environment } from "@/app/environments/environment";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactSection = () => {
  const [state, handleSubmit] = useForm(environment.FORMSPREE_PROJECT_ID);
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="bg-background-black w-full h-fit text-white border border-grey-600">
      <div className="mt-12 text-center">
        <Image
          src={logo}
          alt="logo"
          width={44}
          height={29}
          className="inline-block align-middle mr-3"
        />
        <div className="linear-gradient-company inline-block align-middle text-2xl font-semibold">
          CodeSirpi
        </div>
      </div>
      <div className="my-8 text-center text-2xl  text-grey-800 sm:text-3xl lg:text-5xl">
        Let&#39;s talk about your project
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[670px] flex gap-x-5 px-4">
          <div className="w-[100%]">
            <input
              className=" placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-full px-5"
              placeholder="Your Name"
              value={input.name}
              onChange={(e) => {
                setInput({ ...input, name: e.target.value });
              }}
            />
          </div>

          <div className="w-[100%]">
            <input
              id="email"
              className="placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-full px-5"
              placeholder="Your Email Address"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
            />
            {state.errors && (
              <div className="flex items-center">
                <Icon icon="codicon:error" color="#f87171" />
                <p className="text-red-400 m-2">Invalid email</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full max-w-[670px] px-4">
          <textarea
            id="message"
            className="placeholder:text-grey-600 bg-input-box border-0 rounded-[28px]  h-32 w-[100%] px-5 py-2 mt-16"
            placeholder="Please tell us a brief about your project"
            onChange={(e) => {
              setInput({ ...input, message: e.target.value });
            }}
          />
        </div>

        <button
          disabled={state.submitting}
          onClick={() =>
            handleSubmit({
              ...input,
            })
          }
          className="bg-[#222222] py-2 px-3.5 mt-10 mb-5"
        >
          Submit
        </button>
        {state.succeeded && (
          <div className="flex gap-x-2 items-center">
            <Icon icon="teenyicons:tick-circle-solid" color="#4ADE80" />
            <p className=" text-lg text-green-400">Thanks for Submitting!</p>
          </div>
        )}
      </div>
      <div className="text-xl font-medium text-center mt-14 mb-12 text-grey-400 ">
        2024 CodeSirpi Software LLP
      </div>
    </div>
  );
};

export default ContactSection;
