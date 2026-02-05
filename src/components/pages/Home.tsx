import { useEffect } from "react";
import TiltedCard from "../ui/TiltedCard";
import CurvedLoop from "../ui/CurvedLoop";
import avatar from "../../assets/avatar.png";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="home" className="home">
      <h1 className="home-title">
        Hi, I’m <span>Piyush</span>
      </h1>

      <div className="home-layout">
        <div className="home-left">
          <p className="home-description">
            I design and build modern, interactive web experiences using
            <strong>
              {" "}
              React, TypeScript, animations and creative UI systems
            </strong>
            .
          </p>
        </div>

        <div className="home-avatar">
          <TiltedCard
            imageSrc={avatar}
            containerHeight="490px"
            containerWidth="490px"
            imageHeight="490px"
            imageWidth="490px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
        <div className="home-right">
          <button
            className="home-contact-btn"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={2}
        curveAmount={200}
        direction="right"
        interactive
        className="curved-loop-text"
      />
    </section>
  );
};

export default Home;
