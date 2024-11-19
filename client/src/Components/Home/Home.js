import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sec1Light from "./section1-lightbg.png"
import Sec1Dark from "./section1-darkbg.png"

import "./Home.css";


import banner1 from "./Banner/banner1.png"
import banner2 from "./Banner/banner2.png"
import banner3 from "./Banner/banner3.png"
import banner4 from "./Banner/banner4.png"
import banner5 from "./Banner/banner5.png"

const Home = () => {

  let keyFeature =
    [
      {
        title: "Error Resolution",
        detail: "Navigate web dev challenges with our expert guidance, step-by-step instructions, and troubleshooting tips to enhance your coding skills."
      },
      {
        title: "Web Building",
        detail: "Craft your website journey with our guidance: from blogs to e-commerce, we provide essential roadmaps."
      },
      {
        detail: "Join our thriving community for web enthusiasts: discuss, seek advice, and collaborate in this ever-evolving field.",
        title: "Community Support"
      },
      {
        detail: "'learning is key feature to success' is our motto, so join our team and learn solving real world problems:we work on website, Application,AI-ML based services,Search Engine Optimizationn,Digital Marketing etc.",
        title: "Career"
      }
    ]
  const [mode, setMode] = useState(true);
  
  return (
    <div className="home-bg">
      <div>
        <div className="section-1" style={{ background: `url(${(mode) ? Sec1Light : Sec1Dark})` }}>

          <div className="header-container">

            <div className="Desc-top-heading">
              <h2>Welcome to our website</h2>
              <h6>single wesbite for multple works</h6>
            </div>


            <div className="header-theme-name">
              <h1>Lightning your</h1>
              <h1>Lightning your</h1>
            </div>
            <div className="header-theme-name">
              <h1>Learning & Career</h1>
              <h1>Learning & Career</h1>
            </div>


            

            <div className="Desc-top">


              we are a community for enhancing learning experience of students and empowering them
              your comprehensive solution for overcoming web developer errors and mastering
              the art of website creation.we are a community not only providing error resolution but career also,
            </div>
          </div>
        </div>
        <div className="section-2">

          {/*    */}
          <h1 style={{marginInline:"150px",fontFamily:"cursive",  padding:"10px" }}>What we provide</h1>
          <div className="key-features">

            {
              // keyFeature.map((feature) => (
              //   <div className="key-feature" key={feature.title}>
              //     <h3>{feature.title}</h3>
              //     <div>{feature.detail}</div>
              //   </div>
              // ))

            }
            <div className="key-feature">
              <img style={{ width: "500px", borderRadius: "10px", height: "100%" }} src={banner1} alt="banner" />
            </div>
            <div className="key-feature">
              <img style={{ width: "500px", borderRadius: "10px", height: "100%" }} src={banner2} alt="banner" />

            </div>
            <div className="key-feature">
              <img style={{ width: "500px", borderRadius: "10px", height: "100%" }} src={banner3} alt="banner" />
            </div>
            <div className="key-feature">
              <img style={{ width: "500px", borderRadius: "10px", height: "100%" }} src={banner4} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
