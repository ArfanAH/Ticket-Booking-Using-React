import React from 'react'
import { motion } from 'framer-motion';
import RootLayout from '../Layout/RootLayout';
import Search from './Search';


const hero = () =>
{
  const variants = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x:0}
  }
  return (
    <motion.div
      className='w-full flex-1 h-screen bg-[url("./assets/herobg.png")] bg-cover bg-no-repeat bg-top relative'

      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{duration: 1, ease: "easeInOut"}}
    >
      <RootLayout className="absolute top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center justify-start text-center flex-col gap-9">
        
        {/* title */}

        <div className='space-y-2'>
          <motion.p
            
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{duration: 2, ease: "easeOut"}}
            
            
            className="text-lg font-medium text-black"
          
          >
            Get Your Tickets
          </motion.p>
          <motion.h1
            
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{duration: 1.85, ease: "easeOut"}}
            
            className="text-2xl md:text-5xl font-bold
             text-black capitalize"
          >
            Find best deals for your travel
          </motion.h1>
        </div>


        {/* search */}

        <Search/>

      </RootLayout>
    </motion.div>
  )
}

export default hero
