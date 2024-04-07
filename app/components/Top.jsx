import Image from 'next/image';
import Ship from './topShip.jpg';
import React from 'react';

const Top = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-white font-bold text-4xl">キャッチコピー</h1>
        <h2 className="text-white text-lg">小見出しテキスト</h2>
      </div>
      <Image src={Ship} layout="fill" objectFit="cover" alt="" />
    </div>
  );
};

export default Top;
