"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import movingHouse from "@/assets/moving_house.png";
import blogNews from "@/assets/blog_news.png";
import hotelBooking from "@/assets/hotel_booking.png";
import gemini from "@/assets/gemini.png";
import codevui from "@/assets/codevui.png";

const projects = [
  {
    title: "Moving House Service Management System",
    desc: "A comprehensive system built on a web platform to manage moving house schedules, reporting, statistics, and portfolio management, with integrated mobile applications",
    devStack: "MongoDB, Express, ReactJS, Node.JS, Ant Design",
    type: "Website | App",
    link: "https://movinghousedeploy.web.app/",
    git: "https://github.com/quidev2505/MovingHouseService",
    src: movingHouse,
  },
  {
    title: "Ecommerce Share Code",
    desc: "Website provide many type of source and payment online",
    devStack: "MongoDB - Express - ReactJS - NodeJS - Stripe",
    type: "Website",
    link: "https://codevui.vercel.app/",
    git: "",
    src: codevui,
  },
  {
    title: "Gemini Clone Website",
    desc: "Website builded with ReactJS, TailwindCSS and used gemini API to answer the question from user",
    devStack: "ReactJS, TailwindCSS, GeminiAPI",
    type: "Website",
    link: "https://gemini-clone-reactjs-self.vercel.app",
    git: "https://github.com/quidev2505/GeminiClone",
    src: gemini,
  },
  {
    title: "Building News Blog Website",
    desc: "Website was build and optimize performance with nextjs and applied SEO best practices",
    devStack: "NextJS, TypeScript, TailwindCSS, API - newsdata.io",
    type: "Website",
    link: "https://bloglatestnews.vercel.app/",
    git: "https://github.com/quidev2505/blog_nextjs_seo",
    src: blogNews,
  },
  {
    title: "Hotel Booking Website",
    desc: "Website was build to book room in hotel, fill information into form and pre-order room. This site using NextJS and Prisma, API Routes to query and show data",
    devStack: "NextJS, TypeScript, NodeJS, ExpressJS, PostgreSQL",
    type: "Website",
    link: "https://hotelroom.vercel.app/",
    git: "https://github.com/quidev2505/hotel_booking",
    src: hotelBooking,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-8 mt-36 mx-auto"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold md:my-12 text-center">
        Selected <span className="text-orange-400">Projects</span>
      </h1>
      <div className="px-6 md:p-0 max-w-[1100px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col gap-8 ${index % 2 === 1
              ? "md:flex-row-reverse md:justify-between gap-12"
              : "md:flex-row md:justify-between"
              }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <h2 className="text-lg text-white/70 break-words p-4">
                {project.desc}.
              </h2>
              <h2 className="text-xl text-white font-semibold">
                {project.type}
              </h2>
              <h2 className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </h2>
              <div className="w-64 h-[1px] bg-gray-400 my-4 ">
                <a href={project.link} className="mr-6" target="blank">
                  Demo
                </a>
                <a href={project.git} target="blank">
                  Git
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                draggable="false"
                className="md:h-[350px] md:w-[500px] rounded border-gray-700 border-[3px]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
