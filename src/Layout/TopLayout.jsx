import React from 'react'
import { motion } from 'framer-motion';
import RootLayout from './RootLayout';

function TopLayout({ bgImg, title, className })
{
  const variants = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x:0}
  } 
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      
      className={`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
      style={{backgroundImage: `url(${bgImg})`}}
    
    >
      <RootLayout className="absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60 to-neutral-900/70 flex items-center
      justify-center flex-col gap-3 ">
      <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{duration: 1.85, ease: "easeOut"}}
            
            className="text-2xl md:text-5xl font-bold
             text-white capitalize"
          >
            {title}
          </motion.h1>

      </RootLayout>
    </motion.div>
  )
}

export default TopLayout
