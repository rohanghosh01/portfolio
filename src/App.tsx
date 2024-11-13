import { useEffect, useState } from "react";
import { MouseTracker } from "./components/MouseTracker";
import { Header } from "./components/Header";
import {
  Hero,
  Skills,
  Projects,
  Experience,
  Contact,
} from "./components/Sections";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX - 10, y: e.clientY - 10 });
      setCursorDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      <MouseTracker />

      <div
        className="custom-cursor transition-all duration-75 ease-out"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <div
        className="cursor-dot transition-all duration-75 ease-out"
        style={{ left: cursorDotPosition.x, top: cursorDotPosition.y }}
      />

      <Header />

      <main className="relative pt-[0px]">
        <div id="home" className="min-h-screen">
          <Hero />
        </div>
        <div id="skills" className="min-h-screen">
          <Skills />
        </div>
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        <div id="experience" className="min-h-screen">
          <Experience />
        </div>
        <div id="contact" className="min-h-screen">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
