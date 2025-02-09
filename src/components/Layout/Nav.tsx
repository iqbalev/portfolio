import NavList from "./NavList";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavList title="About" link="#about" />
        <NavList title="Technologies" link="#tech" />
        <NavList title="Projects" link="#projects" />
      </ul>
    </nav>
  );
};

export default Nav;
