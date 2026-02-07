import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import blob3 from "../../assets/blob3.png";
import blob4 from "../../assets/blob4.png";

import "./About.css";

const About = () => {
  const ref = useRef(null);

  /* -------------------- SCROLL PROGRESS -------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const progress = scrollYProgress;

  /* -------------------- POSITION MOTION -------------------- */
  const blob1X = useTransform(progress, [0, 1], ["180vw", "75vw"]);
  const blob1Y = useTransform(progress, [0, 1], ["80vh", "65vh"]);

  const blob2X = useTransform(progress, [0, 1], ["-30vw", "5vw"]);
  const blob2Y = useTransform(progress, [0, 1], ["90vh", "60vh"]);

  const blob3X = useTransform(progress, [0, 1], ["-120vw", "-6vw"]);
  const blob3Y = useTransform(progress, [0, 1], ["-120vh", "0vh"]);

  const blob4X = useTransform(progress, [0, 1], ["120vw", "75vw"]);
  const blob4Y = useTransform(progress, [0, 1], ["-30vh", "-10vh"]);

  /* -------------------- FADE IN + OUT (REVERSIBLE) -------------------- */
  const rawOpacity = useTransform(
    progress,
    [0, 0.1, 0.35, 0.55, 0.75],
    [0, 0, 0.75, 1, 1],
  );

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 22,
    mass: 1.2,
  });

  /* -------------------- SCALE (MATCHED WITH FADE) -------------------- */
  const rawScale = useTransform(
    progress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.75],
    [0.88, 0.9, 0.94, 0.97, 0.99, 1],
  );

  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section ref={ref} className="about-section" id="about">
      <motion.img
        src={blob1}
        className="blob blob1"
        alt=""
        aria-hidden="true"
        style={{ x: blob1X, y: blob1Y, opacity, scale, rotate: -10 }}
      />

      <motion.img
        src={blob2}
        className="blob blob2"
        alt=""
        aria-hidden="true"
        style={{ x: blob2X, y: blob2Y, opacity, scale, rotate: 17 }}
      />

      <motion.img
        src={blob3}
        className="blob blob3"
        alt=""
        aria-hidden="true"
        style={{ x: blob3X, y: blob3Y, opacity, scale, rotate: 10 }}
      />

      <motion.img
        src={blob4}
        className="blob blob4"
        alt=""
        aria-hidden="true"
        style={{ x: blob4X, y: blob4Y, opacity, scale, rotate: -23 }}
      />
    </section>
  );
};

export default About;
