import React from 'react';
import Image from 'next/image';
import bg from './topShip.jpg';
import {motion} from 'framer-motion'

const Top = () => {
  return (
    <div className='h-screen bg-cover bg-center pb-10 flex justify-center items-center relative' style={{ backgroundImage: `url(${bg.src})` }}>
      <div
          className='flex flex-col text-center'
      >
        <motion.h1
        initial={{x:-30, opacity: 0 }}
        whileInView={{x:0, opacity: 1}}
        transition={{type: "spring",
        duration: 2}}
        className='text-white font-bold text-2xl'>日本と世界を繋ぎたい第一歩は香港から</motion.h1>
        <motion.h2
          initial={{x:30, opacity: 0 }}
          whileInView={{x:0, opacity: 1}}
          transition={{type: "spring",
          duration: 4}}
          className="text-white font-bold text-5xl">九陽商事</motion.h2>
        <motion.h2 
        initial={{x:30, opacity: 0 }}
        whileInView={{x:0, opacity: 1}}
        transition={{type: "spring",
        duration: 4}}
        className="text-white text-2xl">Kuyo corporation</motion.h2>
      </div>
    </div>
  );
};

export default Top;
