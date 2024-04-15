import Image from "next/image";
import Top from './components/Top';
import About from './components/About';
import Feature from './components/Feature'
import Info from './components/Info'
import Location from './components/Location'

export default function Home() {
  return (
    <div>
      <Top/>
      <About/>
      <Feature/>
      <Info/>
      <Location/>
    </div>
  );
}
