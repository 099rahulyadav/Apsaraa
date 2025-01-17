"use client";
import React from "react";
import { ContainerScroll } from "../constants/container-scroll-animation";
import Image from "../assets/Images/homebg1-01.jpg";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white font-rubik pb-4 ">
              Tired of downloading your pictures from large<br />
              <span className="text-4xl md:text-[6rem] text-[#4285F4] font-bold mt-1 leading-none ">
                G
              </span>
              <span className="text-4xl md:text-[6rem] text-[#EA4335] font-bold mt-1 leading-none">
                o
              </span>
              <span className="text-4xl md:text-[6rem]  text-[#FBBC05] font-bold mt-1 leading-none">
                o
              </span>
              <span className="text-4xl md:text-[6rem]   text-[#4285F4] font-bold mt-1 leading-none">
                g
              </span>
              <span className="text-4xl md:text-[6rem]  text-[#34A853] font-bold mt-1 leading-none">
                l
              </span>
              <span className="text-4xl md:text-[6rem]  text-[#EA4335] font-bold mt-1 mr-4 leading-none">
                e
              </span>
              <span className="text-4xl md:text-[6rem]   font-bold mt-1 leading-none">
               Drive
              </span>
            </h1>
          </>
        }
      >
        <img
          src={Image} // Ensure the image source is correct
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}