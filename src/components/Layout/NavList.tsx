import { NavListProps } from "../../types";

const NavList: React.FC<NavListProps> = ({ title, link }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

export default NavList;
