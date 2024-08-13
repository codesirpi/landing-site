"use client";
import React from "react";
import logo from "../../assets/contact-section/logo.png";
import Image from "next/image";
import "../../globals.css";
import { useForm, ValidationError } from '@formspree/react';
import { environment } from "@/app/environments/environment";


const contactSection = () => {
  const [state, handleSubmit] = useForm(environment.FORMSPREE_PROJECT_ID);

  const [input, setInput] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  return (
    <div className="bg-[background-black] w-full h-fit">
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
      <div className="my-8 text-center text-5xl text-grey-800">
        Let&#39;s talk about your project
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[670px] flex gap-x-5">
          <input
            className=" placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-[100%] px-5"
            placeholder="Your Name"
            value={input.name}
            onChange={(e) => {
              setInput({ ...input, name: e.target.value });
            }}
          />
          <input
            id="email"
            className="placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-[100%] px-5"
            placeholder="Your Email Address"
            value={input.email}
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <textarea
          className="placeholder:text-grey-600 bg-input-box border-0 rounded-[28px] max-w-[670px] h-32 w-[100%] px-5 py-2 mt-16"
          id="message"
          placeholder="Please tell us a brief about your project"
          value={input.message}
          onChange={(e) => {
            setInput({ ...input, message: e.target.value });
          }}
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <button disabled={state.submitting} onClick={ () => {
          handleSubmit({
            ...input
          });

        }} className="bg-[#222222] py-2 px-3.5 mt-10">Submit</button>
      </div>
      <div className="text-xl font-medium text-center mt-20 mb-12 text-grey-400 ">
        2024 CodeSirpi Software LLP
      </div>
    </div>
  );
};

export default contactSection;
