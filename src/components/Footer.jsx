import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#0a192f]">
      <div className="w-full flex justify-center items-center">
        <a
          className="text-gray-300 px-3 hover:text-blue-600"
          href="https://www.linkedin.com/in/boobalan-s-89b81a169"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="text-gray-300 px-3 hover:text-gray-600"
          href="https://github.com/boobalan08"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className="p-5">
        <p className="text-center text-xl text-gray-200 font-bold">
          Copyright © 2022 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
