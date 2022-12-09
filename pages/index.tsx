import { useRef, MouseEvent, useState } from 'react';
import { Logo } from '../components/logo';
import { Container, SpotlightBackground } from './styled';

const DELAY = 100;

export default function Home() {
  const spotBg = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const handleOnMouseMove = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setTimeout(() => {
      const x = event.clientX;
      const y = event.clientY;
      const innerRadius = 10;
      const outerColor = '#000000'
      const outerRadius = 200;

      if (spotBg.current && !animate) {
        spotBg.current.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent ${innerRadius}px, ${outerColor} ${outerRadius}px)`
      }
    }, DELAY);
  }

  const handleOnClick = () => {
    if (spotBg.current && !animate) {
      setAnimate(true);
    }
  }

  return (
    <Container onMouseMove={(e) => handleOnMouseMove(e)} onClick={handleOnClick}>
      <SpotlightBackground id="spot-bg" ref={spotBg} animate={animate} />
      <Logo animate={animate} />
    </Container>
  )
}