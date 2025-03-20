import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <main>
      <About />
      <Skills />
    </main>
  );
}