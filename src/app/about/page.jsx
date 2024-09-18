'use client'
import Brain from '@/components/brain'
import { animate, easeIn, easeInOut, motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const about = () => {

  const containerRef = useRef();
  const ref=useRef();
  const isInView=useInView(ref,{margin:"-100px", once:"true"});  

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      {/* Container */}
      <div className='h-full bg-red-500 lg:flex overflow-scroll no-scrollbar' ref={containerRef}>


      {/* Text Container */}
      <div className='h-fit border border-blue-400 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>

        {/* Biography Container */}
        <div className='flex flex-col gap-12 justify-center'>
          {/* Bio Title */}
          <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
          {/* Bio Desc */}
          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum consequuntur optio maxime ut, pariatur totam architecto aspernatur possimus debitis, quae, beatae quod? Minima ipsum dolor dolore impedit, repellat id.
          </p>
          {/* Bio scroll svg */}
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            initial={{y:"-20px", opacity:0.2}}
            animate={{y:0, opacity:1}}
            transition={{repeat:Infinity, duration:2, ease:easeInOut}}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>


        {/* Skills Container */}
        <motion.div ref={ref} initial={{x:"-300px"}} animate={isInView?{x:0}:{}} className='flex flex-col gap-12 justify-center'>
          {/* Skill Title */}
          <h1 ref={ref} className='font-bold text-2xl'>SKILLS</h1>
          {/* Skill List */}
          <div className='flex gap-4 flex-wrap'>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              SCSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PostgreSQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Nest.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Express.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Spring Boot
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              GraphQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Apollo
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Redux
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Three.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              WebGL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Webpack
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Vite
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Docker
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              AWS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Firebase
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Git
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Figma
            </div>
          </div>
        </motion.div>
        
      </div>



      {/* SVG CONTAINER */}
      <div className="hidden lg:flex lg:w-1/3 sticky top-0 z-30 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress} />
      </div>


    </div>
    </motion.div >
  )
}

export default about