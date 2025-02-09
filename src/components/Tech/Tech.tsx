import TechCategory from "./TechCategory";
import iconHTML from "../../assets/icons/icon-html.svg";
import iconCSS from "../../assets/icons/icon-css.svg";
import iconJavaScript from "../../assets/icons/icon-javascript.svg";
import iconTailwindCSS from "../../assets/icons/icon-tailwindcss.svg";
import iconReactJS from "../../assets/icons/icon-reactjs.svg";
import iconNodeJS from "../../assets/icons/icon-nodejs.svg";
import iconExpressJS from "../../assets/icons/icon-expressjs.svg";
import iconPostgreSQL from "../../assets/icons/icon-postgresql.svg";

const Tech = () => {
  const frontendTech = [
    { icon: iconHTML, name: "HTML" },
    { icon: iconCSS, name: "CSS" },
    { icon: iconJavaScript, name: "JavaScript" },
    { icon: iconTailwindCSS, name: "Tailwind CSS" },
    { icon: iconReactJS, name: "React.js" },
  ];

  const backendTech = [
    { icon: iconNodeJS, name: "Node.js" },
    { icon: iconExpressJS, name: "Express.js" },
  ];

  const databaseTech = [{ icon: iconPostgreSQL, name: "PostgreSQL" }];

  return (
    <section className="tech" id="tech">
      <h2>Technologies</h2>
      <div className="tech-wrapper">
        <TechCategory title="Frontend" tech={frontendTech} />
        <TechCategory title="Backend" tech={backendTech} />
        <TechCategory title="Database" tech={databaseTech} />
      </div>
    </section>
  );
};

export default Tech;
