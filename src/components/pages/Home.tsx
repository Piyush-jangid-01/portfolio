import { useEffect } from "react";
import TiltedCard from "../ui/TiltedCard";
import ScrollVelocity from "../ui/ScrollVelocity";
import avatar from "../../assets/avatar.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";  
import "./Home.css";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
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
      </section>
      <section className="sec1">
        <ScrollVelocity
          items={[
            { type: "text", content: "DESIGN ✦ MOTION ✦ CODE ✦ EXPERIENCE ✦" },
            { type: "text", content: "DESIGN ✦ MOTION ✦ CODE ✦ EXPERIENCE ✦" },
            {
              type: "image",
              images: [image1, image2, image3, image4],
              imageWidth: 350,
              imageHeight: 230,
            }
          ]}
          velocity={100}
          damping={50}
          stiffness={400}
          numCopies={8}
          velocityMapping={{ input: [0, 1000], output: [0, 5] }}
        />
      </section>
      <section style={{height: "53vh"}}></section>
      <section  className="about-section" id="about">
        <About />
      </section>
      <section className="skill-section" id="skills">
         <Skills />
      </section>
       
    </>
  );
};

export default Home;
