"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../constants/hero-highlight";
import React from "react";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" font-rubik text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        We have got your back.<br/> Now you can download your pictures <br/>from large google drives
        {" "}<br/>
        <Highlight className="text-black dark:text-white">
          in just 4 easy steps
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
