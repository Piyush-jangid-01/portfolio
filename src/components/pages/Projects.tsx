import "./Projects.css";
import Stack from "../ui/Stack";

import productivityHubImg from "../../assets/productivity hub.png";
import interviewMateImg from "../../assets/interviewmate.png";
import ibikiImg from "../../assets/ibiki.png";

const Projects = () => {
  const cards = [
    <div className="project-card purple">
      <div className="project-content">
        <span className="project-tag">Frontend</span>

        <h2>Productivity Hub</h2>

        <div className="tech">
          <p className="project-desc">
            A multi-tool productivity dashboard built with pure HTML, CSS, and
            JavaScript, focused on clean UI and real-world daily utilities.
          </p>

          <ul className="project-points">
            <li>Flip clock, Pomodoro timer & unified dashboard</li>
            <li>To-do list with local storage based state</li>
            <li>News feed, expense tracker & color generator</li>
          </ul>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="https://lnkd.in/g9d9M7Kf" target="_blank">
              GitHub
            </a>
            <a href="https://lnkd.in/g-P-7jUk" target="_blank">
              Live
            </a>
          </div>
        </div>
      </div>

      <div className="project-media">
        <img src={productivityHubImg} alt="Productivity Hub" />
      </div>
    </div>,

    <div className="project-card green">
      <div className="project-content">
        <span className="project-tag">AI · Frontend</span>

        <h2>InterviewMate</h2>

        <div className="tech">
          <p className="project-desc">
            An AI-powered interview practice platform that simulates real
            interview scenarios and provides instant feedback.
          </p>

          <ul className="project-points">
            <li>Role-based interview question generation</li>
            <li>Real-time AI feedback using Gemini API</li>
            <li>Interview history saved locally</li>
          </ul>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Gemini API</span>
          </div>

          <div className="project-links">
            <a href="https://lnkd.in/gHDzCtAf" target="_blank">
              Live
            </a>
            <a href="#" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="project-media">
        <img src={interviewMateImg} alt="InterviewMate" />
      </div>
    </div>,

    <div className="project-card orange">
      <div className="project-content">
        <span className="project-tag">Branding · Frontend</span>

        <h2>Ibiki — Clothing Brand</h2>

        <div className="tech">
          <p className="project-desc">
            A modern fashion landing page built to showcase bold visuals, clean
            layouts, and strong brand identity.
          </p>

          <ul className="project-points">
            <li>Multi-section layout with brand-first design</li>
            <li>CSS-only interactions and hover effects</li>
            <li>Fully responsive using Flexbox & Grid</li>
          </ul>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>Google Fonts</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank">
              GitHub
            </a>
            <a href="#" target="_blank">
              Live
            </a>
          </div>
        </div>
      </div>

      <div className="project-media">
        <img src={ibikiImg} alt="Ibiki" />
      </div>
    </div>,
  ];

  return (
    <section className="projects-section" id="projects">
      <Stack
        sensitivity={200}
        sendToBackOnClick={true}
        cards={cards}
        autoplay={false}
      />
    </section>
  );
};

export default Projects;
