"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Meteors from "@/components/ui/meteors";
const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <Meteors number={15} />
      <div className="h-full flex gap-10 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 md:gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Welcome to my portfolio
          </h1>
          {/* Desc */}
          <p className="md:text-xl text-justify">
            I am Vishal! I’m a full-stack developer with a love for creating
            cool, efficient web experiences using the MERN stack. With a little
            over a year of experience, I’m currently diving into exciting
            projects at Accenture. Outside of coding, I’m a big sports fan,
            always up for a game or catching the latest match. Thanks for
            stopping by—take a look around!
          </p>
          {/* Buttons */}
          <div className="w-full flex justify-center lg:justify-start">
            <a href="/VS.pdf" download>
              <button className="p-4 rounded ring-1 ring-white bg-black text-white flex text-sm md:text-xl justify-center items-center gap-2 hover:shadow-[0px_0px_6px_2px_rgba(0,80,80,0.3),0px_0px_16px_4px_rgba(0,80,80,0.2)]">
                <span>Download CV</span>
                <Download className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
