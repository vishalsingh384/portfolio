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
          <div className="p-5">
            <span className="font-semibold text-slate-700 tracking-wide rounded-lg text-justify">
            Hey! I’m a full-stack dev with a love for building smooth, engaging apps—especially in the MERN stack. Started as a Teaching Assistant at Pepcoding, learned a ton there, and now I’m diving even deeper as an Associate Software Engineer at Accenture. With an MTech in Computer Science and loads of hands-on coding, I’m all about solving real-world problems and working with fantastic teams to make digital experiences that actually click with people. Every project fuels my drive to innovate and keep leveling up. Let’s just say I’m here to build cool stuff and have fun doing it!
            </span>
          </div>
          <div className="flex h-full w-full ">
            {/* Work Container */}
            <div className="flex flex-col flex-1">
              {/* Bio Title */}
              <h1 className="text-2xl py-2 flex justify-center ">EXPERIENCE</h1>
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
                    Associate Software Engineer
                  </motion.h2>
                  <ul className="list-disc pl-10 flex flex-col gap-5 font-medium text-l">
                    <li>
                    Jumped in to help design and launch a client leadership portal that’s now rocking over 10,000 users—boosting user experience and efficiency by a cool 30%! Teaming up with some amazing senior folks, we whipped up a leadership messaging platform that cranked up stakeholder engagement by 20%.
                    </li>
                    <li>
                    Got my hands dirty setting up a monthly newsletter system that made client communication way more fun, bumping open rates by 15%. Plus, I helped manage the passion clubs module, which got clients more involved and strengthened those all-important community vibes by 20%!
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
                    Teaching Assistant in Programming in Java
                  </motion.h2>
                  <ul className="list-disc pl-10 flex flex-col gap-5 font-medium text-l">
                    <li>
                    Crafted over 40 fun and interactive Java programming lessons that boosted students’ understanding and retention by up to 30%. Watching them get excited about coding was the best part!
                    </li>
                    <li>
                    Developed personalized teaching methods for more than 30 students, tailoring my approach to their unique learning styles. This hands-on strategy led to a solid 20% jump in their performance—talk about a win!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Skill Container */}
            {/* Skill Title */}{" "}
            <div className="flex flex-col flex-1 w-1/2 items-center">
              <h1 className="text-2xl py-2">SKILLS</h1>
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
