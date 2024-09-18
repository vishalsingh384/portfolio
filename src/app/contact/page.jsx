'use client'
import { motion } from 'framer-motion'

const contact = () => {
  const text = "Hello World"
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Text Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2'>
          {text.split("").map((letter, index)=>(
            <motion.span key={index} initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:2, repeat:Infinity,  repeatType: "reverse", delay:index*0.1}}>
              {letter}
            </motion.span>
          ))}
          😁
        </div>
        {/* Form Container */}
        <form className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
        <span>Hey V,</span>
        <textarea className='bg-transparent border-b-2 border-b-black outline-none resize-none'/>
        <span>My mail address is:</span>
        <input type='text' className='bg-transparent border-b-2 border-b-black outline-none'/>
        <span>Regards</span>
        <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send 📩</button>
        </form>
      </div>
    </motion.div>
  )
}

export default contact