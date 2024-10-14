"use client";
import About from "@/components/about";
import { IconCloudDemo } from "@/components/ui/IconCloud";
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: "true" });

  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full py-10" ref={containerRef}>
        {/* Text Container */}
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10">
          {/* Biography Container */}
          <div className="flex flex-col gap-20 w-1/2 h-full">
            {/* Bio Title */}
            <h1 className="font-bold text-2xl flex justify-center">KNOW ME</h1>
            {/* Bio Desc */}
            <div className="flex flex-col gap-5 pl-5 pr-5">
              <About desc="Started Btech in 2017" timer={1} x="0px"/>
              <About desc={"Started Mtech in 2021"} timer={1.2} x="95px"/>
              <About
                desc={"Worked and learend as a teching assisatant in 2022"}
                timer={1.4} x="0px"
              />
              <About desc={"Joined Accenture in 2023"} timer={1.6} x="95px"/>
              <About desc={"Loves playing football and cricket"} timer={1.8} x="0px"/>
              <About desc={"Aspiring FullStack Developer"} timer={2} x="95px"/>
            </div>
          </div>

          {/* Skill Container */}
          <div className="flex flex-col gap-12 w-1/2 items-center h-full">
            {/* Skill Title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKill SVG */}
            <div className="w-4/6">
              <IconCloudDemo />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
