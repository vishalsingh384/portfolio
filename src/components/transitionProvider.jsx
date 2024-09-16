'use client'

import { usePathname } from "next/navigation"
import Navbar from "./navbar"
import { delay, motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion"

const TransitionProvider = ({ children }) => {

  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="left-0 right-0 top-0 bottom-0 m-auto fixed z-50 w-fit h-fit bg-black text-white text-6xl cursor-default" 
          initial={{opacity:1}} 
          animate={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration:0.8}}
          >
          {pathName==='/'?'HOME':pathName.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" , transition:{delay:0.5}}}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider