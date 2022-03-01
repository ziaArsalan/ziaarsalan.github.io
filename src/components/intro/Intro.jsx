import "./intro.css";
import Me from "../../img/me.png";
import ParticleAnimation from "../particle-animation/particle-animation";
import Title from "../../img/Title";
import TitleLight from "../../img/TitleLight";
import Social from "../social/Social"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name d-none d-md-block">Zia Arsalan</h1>
          <div className="d-block d-md-none"><ParticleAnimation Image={theme.state.darkMode ? TitleLight : Title } /></div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Career Counsler</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">ChatBots Builder</div>
              <div className="i-title-item">Tech Student &</div>
              <div className="i-title-item">Teacher</div>
              {/* <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MEAN Stack</div>
              <div className="i-title-item">MERN Stack</div>
              <div className="i-title-item">DevOps</div>
              <div className="i-title-item">CI/CD</div>
              <div className="i-title-item">ChatBots</div> */}
              {/* <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div> */}
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <Social />
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={theme.state.darkMode ? "white" : "black"}
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
