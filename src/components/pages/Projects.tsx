import "./Projects.css";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";
import productivityHubImg from "../../assets/productivity hub.png";
import interviewMateImg from "../../assets/interviewmate.png";
import ibikiImg from "../../assets/ibiki.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <ScrollStack itemDistance={120} baseScale={0.9} blurAmount={2}>
        {/* FLOWDESK */}
        {/* <ScrollStackItem>
          <div className="project-card purple">
            <div className="project-content">
              <span className="project-tag">Full Stack</span>
              <h2>FlowDesk</h2>

              <div className="tech">
                <p className="project-desc">
                  A structured, scalable re-implementation of YojanaDesk focused
                  on clean architecture and real-world usability.
                </p>

                <ul className="project-points">
                  <li>Modular React architecture</li>
                  <li>REST APIs with Node & Express</li>
                  <li>Authentication & MongoDB models</li>
                </ul>

                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

                <div className="project-links">
                  <a href="#">GitHub</a>
                  <a href="#">Live</a>
                </div>
              </div>
            </div>

            <div className="project-media">
              <img src={image3} alt="FlowDesk Screenshot" />
            </div>
          </div>
        </ScrollStackItem> */}

        {/* PRODUCTIVITY HUB */}
        <ScrollStackItem>
          <div className="project-card purple">
            <div className="project-content">
              <span className="project-tag">Frontend</span>

              <h2>Productivity Hub</h2>

              <div className="tech">
                <p className="project-desc">
                  A multi-tool productivity dashboard built with pure HTML, CSS,
                  and JavaScript, focused on clean UI and real-world daily
                  utilities.
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
                  <a
                    href="https://lnkd.in/g9d9M7Kf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://lnkd.in/g-P-7jUk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            <div className="project-media">
              {/* Optional screenshot */}
              <img src={productivityHubImg} alt="Productivity Hub Screenshot" />
            </div>
          </div>
        </ScrollStackItem>

        {/* UI DASHBOARD */}
        <ScrollStackItem>
          <div className="project-card green">
            <div className="project-content">
              <span className="project-tag">AI · Frontend</span>

              <h2>InterviewMate</h2>

              <div className="tech">
                <p className="project-desc">
                  An AI-powered interview practice platform that simulates real
                  interview scenarios and provides instant feedback for
                  improvement.
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
                  <a
                    href="https://lnkd.in/gHDzCtAf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-media">
              <img src={interviewMateImg} alt="InterviewMate Screenshot" />
            </div>
          </div>
        </ScrollStackItem>

        {/* CLOTHING BRAND */}
        <ScrollStackItem>
          <div className="project-card orange">
            <div className="project-content">
              <span className="project-tag">Branding · Frontend</span>

              <h2>Ibiki — Clothing Brand</h2>

              <div className="tech">
                <p className="project-desc">
                  A modern fashion landing page built to showcase bold visuals,
                  clean layouts, and a strong brand identity.
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
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>

            <div className="project-media">
              <img src={ibikiImg} alt="Ibiki Clothing Brand Screenshot" />
            </div>
          </div>
        </ScrollStackItem>

        {/* ALL PROJECTS */}
        <ScrollStackItem>
          <div className="project-card final">
            <div className="project-content">
              <h2>All Projects</h2>
              <p>
                A complete collection of my projects, experiments and learning
                work.
              </p>

              <a className="all-projects-btn" href="https://github.com/Piyush-jangid-01" target="_blank" rel="noopener noreferrer">
                View GitHub →
              </a>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default Projects;
