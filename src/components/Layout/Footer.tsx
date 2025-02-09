import iconGitHub from "../../assets/icons/icon-github.svg";
import iconGmail from "../../assets/icons/icon-gmail.svg";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <p>Let's connect to build something, or if you want to collaborate!</p>

        <div className="social-links">
          <a href="https://github.com/iqbalev">
            <img src={iconGitHub} alt="icon-github" />
          </a>

          <a href="mailto:muhammadiqbal.090300@gmail.com">
            <img src={iconGmail} alt="icon-gmail" />
          </a>
        </div>
      </div>

      <p>&copy; Muhammad Iqbal. 2025.</p>
    </footer>
  );
};

export default Footer;
