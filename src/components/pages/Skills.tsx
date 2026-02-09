import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import MagicBento from "../ui/MagicBento";
import "./Skills.css";

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  /* ---- SAME FEEL AS BLOBS ---- */
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0.2, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });

  const rawY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  return (
    <section ref={ref} className="skills-section">
      <motion.div
        className="mag"
        style={{
          opacity,
          y,
          scale,
        }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect
          spotlightRadius={200}
          particleCount={300}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
