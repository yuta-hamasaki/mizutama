import Image from 'next/image';
import Ocean from './ocean.jpg';
import DetailBtn from './DetailBtn'

const Info = () => {
  return (
    <div className="relative h-80">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-white font-bold text-4xl pb-6">製品情報</h1>
          <h2 className="text-white text-lg">
            <DetailBtn/>
          </h2>
        </div>
      <Image src={Ocean} layout="fill" objectFit="cover" alt="" />
    </div>
  );
};

export default Info;