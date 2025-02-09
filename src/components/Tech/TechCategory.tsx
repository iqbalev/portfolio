import { TechCategoryProps } from "../../types";

const TechCategory: React.FC<TechCategoryProps> = ({ title, tech }) => {
  return (
    <article className="tech-category">
      <h3>{title}</h3>
      <ul>
        {tech.map(({ icon, name }, index) => (
          <li key={index}>
            <img src={icon} alt="" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TechCategory;
