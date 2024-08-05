import { motion } from 'framer-motion'
import React from 'react'
// motion
function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl'>
     <div className='text border-b-2 border-t-2 gap-10 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
     <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}}  className='text-[20vw] leading-none font-bold pt-15 uppercase mb-10 text-white pr-20'>we are ochi</motion.h1>
     <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}} className='text-[20vw] leading-none font-bold pt-15 uppercase mb-10 text-white  pr-20'>we are ochi</motion.h1>
   </div>
    </div>
  )
}

export default Marque
