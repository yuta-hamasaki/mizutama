import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 md:px-28 my-12">
      <h2 className="font-bold text-3xl md:text-4xl underline decoration-solid decoration-4 decoration-red-300 text-center mb-8">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold">九陽商事（株）</h3>
          <p className="text-gray-600 text-sm">TEL: 080-0000-0000</p>
          <p className="text-gray-60 text-sm0">Email: kuyo.corporation@gmail.com</p>
          <p className="text-gray-600 text-sm">Address:京都府京都市右京区西院西貝川町 30-1</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
