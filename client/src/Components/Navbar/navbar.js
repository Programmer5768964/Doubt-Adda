import React,{useState} from 'react'

import toggleLight from "./toggleImage/lightToggle.png";
import toggleDark from "./toggleImage/darkToggle.png";
import { Link } from 'react-router-dom';
import BuildWebsite from "./BuildWebsite/BuildWebsite";
import "./navbar.css"




const Navbar = () => {
    const [mode, setMode] = useState(true);
    const [popUp, setpopUp] = useState(false);
  return (
    <div>
         <nav>
            <h1 style={{ color: `${(mode) ? "black" : "white"}` }}>BugBuster</h1>
            
            <Link className="btn" to="/aboutus">About</Link>
            <Link  style={{color:"black"}} to="/askyourdoubt"><button>Doubts</button></Link>
              <button className='btn' onClick={() => { setpopUp(!popUp) }} >Service</button>
              <Link to="/findcareer"><button className='btn'>Career</button></Link>
              <Link to="/councelling"><button className='btn'>Councelling</button></Link>
          
            <div onClick={() => { setMode(!mode) }} style={{ backgroundImage: `url(${(mode) ? toggleLight : toggleDark})`, backgroundColor: `${(mode) ? "#efefef" : "#1e1e1e"}` }}></div>
        
          </nav>
          {
        (popUp) ?
          <div className="popUp">
            <BuildWebsite setpopUp={setpopUp} mode={mode} />
          </div> : <></>
      }
    </div>
  )
}

export default Navbar