import Image from 'next/image'
import React from 'react'
import secShip from './secondShip.jpg'

const FeatCards = (/*{title, contents}*/) => {
  return (
    <>
      <div className='p-3'>
        <h2>{/*title*/}輸出</h2>
        <Image src= {secShip} alt ="九陽商事" width={300} height={100} className="mx-auto d-block"/>
        <p>{/*contents*/}輸出に関する詳細な説明や特徴をここに記述します。輸出ビジネスは国際市場での重要な活動であり、
          製品やサービスを海外へ送り出すプロセスです。国内の需要や供給と異なる文化や規制に対応し、
          輸出業務を円滑に進めるための戦略や手法についても述べます。</p>
    </div>
    <div className='p-3'>
        <h2>{/*title*/}輸入</h2>
        <Image src= {secShip} alt ="九陽商事" width={300} height={100} className="mx-auto d-block"/>
        <p>{/*contents*/}輸入についての詳細な説明やプロセスをここに記述します。輸入ビジネスは海外から製品や
          サービスを自国に取り入れることを指し、国内市場への供給源として重要な役割を果たします。
          輸入における関税や法律規制、品質管理などの要素にも触れ、効果的な輸入戦略の構築についても考察します。</p>
    </div>
    <div className='p-3'>
        <h2>{/*title*/}テキスト</h2>
        <Image src= {secShip} alt ="九陽商事" width={300} height={100} className="mx-auto d-block"/>
        <p>{/*contents*/}その他の関連するテキストや情報をここに記載します。例えば、会社の概要やビジョン、
          商品やサービスに関する詳細、お問い合わせ情報などが含まれる場合があります。
          ユーザーにとって有益な情報を提供し、サイトの利用者体験を向上させることが目的です。</p>
    </div>
    </>

    
  )
}

export default FeatCards
