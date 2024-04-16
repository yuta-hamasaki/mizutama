import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full b-0 h-auto bg-blue-50 py-11 '>
      <h2 className='font-bold text-xl flex items-center ml-10 justify-center'>九陽商事</h2>
      <div className='ml-4 '>
        <ul className='flex flex-row justify-center'>
          <li className='m-2'>会社概要</li>
          <li className='m-2'>サービス</li>
          <li className='m-2'>製品情報</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
