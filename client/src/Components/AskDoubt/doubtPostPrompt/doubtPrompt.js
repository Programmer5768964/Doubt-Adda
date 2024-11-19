import React, { useState } from 'react'
import './doubtPrompt.css'


const DoubtPrompt = (props) => {
  const [ques, setQues] = useState("");

  



  // Add quetions API 
  const AddQuestion = async () => {
    console.log(ques);
    let post_ack = await fetch(`http://localhost:5000/postquestion`, {
      method: "post",
      body: JSON.stringify({ doubt: ques }),
      headers: { "Content-Type": "application/json" },
    });
    post_ack = await post_ack.json();
    if (post_ack.status === 200) {
      console.log("API is working on status ", post_ack.status);
    } else {
      console.log("API responde with status ", post_ack.status);
    }

    props.setPopUpDoubt(false)

  };

 

  return (

    <div >
      
      <div className="prompt">

        <div className="prompt-div">
          <h1>Ask Your Doubt</h1>
        </div>

        
        {/* <div className="prompt-div">
          <h1>Answer the Query</h1>
        </div> */}
        
        <div className="prompt-div1">
          <ul>
            <h1>Tips for getting satisfactory answer quickly</h1>
            <li>Keep your query short and to the point</li>
            <li>
              Make sure your Qestion is not being asked frequently
            </li>
            <li>Double check grammer and spelling</li>
          </ul>
        </div>
        

        <div className="prompt-div2">
       
          <input
            type="text"
            placeholder="ask your query here..."
            onChange={(e) => setQues(e.target.value)}
            value={ques}
          />
      
        </div>
        <div className="prompt-div3">
          <button className="askdoubt-btn1" onClick={() => props.setPopUpDoubt(false)}>
            cancel
          </button>
        
          <button className="askdoubt-btn2" onClick={AddQuestion}>
            Add question
          </button>
       
        </div>
      </div>
  
    </div>

  )
}

export default DoubtPrompt;