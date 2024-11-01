"use client";
import React from "react";
import { motion } from "framer-motion";
import cursor from "@/assets/icon1.png";
import lighting from "@/assets/icon2.png";
import profilePicture from "@/assets/portforlio.png";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  const pdfUrl = "/PhanThanhQui_FrontEnd.pdf";
  return (
    <>
      <div className="py-24 relative overflow-clip bg-gradient-to-b from-[#0a045789] via-[#8F5C55] to-[#DBAF6E] px-2 z-30">
        <div
          className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 
        bg-black"
        ></div>
        <div className="relative">
          <div className="text-8xl font-bold text-center">
            <h1 className="text-[#98B4Ce]">Hi, I am</h1>
            <h1 className="text-[#E48A57]">Phan Qui</h1>
          </div>
          <motion.div
            className="absolute hidden md:block left-[230px] top-[175px]"
            drag
          >
            <Image
              src={cursor}
              height="170"
              width="170"
              alt="cursor"
              className=""
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="absolute  hidden md:block right-[220px] top-[20px]"
            drag
          >
            <Image
              src={lighting}
              height="120"
              width="120"
              alt="lighting"
              className=""
              draggable="false"
            />
          </motion.div>

          <p
            className="text-center text-white font-bold text-xl max-w-[690px] mx-auto mt-8
          "
          >
            I am a Web Developer with over a year of experience crafting
            <br />
            high-performance websites that deliver exceptional user experiences
          </p>

          <Image
            src={profilePicture}
            alt="profile picture"
            className="mx-auto"
            draggable="false"
            style={{ width: "390px", height: "390px" }}
          />
          <div className="flex justify-center">
            <a
              className="bg-white rounded-md flex items-center justify-between mx-auto p-5 text-xl hover:bg-black hover:text-white border"
              href={pdfUrl}
              download="PhanThanhQui_FrontEnd.pdf"
            >
              <IoMdDownload />
              <h2 className="ml-4">Download My CV</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
