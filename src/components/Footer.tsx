import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-gray-700 pt-4 flex justify-between items-center px-5 md:px-0">
      <h1 className="text-2xl font-bold">Phan Qui</h1>
      <div className="flex space-x-6 mt-4 z-50">
        <Link
          href="https://www.linkedin.com/in/phan-thanh-qui-798087270/"
          className="hover:text-gray-300"
          target="blank"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://github.com/quidev2505"
          className="hover:text-gray-300"
          target="blank"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.facebook.com/share/R3tytnVBndFP1AS6/"
          className="hover:text-gray-300"
          target="blank"
        >
          <FaFacebook size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
