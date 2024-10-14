"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-2xl md:text-6xl font-bold">
            Welcome to the home page
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            deleniti aperiam mollitia quibusdam nulla odit alias ipsam, aliquam
            cumque repellat, excepturi eum totam, laboriosam velit consectetur
            soluta necessitatibus quae cupiditate!
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
