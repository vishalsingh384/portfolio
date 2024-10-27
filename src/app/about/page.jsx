"use client";
import About from "@/components/about";
import { IconCloudDemo } from "@/components/ui/IconCloud";
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const ref = useRef();

  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full" ref={containerRef}>
        {/* Sub Container */}
        <div className="flex flex-col justify-between items-center h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
          <div className="p-5 text-justify">
            <span className="font-semibold font-mono text-slate-700 tracking-wider text-base">
              <span className="text-4xl">Hey</span>, I’m a full-stack dev with a love for building smooth,
              engaging apps—especially in the MERN stack. Started as a Teaching
              Assistant at Pepcoding, learned a ton there, and now I’m diving
              even deeper as an Associate Software Engineer at Accenture. With
              an MTech in Computer Science and loads of hands-on coding, I’m all
              about solving real-world problems and working with fantastic teams
              to make digital experiences that actually click with people. Every
              project fuels my drive to innovate and keep leveling up. Let’s
              just say I’m here to build cool stuff and have fun doing it!
            </span>
          </div>
          <div className="flex h-full w-full ">
            {/* Work Container */}
            <div className="flex flex-col flex-1 gap-8">
              {/* Bio Title */}
              <h1 className="text-2xl flex justify-center ">EXPERIENCE</h1>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <motion.h2
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="font-bold bg-gradient-to-r from-red-200 via-blue-200 to-green-200 rounded-xl py-3 pl-3 text-2xl bg-[length:200%_100%] text-slate-600"
                  >
                    Associate Software Engineer @ Accenture
                  </motion.h2>
                  <ul className="list-disc pl-10 flex flex-col gap-5 font-medium text-l">
                    <li>
                      During my time at Accenture, I’ve really grown from a
                      newcomer into someone who actively drives client
                      engagement. I owe a lot to the amazing team around me;
                      their support and expertise have pushed me to elevate my
                      skills. Together, we’ve made some great strides in
                      enhancing user experience and building community. It’s
                      been an incredible journey, and I’m thankful for the
                      inspiration and growth I’ve experienced along the way.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <motion.h2
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="font-bold bg-gradient-to-r from-red-200 via-blue-200 to-green-200 rounded-xl py-3 pl-3 text-2xl bg-[length:200%_100%] text-slate-600"
                  >
                    Teaching Assistant in Programming in Java @ Pepcoding
                  </motion.h2>
                  <ul className="list-disc pl-10 flex flex-col gap-5 font-medium text-l">
                    <li>
                      As someone still learning about technology, I created over
                      40 interactive Java programming lessons that made coding
                      fun for my peers and boosted their understanding.
                      Tailoring my approach for more than 30 classmates, I
                      adapted to their unique learning styles. This hands-on
                      strategy not only improved their performance but also
                      deepened my own knowledge—truly a win-win!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Skill Container */}
            {/* Skill Title */}{" "}
            <div className="flex flex-col flex-1 w-1/2 items-center">
              <h1 className="text-2xl">SKILLS</h1>
              {/* SKill SVG */}
              <div className="w-4/6">
                <IconCloudDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
