'use client'
import { useState, useEffect } from "react";
import { FadeIn } from './components/FadeIn';
import Top from './components/Top';
import About from './components/About';
import Feature from './components/Feature'
import Info from './components/Info'
import Location from './components/Location'
import Header from './components/Header';

export default function Home() {
  const [header, setHeader] = useState(false)

  const scrollHeader = () =>{
    if(window.scrollY >= 100){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader)
    return()=>{
      window.addEventListener('scroll', scrollHeader)
    }
  })

  
  return (
    <div>
      {header? <Header/>
    :
    <></>
    }
      <Top/>
      <FadeIn>
        <About/>
      </FadeIn>
      <Feature/>
      <Info/>
      <FadeIn>
      <Location/>
      </FadeIn>
    </div>
  );
}
