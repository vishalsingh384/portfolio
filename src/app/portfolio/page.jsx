"use client";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { LinkIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BorderBeam } from "@/components/ui/border-beam";

const items = [
  {
    id: 1,
    color: "from-red-200 to-green-200",
    title: "MovieMuse",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Movie.png",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 2,
    color: "from-green-200 to-blue-200",
    title: "OpenBoard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/OpenBoard.png",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 3,
    color: "from-blue-200 to-purple-200",
    title: "UnSocial Media",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum. ",
    img: "/Social.png",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
  {
    id: 4,
    color: "from-purple-200 to-yellow-200",
    title: "Weather-Wise",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Weather-App.png",
    link: "https://www.linkedin.com/in/vishalsing384",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
          My Works
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen items-center relative">
          <motion.div style={{ x }} className="flex">
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 to-red-200`}
            />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col lg:flex-row bg-gray-100 bg-opacity-25 p-5 rounded-lg shadow-lg gap-8 max-w-5xl mx-auto">
                    {/* Left Side - Image and Title */}
                    <div className="flex flex-col items-center lg:items-start lg:w-[35%]">
                      <div className="relative w-60 h-44 lg:w-[250px] lg:h-[200px]">
                        <Image
                          src={item.img}
                          alt=""
                          fill
                          className="object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-center lg:text-left lg:text-xl xl:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Right Side - Description */}
                    <div className="flex flex-col justify-center lg:w-[60%] max-w-[500px]">
                      <p className="text-gray-700 text-base lg:text-lg xl:text-xl">
                        {item.desc}
                      </p>

                      {/* Links */}
                      <div className="flex mt-4 gap-4">
                        <Link
                          href={item.link}
                          className="p-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
                        >
                          <motion.button
                            initial={{ opacity: 0.7 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex items-center"
                          >
                            <LinkIcon className="mr-2 w-5 h-5" /> Link
                          </motion.button>
                        </Link>
                        <Link
                          href={item.link}
                          className="p-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-900"
                        >
                          <motion.button
                            initial={{ opacity: 0.7 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex items-center"
                          >
                            <GitHubLogoIcon className="mr-2 w-5 h-5" /> GitHub
                          </motion.button>
                        </Link>
                      </div>
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
