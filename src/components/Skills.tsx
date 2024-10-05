"use client";
import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJsSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3 size={140} />, label: "CSS" },
  { icon: <FaJsSquare size={140} />, label: "Javascript" },
  { icon: <FaReact size={140} />, label: "React" },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-t from-[#000] to-[#381a5f] to-80% py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
