'use client'
import {motion} from 'framer-motion'
const portfolio = () => {
  const ref=useRef();
    return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
        <div className='h-[600vh]' ref={ref}>
          <div></div>
        </div>
      </motion.div>
    )
  }
  
  export default portfolio