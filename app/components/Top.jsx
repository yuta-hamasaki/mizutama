import React from 'react';
import Image from 'next/image';
import Ship from './topShip.jpg';

const Top = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
      >
        <h1 className="text-white font-bold text-4xl">九陽商事</h1>
        <h2 className="text-white text-lg">Kuyo corporation</h2>
      </div>
      <Image src={Ship} layout="fill" objectFit="cover" alt="Ship" />
    </div>
  );
};

export default Top;
