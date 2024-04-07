import Image from "next/image";
import Header from "./components/Header";
import Top from './components/Top';
import About from './components/About';
import Feature from './components/Feature'
import Info from './components/Info'

export default function Home() {
  return (
    <div className="red">
      <Header/>
      <Top/>
      <About/>
      <Feature/>
      <Info/>
      hi kuyo-corp
    </div>
  );
}
