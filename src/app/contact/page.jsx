'use client'
import {motion} from 'framer-motion'

const contact = () => {
    return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
        Contact
      </motion.div>
    )
  }
  
  export default contact