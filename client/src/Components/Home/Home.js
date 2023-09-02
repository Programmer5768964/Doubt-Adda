import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  let keyFeature = 
  [
    {
      title:"Error Resolution",
      detail:"Navigate web dev challenges with our expert guidance, step-by-step instructions, and troubleshooting tips to enhance your coding skills."
    },
    {
      title:"Web Building",
      detail:"Craft your website journey with our guidance: from blogs to e-commerce, we provide essential roadmaps."
    },
    {
      detail:"Join our thriving community for web enthusiasts: discuss, seek advice, and collaborate in this ever-evolving field.",
      title:"Community Support"
    }
  ]

  return (
    <div>
      <div className="section-1">
        <nav>
          <h1>BugBuster</h1>
          <Link to="/aboutus">Know us</Link>
        </nav>
        <div className="header-container">
          <div className="header-theme-name">
            <h1>Lightning your</h1>
            <h1>Lightning your</h1>
          </div>
          <div className="header-theme-name">
            <h1>Learning</h1>
            <h1>Learning</h1>
          </div>
          <div className="header-container-btn">
            <button>Ask your Doubt</button>
            <button>Order your site</button>
          </div>
          <div className="Desc-top">
            Welcome to our website, your comprehensive solution for overcoming web developer errors and mastering
            the art of website creation.
          </div>
        </div>
      </div>
      <div className="section-2">
        <svg xlink="http://www.w3.org/1999/xlink" id="wave" style={{ "transform": "rotate(180deg)", "transition": "0.3s" }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(239, 239, 239, 1)" offset="0%" /><stop stop-color="rgba(239, 239, 239, 1)" offset="100%" /></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,50L34.3,50C68.6,50,137,50,206,55C274.3,60,343,70,411,70C480,70,549,60,617,48.3C685.7,37,754,23,823,25C891.4,27,960,43,1029,46.7C1097.1,50,1166,40,1234,38.3C1302.9,37,1371,43,1440,40C1508.6,37,1577,23,1646,23.3C1714.3,23,1783,37,1851,36.7C1920,37,1989,23,2057,28.3C2125.7,33,2194,57,2263,61.7C2331.4,67,2400,53,2469,53.3C2537.1,53,2606,67,2674,68.3C2742.9,70,2811,60,2880,46.7C2948.6,33,3017,17,3086,16.7C3154.3,17,3223,33,3291,41.7C3360,50,3429,50,3497,55C3565.7,60,3634,70,3703,71.7C3771.4,73,3840,67,3909,53.3C3977.1,40,4046,20,4114,16.7C4182.9,13,4251,27,4320,30C4388.6,33,4457,27,4526,25C4594.3,23,4663,27,4731,36.7C4800,47,4869,63,4903,71.7L4937.1,80L4937.1,100L4902.9,100C4868.6,100,4800,100,4731,100C4662.9,100,4594,100,4526,100C4457.1,100,4389,100,4320,100C4251.4,100,4183,100,4114,100C4045.7,100,3977,100,3909,100C3840,100,3771,100,3703,100C3634.3,100,3566,100,3497,100C3428.6,100,3360,100,3291,100C3222.9,100,3154,100,3086,100C3017.1,100,2949,100,2880,100C2811.4,100,2743,100,2674,100C2605.7,100,2537,100,2469,100C2400,100,2331,100,2263,100C2194.3,100,2126,100,2057,100C1988.6,100,1920,100,1851,100C1782.9,100,1714,100,1646,100C1577.1,100,1509,100,1440,100C1371.4,100,1303,100,1234,100C1165.7,100,1097,100,1029,100C960,100,891,100,823,100C754.3,100,686,100,617,100C548.6,100,480,100,411,100C342.9,100,274,100,206,100C137.1,100,69,100,34,100L0,100Z" /></svg>
        <h1 style={{textAlign:"center"}}>Key Feature:</h1>
        <div className="key-features">
          
          {
            keyFeature.map((feature)=>(
              <div className="key-feature" key={feature.title}>
                <h3>{feature.title}</h3>
                <div>{feature.detail}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
