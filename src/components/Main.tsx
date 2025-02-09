import iconHTML from "../assets/icons/icon-html.svg";
import iconCSS from "../assets/icons/icon-css.svg";
import iconJavaScript from "../assets/icons/icon-javascript.svg";
import iconTailwindCSS from "../assets/icons/icon-tailwindcss.svg";
import iconReactJS from "../assets/icons/icon-reactjs.svg";
import iconNodeJS from "../assets/icons/icon-nodejs.svg";
import iconExpressJS from "../assets/icons/icon-expressjs.svg";
import iconPostgreSQL from "../assets/icons/icon-postgresql.svg";

const Main = () => {
  return (
    <main className="main-content">
      <section className="about" id="about">
        <h2>About Me</h2>
        <div className="about-descriptions">
          <p>Hi! My name is Iqbal.</p>

          <p>
            I'm a Frontend Developer with experience in HTML, CSS, JavaScript,
            React.js, and Tailwind CSS.
          </p>

          <p>
            I also have a basic understanding of Node.js, Express.js, and
            PostgreSQL, allowing me to work on both frontend and backend when
            needed.
          </p>
        </div>
      </section>

      <section className="tech" id="tech">
        <h2>Technologies</h2>
        <div className="tech-wrapper">
          <article className="tech-category">
            <h3>Frontend</h3>
            <ul>
              <li>
                <img src={iconHTML} alt="html-icon" />
                <span> HTML </span>
              </li>

              <li>
                <img src={iconCSS} alt="css-icon" />
                <span>CSS</span>
              </li>

              <li>
                <img src={iconJavaScript} alt="javascript-icon" />
                <span>JavaScript</span>
              </li>

              <li>
                <img src={iconTailwindCSS} alt="icon-tailwindcss" />
                <span>Tailwind CSS</span>
              </li>

              <li>
                <img src={iconReactJS} alt="icon-reactjs" />
                <span>React.js</span>
              </li>
            </ul>
          </article>

          <article className="tech-category">
            <h3>Backend</h3>
            <ul>
              <li>
                <img src={iconNodeJS} alt="icon-nodejs" />
                <span>Node.js</span>
              </li>

              <li>
                <img src={iconExpressJS} alt="icon-expressjs" />
                <span>Express.js</span>
              </li>
            </ul>
          </article>

          <article className="tech-category">
            <h3>Database</h3>
            <ul>
              <li>
                <img src={iconPostgreSQL} alt="icon-postgresql" />
                <span>PostgreSQL</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Selected Projects</h2>
      </section>
    </main>
  );
};

export default Main;
