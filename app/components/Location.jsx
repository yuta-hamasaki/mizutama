import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 md:px-28 my-12">
      <h2 className="font-bold text-3xl md:text-4xl underline decoration-solid decoration-4 decoration-red-300 text-center mb-8">
        アクセス
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold">九陽商事（株）</h3>
          <p className="text-gray-600 text-sm">TEL: 080-0000-0000</p>
          <p className="text-gray-60 text-sm0">Email: example@example.com</p>
          <p className="text-gray-600 text-sm">Address:京都府京都市右京区西院西貝川町 30-1</p>
        </div>
        <div className="w-full md:w-2/3">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104580.19501908183!2d135.63236436429787!3d35.00342335875195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107a8182467e7%3A0x31ddfb32387e722e!2z44CSNjE1LTAwNTYg5Lqs6YO95bqc5Lqs6YO95biC5Y-z5Lqs5Yy66KW_6Zmi6KW_6LKd5bed55S677yT77yQ4oiS77yRIOWbm-adoeOCsOODqeODs-ODieODj-OCpOODhO-8oeajnw!5e0!3m2!1sja!2sjp!4v1713223575669!5m2!1sja!2sjp"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
