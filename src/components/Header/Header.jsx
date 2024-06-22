import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./Header.css";
import CTA from "./CTA";
import Typewriter from "typewriter-effect";
import HeaderSocials from "./HeaderSocials";
import { Link, animateScroll as scroll } from "react-scroll";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Header() {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact"); // Replace 'targetSection' with the ID of the section you want to scroll to
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container" id="home">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <div className="header-overlay">
        <h1 className="h1_heading">Hello</h1>
        <br></br>
        <h1 className="h1_heading">
          I'm <span className="heading">Mani Tej.</span>
        </h1>
        <h1 className="h1_heading"><span>I'm a </span></h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                `<span className = "profession">Full Stack Developer.</span>`
              )
              .pauseFor(300)
              .deleteChars(21)
              .typeString(
                `<span className = "profession">AIML Enthusiast.</span>`
              )
              .pauseFor(300)
              .deleteChars(21)
              .typeString(
                `<span className = "profession">Life Long Learner.</span>`
              )
              .pauseFor(1000)
              .start();
          }}
        />
        <CTA />
      </div>
      <HeaderSocials />
      <a
        href="#contact" // Update this to the target section's ID
        onClick={handleScroll}
        className="scroll__down"
      >
        Scroll Down
      </a>
      <div className="custom-shape-divider-bottom-1718619451">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
