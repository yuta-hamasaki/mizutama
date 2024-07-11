import DetailBtn from './DetailBtn';
import React from 'react';
import Link from 'next/link';


const About = () => {
  return (
    <div className=" h-auto flex flex-col items-center justify-center md:px-48 my-36">
      <div className="w-auto px-4 md:text-left text-center">
        <h2 className='font-bold text-5xl underline decoration-solid decoration-4 decoration-red-300 text-center '>About us</h2>
        <p className='text-center my-4 mt-16'>
          九陽商事は輸出を主とした商社です。我々は質の高い日本の商品を海外に輸出し、広めていくことを目的としています。
          大切にしていることは<span className="text-bold">
          ”質の高い日本商品。そしてその商品が創られるまでのストーリー”
          </span>
        </p>
      </div>
      <div className="pt-16">
      <Link href="/about">
        <DetailBtn />
      </Link>
      </div>
    </div>
  );
};

export default About;
