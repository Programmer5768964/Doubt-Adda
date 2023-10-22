import React, {useState} from "react";
import "./BuildWebsite.css";

const BuildWebsite = (props) => {
  const [BtnText,setBtnText] = useState("Send");
  const [BtnDeactive,setBtnDeactive] = useState(false);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setBtnText("Loading...");
    setBtnDeactive(true);
    let jsonData = {
      "Email":e.target[0].value,
      "ContactNo":e.target[1].value,
      "Desc":e.target[2].value
    };
    let res = await fetch("http://localhost:5000/sendEmail",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(jsonData),
    });
    res = await res.json();
    if(res.status==="ok"){
      alert("Successful send Message:)");
    }else{
      alert("Message not sent:(");
    }
    setBtnDeactive(false);
    setBtnText("Send");
  }
  return (
    <div className="oS">
      <button className="remove-btn" id="mobile-view-remove" onClick={()=>props.setpopUp(false)}><i className="fa fa-remove"></i></button>
      <div className="oS-main">
        <div className="oS-d1">
          <form className="email-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="input-email">Email:</label>
              <input type="email" id="input-email" placeholder="Enter your email" required/>
            </div>
            <div>
              <label htmlFor="input-subject">Contact No.:</label>
              <input type="number" name="phoneno" id="input-mobile" placeholder="Enter you mobile no..." required/>
            </div>
            <div id="email-desc">
              <label htmlFor="input-detail">Description:</label><br/>
              <textarea name="emailDesc" id="input-desc" placeholder="Enter you description about website..." required></textarea>
            </div>
            <button disabled={BtnDeactive}>{BtnText}</button>
          </form>
        </div>
        <div className="oS-d2">
          <button type="submit" className="remove-btn" onClick={()=>props.setpopUp(false)}><i className="fa fa-remove"></i></button>
        </div>
      </div>
    </div>
  );
};

export default BuildWebsite;
