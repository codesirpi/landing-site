"use client";
import React from "react";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import Image from "next/image";
import "../../globals.css";

import { useForm, ValidationError } from "@formspree/react";
import { environment } from "@/app/environments/environment";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import AnimatedSubmitButton from "./animated-submit-button";

const ContactSection = () => {
  const [state, handleSubmit] = useForm(environment.FORMSPREE_PROJECT_ID);
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const contactText = "Let's talk about your project".split(" ");

  return (
    <div className="bg-background-black w-full h-fit text-white">
      <motion.div
        className="mt-12 text-center"
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
        <Image
          src={logo}
          alt="logo"
          width={34}
          height={22}
          className="inline-block align-middle mr-2.5 w-[34px] h-[22px] md:w-11 md:h-[29px] md:mr-3"
        />
        <div className="linear-gradient-company inline-block align-middle font-semibold text-2xl md:text-[32px]">
          CodeSirpi
        </div>
      </motion.div>
      <motion.div
        className="my-4 text-center text-xl text-grey-800 xs:text-2xl xs:my-8 sm:text-3xl lg:text-5xl"
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
        {contactText.map((letter, i) => (
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
            {letter}&nbsp;
          </motion.span>
        ))}
      </motion.div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[670px] flex flex-col gap-5 px-4 xs:flex-row">
          <motion.div
            className="w-[100%]"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <motion.input
              className=" placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-full px-5"
              placeholder="Your Name"
              value={input.name}
              onChange={(e) => {
                setInput({ ...input, name: e.target.value });
              }}
              whileTap={{
                scale: 1.1,
                transition: {
                  duration: 0.1,
                },
              }}
            />
          </motion.div>

          <motion.div
            className="w-[100%]"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <motion.input
              id="email"
              className="placeholder:text-grey-600 bg-input-box rounded-[28px] h-14 w-full px-5"
              placeholder="Your Email Address"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
              whileTap={{
                scale: 1.1,
                transition: {
                  duration: 0.1,
                },
              }}
            />
            {state.errors && (
              <div className="flex items-center">
                <Icon icon="codicon:error" color="#f87171" />
                <p className="text-red-400 m-2">Invalid email</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-[670px] px-4"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
        >
          <motion.textarea
            id="message"
            className="placeholder:text-grey-600 bg-input-box border-0 rounded-[28px] h-24 xs:h-32 w-[100%] px-5 py-2 mt-5 xs:mt-8"
            placeholder="Please tell us a brief about your project"
            onChange={(e) => {
              setInput({ ...input, message: e.target.value });
            }}
            whileTap={{
              scale: 1.05,
              transition: {
                duration: 0.1,
              },
            }}
          />
        </motion.div>

        <motion.button
          className="py-2 px-9 rounded-full border-4 border-violet-700 bg-button-background mt-8 mb-5 hover:cursor-pointer flex items-center relative"
          disabled={state.submitting}
          onClick={() =>
            handleSubmit({
              ...input,
            })
          }
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.1,
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.1,
            },
          }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
          }}
          viewport={{ once: true }}
        >
          <div className="absolute w-10 left-0">
            <AnimatedSubmitButton />
          </div>
          <Image
            src={star}
            width={16}
            height={16}
            alt="star"
            className="inline-bock align-midle mr-1"
          />
          Submit
        </motion.button>
        {state.succeeded && (
          <div className="flex gap-x-2 items-center">
            <Icon icon="teenyicons:tick-circle-solid" color="#4ADE80" />
            <p className=" text-lg text-green-400">Thanks for Submitting!</p>
          </div>
        )}
      </div>
      <motion.div
        className="text-xl font-medium text-center mt-14 mb-8 text-grey-400"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        viewport={{ once: true }}
      >
        2024 CodeSirpi Software LLP
      </motion.div>
    </div>
  );
};

export default ContactSection;
