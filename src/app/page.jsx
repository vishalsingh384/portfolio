"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
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
          <div className="w-full">
            <button className="p-4 rounded ring-1 ring-black bg-black text-white flex text-lg justify-center items-center gap-2 hover:shadow-[0px_0px_6px_2px_rgba(0,80,80,0.3),0px_0px_16px_4px_rgba(0,80,80,0.2)]">
              Download CV
              <a href="/VS.pdf" download><Download/></a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
