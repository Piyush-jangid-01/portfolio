import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  type PanInfo
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./Stack.css";

/* ---------------- Card Rotate ---------------- */

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false
}: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [18, -18]);
  const rotateY = useTransform(x, [-120, 120], [-18, 18]);

  function handleDragEnd(
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return <div className="card-rotate-disabled">{children}</div>;
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.55}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Stack ---------------- */

interface StackProps {
  cards?: React.ReactNode[];
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

export default function Stack({
  cards = [],
  sensitivity = 180,
  sendToBackOnClick = true,
  animationConfig = { stiffness: 260, damping: 22 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}: StackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* -------- Scroll animation -------- */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.3 1", "0.8 1"]
  });

  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const containerScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const containerY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  /* -------- Mobile detection -------- */

  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  /* -------- Stack state -------- */

  const [stack, setStack] = useState(
    cards.map((content, i) => ({ id: i + 1, content }))
  );

  useEffect(() => {
    setStack(cards.map((content, i) => ({ id: i + 1, content })));
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const next = [...prev];
      const index = next.findIndex((c) => c.id === id);
      const [card] = next.splice(index, 1);
      next.unshift(card);
      return next;
    });
  };

  /* -------- Autoplay -------- */

  useEffect(() => {
    if (!autoplay || stack.length < 2 || isPaused) return;

    const interval = setInterval(() => {
      sendToBack(stack[stack.length - 1].id);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, stack, isPaused]);

  /* -------- Render -------- */

  return (
    <motion.div
      ref={containerRef}
      className="stack-container"
      style={{
        opacity: containerOpacity,
        scale: containerScale,
        y: containerY
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const depth = stack.length - index - 1;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1 - depth * 0.04,
                rotateZ: depth * 3.2
              }}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
                delay: index * 0.05
              }}
              style={{
                transformOrigin: "90% 90%"
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </motion.div>
  );
}
