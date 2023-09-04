import React from "react";
import myPic from "../../Images/pic1.jpg";
import sumitsPic from "../../Images/pic2.jpg";
import Typed from "react-typed";
import { plus } from "react-icons";
import { useNavigate } from "react-router-dom";

var typed = new Typed(".auto-input", {});

const KnowUs = () => {
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };
  return (
    <section id="aboutus-section">
      <div className="page-name">
        <h1>Know us</h1>
        <h1>Know us</h1>

        <button type="button" className="revert-home-btn" onClick={HomePage}>
          Home
        </button>
      </div>

      <div className="images-div">
        <div className="portfolio-image">
          <img src={myPic} alt="Sujeet Sharma" />
        </div>
        <div className="plus">
          <h1>+</h1>
        </div>
        <div className="portfolio-image">
          <img src={sumitsPic} alt="Sumit Pathak" />
        </div>
      </div>

      <div className="description">
        <div className="introduction">
          <h1>
            Hey Guys!&nbsp;
            <Typed
              strings={[" we are Web-Developer.", " and we are programmer."]}
              typeSpeed={50}
              backSpeed={50}
              loop
              className="auto-input"
            />
          </h1>
          <p>
            Hello guys! This website is developed for raising the skills of
            Students who have a great interest in web-Development. website is
            developed by MR. Sujeet sharma & Mr. sumit Pathak. we are Students
            and just wanted to make a huge community of Students where they can
            help each other to imrove themseleves We have done alot of web
            developed projects individually and also in collaboration.So, Here
            we are providing the apportunity to get your own website ready too.
          </p>
        </div>
      </div>
      <div className="wave-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8338ec"
            fill-opacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,229.3C640,245,800,267,960,234.7C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="yellow-bg"></div>

      <div className="portfolio-dwnld-btn">
        <button className="btn1">Sujeet's portfolio</button>
        <button className="btn2">Sumit's portfolio</button>
      </div>
      {/* <footer className="footer">
        <div className="s1-p2">
          <h3>Made By</h3>
        </div>
        <div className="s1-p3">
          <h1>Sujeet & Sumit</h1>
        </div>
      </footer> */}
    </section>
  );
};

export default KnowUs;
