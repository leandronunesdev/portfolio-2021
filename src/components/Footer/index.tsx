import "./Footer.scss";
import Heart from "../../images/heart.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright © 2023 | Made with <img src={Heart} alt="amor" /> using React
      </p>
    </div>
  );
};

export default Footer;
