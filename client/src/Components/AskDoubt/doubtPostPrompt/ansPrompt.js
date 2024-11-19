import React, { useState } from 'react'

const AnsPrompt = (props) => {


    const [ans,setAns] = useState("");


    // Ad  Answer API 
    const AddAnswer = async () => {
        try {
          // Construct the request body with the answer data
          const requestBody = { solution: ans }; // Include other fields as needed
    
          // Send a PUT request to update the answer
          console.log("new id",props.ans_id)
          const response = await fetch(
            `http://localhost:5000/postanswer/${props.ans_id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody), // Send the request body
            }
          );
    
          if (response.status === 200) {
            console.log("Successfully added the answer");
            // Clear the answer input field or perform any other necessary actions
            setAns("");
          } else {
            console.log("Failed to add the answer");
          }
        } catch (error) {
          console.error("An error occurred while adding the answer:", error);
        }


        props.setPopUpAns(false)
      };







    return (
        <div>
            <div id="prompt">
                <div className="prompt-div">
                    <h1>Answer the Query</h1>
                </div>
                <div className="prompt-div1">
                    <ul>
                        <h1>Tips for answering the Query</h1>
                        <li>Keep your answer to the point</li>
                        <li>
                            Please make sure you have proficiency on that topic
                            before answering
                        </li>
                        <li>
                            Don't use unncessary and illegal words while
                            answering,people may hurt
                        </li>
                    </ul>
                </div>
                <div className="prompt-div2">
                    <input
                        type="text"
                        placeholder="Enter your answer"
                        onChange={(e) => setAns(e.target.value)}
                        value={ans}
                    />
                </div>
                <div className="prompt-div3">
                    <button className="askdoubt-btn1" onClick={() => props.setPopUpAns(false)}>
                        cancel
                    </button>
                    <button className="askdoubt-btn2" onClick={AddAnswer}>
                        Add answer
                    </button>

                </div>
            </div>

        </div>
    )
}

export default AnsPrompt