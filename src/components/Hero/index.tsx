import profile_pic from "../../images/profile-picture_square.jpg";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-box">
      <div className="hero-image responsive">
        <img src={profile_pic} alt="Leandro" />
      </div>
      <div className="hero-text">
        <h1>
          Leandro Nunes,
          <br /> Frontend Engineer
        </h1>
        <p>
          Frontend engineer with solid experience in national and international
          projects, having worked in companies from different fields, such as
          fintechs, consulting and data. I contributed to the development of
          applications through clean and scalable codes, focusing on React.js
          and its entire ecosystem.
        </p>
        <a
          href="https://github.com/leandronunesdev/curriculo/raw/master/LEANDRO_NUNES_EN.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-styled">Download Curriculum</button>
        </a>
      </div>
      <div className="hero-image desktop">
        <img src={profile_pic} alt="Leandro" />
      </div>
    </div>
  );
};

export default Hero;
