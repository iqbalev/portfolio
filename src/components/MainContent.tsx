import About from "./About/About";
import Tech from "./Tech/Tech";
import Projects from "./Projects/Projects";

const MainContent = () => {
  return (
    <main className="main-content">
      <About />
      <Tech />
      <Projects />
    </main>
  );
};

export default MainContent;
