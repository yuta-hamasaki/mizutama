import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        {/*<img src="/logo.png" alt="Company Logo" className="h-10 mr-4" />*/}
        <h1 className='text-3xl font-bold h-10 mr-4'>九陽商事</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">会社概要</a></li>
            <li><a href="#">サービス</a></li>
            <li><a href="#">製品情報</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <ul className=" text-white items-center flex">
          <li>EN</li>
          <p>|</p>
          <li>中文</li>
          <p>|</p>
          <li>日本語</li>
          </ul>

          <button className="mx-4 bg-green-500 rounded-3xl p-2">CONTACT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
