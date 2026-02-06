import React, {
  useRef,
  useLayoutEffect,
  useState,
} from "react";
import type { CSSProperties } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import "./ScrollVelocity.css";

/* ---------------- TYPES ---------------- */

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

type ScrollItem =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "image";
      images: string[];
      imageWidth?: number;
      imageHeight?: number;
    };

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  items: ScrollItem[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

/* ---------------- HOOK ---------------- */

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);

  return width;
}

/* ---------------- COMPONENT ---------------- */

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  items,
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  const VelocityItem = ({
    item,
    direction,
  }: {
    item: ScrollItem;
    direction: number;
  }) => {
    const baseX = useMotionValue(0);

    const { scrollY } = useScroll(
      scrollContainerRef ? { container: scrollContainerRef } : {}
    );

    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping,
      stiffness,
    });

    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      { clamp: false }
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const width = useElementWidth(wrapperRef);

    const x = useTransform(baseX, (v) =>
      width ? `${((v % width) + width) % width * -1}px` : "0px"
    );

    const y = useTransform(velocityFactor, [-5, 5], [-30, 30]);

    useAnimationFrame((_, delta) => {
      let move = direction * velocity * (delta / 1000);
      move += move * velocityFactor.get();
      baseX.set(baseX.get() + move);
    });

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          ref={wrapperRef}
          className={scrollerClassName}
          style={{
            x,
            y,
            display: "flex",
            gap: "1rem",
            whiteSpace: "nowrap",
            ...scrollerStyle,
          }}
        >
          {Array.from({ length: numCopies }).map((_, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              {item.type === "text" && (
                <span className={className}>{item.content}&nbsp;</span>
              )}

              {item.type === "image" &&
                item.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    style={{
                      width: item.imageWidth ?? 120,
                      height: item.imageHeight ?? 80,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                ))}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section>
      {items.map((item, i) => (
        <VelocityItem
          key={i}
          item={item}
          direction={i % 2 === 0 ? 1 : -1}
        />
      ))}
    </section>
  );
};

export default ScrollVelocity;
