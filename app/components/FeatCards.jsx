import Image from 'next/image'
import React from 'react'
import secShip from './secondShip.jpg'
import {motion} from 'framer-motion'

const FeatCards = (/*{title, contents}*/) => {
  return (
    <>
      <div className='p-3 text-center'   width={300} height={100}>
        <motion.h2
          initial={{x:-50, opacity: 0 }}
          whileInView={{x:0, opacity: 1}}
          transition={{type: "spring",
          duration: 1}}
        className='text-2xl font-bold'>{/*title*/}輸出</motion.h2>
        <Image src= {secShip} alt ="九陽商事"className="pt-2 h-auto w-full d-block"/>
        <p className="pt-4 w-full h-auto">{/*contents*/}輸出に関する詳細な説明や特徴をここに記述します。輸出ビジネスは国際市場での重要な活動であり、
          製品やサービスを海外へ送り出すプロセスです。国内の需要や供給と異なる文化や規制に対応し、
          輸出業務を円滑に進めるための戦略や手法についても述べます。</p>
    </div>
    <motion.div
    initial={{x:50, opacity: 0 }}
    whileInView={{x:0, opacity: 1}}
    transition={{type: "spring",
    duration: 1}}
    className='p-3'  width={300} height={100}>
        <h2 className='text-2xl font-bold'>{/*title*/}輸入</h2>
        <Image src= {secShip} alt ="九陽商事" className="pt-2 h-auto w-full d-block"/>
        <p className="pt-4 w-full  h-auto">{/*contents*/}輸入についての詳細な説明やプロセスをここに記述します。輸入ビジネスは海外から製品や
          サービスを自国に取り入れることを指し、国内市場への供給源として重要な役割を果たします。
          輸入における関税や法律規制、品質管理などの要素にも触れ、効果的な輸入戦略の構築についても考察します。</p>
    </motion.div>
    <motion.div
    initial={{x:-50, opacity: 0 }}
    whileInView={{x:0, opacity: 1}}
    transition={{type: "spring",
    duration: 1}}
    className='p-3' width={300} height={100}>
        <h2 className='text-2xl font-bold'>{/*title*/}テキスト</h2>
        <Image src= {secShip} alt ="九陽商事" className="pt-2 h-auto w-full d-block"/>
        <p className="pt-4 w-full h-auto">{/*contents*/}その他の関連するテキストや情報をここに記載します。例えば、会社の概要やビジョン、
          商品やサービスに関する詳細、お問い合わせ情報などが含まれる場合があります。
          ユーザーにとって有益な情報を提供し、サイトの利用者体験を向上させることが目的です。</p>
    </motion.div>
    </>

    
  )
}

export default FeatCards
