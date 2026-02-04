import TrueFocus from "./TrueFocus";

const Hero = () => {
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
      <TrueFocus
        sentence="Piyush Jangid"
        separator=" "
        blurAmount={6}
        borderColor="#5227FF"
        glowColor="rgba(82, 39, 255, 0.6)"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
    </section>
  );
};

export default Hero;
