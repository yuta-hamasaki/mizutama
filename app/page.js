import { FadeIn } from './components/FadeIn';
import Top from './components/Top';
import About from './components/About';
import Feature from './components/Feature'
import Info from './components/Info'
import Location from './components/Location'

export default function Home() {
  return (
    <div>
      <FadeIn>        
        <Top/>
      </FadeIn>   
      <FadeIn>
        <About/>
      </FadeIn>
      <FadeIn>
        <Feature/>
      </FadeIn>
      <FadeIn>
        <Info/>
      </FadeIn>
      <FadeIn>
       <Location/>
      </FadeIn>
    </div>
  );
}
