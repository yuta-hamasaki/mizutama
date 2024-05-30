import DetailBtn from './DetailBtn';
import React from 'react';
import Link from 'next/link';


const About = () => {
  return (
    <div className=" h-auto flex flex-col items-center justify-center md:px-48 my-36">
      <div className="w-auto px-4 md:text-left text-center">
        <h2 className='font-bold text-5xl underline decoration-solid decoration-4 decoration-red-300 text-center '>About us</h2>
        <p className='text-center my-4 mt-16'>
          九陽商事は、貿易会社です。我々の使命は、顧客のニーズに合わせたカスタマイズされたソリューションを提供することです。
          当社のチームは経験豊富で熱心なプロフェッショナルから構成されており、常に最新の技術トレンドに対応し、最高品質のサービスを提供しています。
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
