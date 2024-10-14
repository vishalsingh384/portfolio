"use client";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { GithubIcon, LinkIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const items = [
  {
    id: 1,
    color: "from-red-400 to-blue-400",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 2,
    color: "from-blue-400 to-violet-400",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 3,
    color: "from-violet-400 to-purple-400",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 4,
    color: "from-purple-400 to-red-400",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-red-400`}
            />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-5 text-white">
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[400px] group">
                    <Image src={item.img} alt="" fill />
                    <div className="hidden group-hover:flex absolute h-full w-full justify-between group-hover:bg-black group-hover:bg-opacity-40">
                      <Link
                        href={item.link}
                        className="flex-1 flex justify-center items-center"
                      >
                        <motion.button
                          initial={{ opacity: 0.5 }}
                          whileHover={{ scale:1.3, opacity: 1 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full w-full flex justify-center items-center"
                        >
                          <LinkIcon className="w-20 h-20" />
                        </motion.button>
                      </Link>
                      <div
                        style={{ width: "1px" }}
                        className="h-full bg-white"
                      />
                      <Link
                        href={item.link}
                        className="flex-1 flex justify-center items-center"
                      >
                        <motion.button
                          initial={{ opacity: 0.5 }}
                          whileHover={{ scale:1.3, opacity: 1 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full w-full flex justify-center items-center"
                        >
                          <GitHubLogoIcon className="w-20 h-20" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 justify-center items-center">
                    <h3 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                      {item.title}
                    </h3>
                    <p className="w-70 md:w-86 lg:w-[300px] xl:w-[450px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
