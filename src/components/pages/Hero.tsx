import TrueFocus from "../ui/TrueFocus";
import BubbleMenu from "../ui/BubbleMenu";

type HeroProps = {
  onEnter: () => void;
};

const Hero = ({ onEnter }: HeroProps) => {
  const items = [
    {
      label: "home",
      href: "/home#home",
      ariaLabel: "Home",
      rotation: -8,
      onClick: onEnter,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "/home#about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "/home#projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "skills",
      href: "/home#skills",
      ariaLabel: "Skills",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "/home#contact",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>Contact Me!</span>}
        items={items}
        menuBg="#ffffff"
        menuContentColor="#111111"
      />

      <TrueFocus
        sentence="Piyush Jangid"
        blurAmount={8}
        borderColor="#5227FF"
        glowColor="rgba(82, 39, 255, 0.6)"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </section>
  );
};

export default Hero;
