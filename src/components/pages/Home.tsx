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
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* -------------------- HERO -------------------- */}
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
          <a href="#contact">
          <div className="home-right">
            <button
              className="home-contact-btn"
              onClick={() => {
                const target = document.querySelector(
                  "section.contacts-section",
                ) as HTMLElement | null;

                const scroller = document.querySelector(
                  ".scroll-stack-scroller",
                ) as HTMLElement | null;

                if (!target || !scroller) {
                  console.warn("Target or scroller not found");
                  return;
                }

                const top =
                  target.getBoundingClientRect().top + scroller.scrollTop;

                scroller.scrollTo({
                  top,
                  behavior: "smooth",
                });
              }}
            >
               Contact Me
            </button>
          </div>
          </a>
        </div>
      </section>

      {/* -------------------- MARQUEE -------------------- */}
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
            },
          ]}
          velocity={100}
          damping={50}
          stiffness={400}
          numCopies={8}
          velocityMapping={{ input: [0, 1000], output: [0, 5] }}
        />
      </section>

      <section style={{ height: "53vh" }} />

      {/* -------------------- ABOUT -------------------- */}
      <section className="about-section" id="about">
        <About />
      </section>

      {/* -------------------- SKILLS -------------------- */}
      <section className="skill-section" id="skills">
        <Skills />
      </section>

      {/* -------------------- PROJECTS -------------------- */}
      <section className="projects-section" id="projects">
        <Projects />
      </section>

      {/* -------------------- CONTACT (ONLY ID HERE) -------------------- */}
      <section className="contacts-section" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
