import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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
        </div>
      </div>
      <div className="section-2">
        <div className="Desc-top">
          Welcome to our website, your comprehensive solution for overcoming web developer errors and mastering
          the art of website creation.
        </div>
        <div>
          <h1>Key Feature:</h1>
          <div className="key-features">
            <div className="key-feature">
              <h3>Error Resolution:</h3>
              <div>Web development can be a maze of challenges, but fear not – we're your trusted guide
                to navigate through it. With our detailed, step-by-step instructions
                and expert troubleshooting tips, you'll quickly diagnose and resolve issues, bolstering your coding
                prowess.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
