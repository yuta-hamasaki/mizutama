import React from 'react'
import FeatCards from './FeatCards'


const Feature = () => {
  /*const feat = [
    {title: "輸入", contents: "テキスト"},
    {title: "輸出", contents: "テキスト"},
  ];*/
  return (
    <div className="py-10 bg-blue-50">
      <h2 className='text-center font-bold text-5xl underline decoration-solid decoration-4 decoration-red-300'>Service</h2>
      <div className='flex md:flex-row  flex-col justify-center text-center pt-10 mx-16'>
        {/*feat.map((feat, index)=>{*/
        <FeatCards 
          /*key={index}
          title={feat.title}
          content={feat.contents}*/
        />
        }{/*)}*/}
      </div>
    </div>
  )
}

export default Feature
