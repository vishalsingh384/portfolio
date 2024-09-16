'use client'
import {motion} from 'framer-motion'
const portfolio = () => {
    return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
        Portfolio
      </motion.div>
    )
  }
  
  export default portfolio