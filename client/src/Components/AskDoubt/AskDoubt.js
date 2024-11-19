import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DoubtPrompt from "./doubtPostPrompt/doubtPrompt";

import AnsPrompt from "./doubtPostPrompt/ansPrompt";



const AskDoubt = () => {
  // const [isPromptDisplayed, setIsPromptDisplayed] = useState(false);
  const [buttonActionID, setbuttonActionID] = useState(null);

  const [popUpDoubt, setPopUpDoubt] = useState(false);
  const [popUpAns, setPopUpAns] = useState(false);
  const [doubtsData, setDoubtsData] = useState([]);
  const [show, setShow] = useState(false);
  const [qnabox, setQnabox] = useState(true);
  const [handRaiseCounts, setHandRaiseCounts] = useState({});
  const [ques, setQues] = useState("");


  const [ans_id, setAns_id] = useState(null);
  const [ansTheQuestion, setAnswerTheQuestion] = useState([]);
  const [answerDiv, setAnswerDiv] = useState(false);

  const getDoubtsDetails = async () => {
    try {
      let response = await fetch(`http://localhost:5000/viewdoubts`);
      if (response.status === 200) {
        const data = await response.json();
        // console.log(data.soluti);

        // Update doubtsData with the new data
        setDoubtsData(data);

        // Update handRaiseCounts based on the new data
        const newHandRaiseCounts = {};
        data.forEach((doubt) => {
          newHandRaiseCounts[doubt._id] = doubt.handRaise;
        });
        setHandRaiseCounts(newHandRaiseCounts);
      } else {
        console.log(
          "API unable to fetch the data with status code ",
          response.status
        );
      }
    } catch (error) {
      console.log("An error occurred while fetching the data", error);
    }
  };

  const increseRaiseCount = async (value) => {
    let id_val = value;
    console.log(id_val);

    try {
      let data = await fetch(`http://localhost:5000/handraise/${id_val}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await data.json();
      if (result.status === 200) {
        // Update the handRaiseCounts state with the new value
        setHandRaiseCounts((prevCounts) => ({
          ...prevCounts,
          [id_val]: prevCounts[id_val] + 1,
        }));
        console.log("Successfully updated");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("An error occurred while updating handRaise count:", error);
    }
  };

  useEffect(() => {
    getDoubtsDetails();

    const refreshInterval = setInterval(() => {
      getDoubtsDetails();
    }, 5000); // Refresh every 5 seconds

    return () => {
      clearInterval(refreshInterval); // Clear the interval on component unmount
    };
  }, []);





  const handleAnswerButtonClick = (id) => {
    setAns_id(id);
    // enableAnswerInput(id);
    setPopUpAns(!popUpAns);



  };




  const get_My_Answer = async (answer_id) => {
    let result = await fetch(`http://localhost:5000/answer/${answer_id}`);
    if (result.status === 200) {
      // console.log(result)
      const my_ans = await result.json();
      // console.log(my_ans)
      setAnswerTheQuestion(my_ans);
      // console.log(my_ans);
      console.log("sujeet", ansTheQuestion.id)
      setbuttonActionID(answer_id);

    }
  };


  // creating a small func for handling button action 
  const handleButtonToggle = () => {
    setbuttonActionID(null)
    setAnswerTheQuestion([]);
  }


  // enableAnswerInput();

  return (
    <section className="askdoubt-section">
      <div className="flex-container">
        <div className="left-container">
          <div className="qna">
            <h1>Q&A</h1>
            <h1>Q&A</h1>
          </div>




          <div className="qna">
            <h1>Q&A</h1>
            <h1>Q&A</h1>
          </div>






          <div className="qna-box" >

            <input
              className="input-box"
              type="text"
              placeholder="ask your doubt..."
              onClick={() => setPopUpDoubt(!popUpDoubt)}
            />

          </div>











          {
            (popUpDoubt) ?
              <div>
                <DoubtPrompt setPopUpDoubt={setPopUpDoubt} />
              </div> : <></>


          }
          {
            (popUpAns) ?
              <div>
                <AnsPrompt setPopUpAns={setPopUpAns} ans_id={ans_id} />


              </div> : <></>

          }




          {/* </div> */}
          <div className="posted-questions-bg">
            <div className="doubts-list">
              {doubtsData.map((singleData, index) => {
                return (
                  <div key={singleData._id}>
                    <div className="doubt-box">
                      <h4>{singleData.doubt}</h4>
                    </div>


                    {

                      (ansTheQuestion.id === singleData._id) ?
                        <div>
                          {/* {console.log("hello")} */}
                          {ansTheQuestion.answers.map((singleVal, index) => {
                            if (singleVal.ans) {
                              return (
                                <p key={index}>
                                  Ans {index}-->{singleVal.ans}
                                </p>
                              );
                            }
                          })}
                        </div>
                        :
                        ""
                    }


                    {console.log(ansTheQuestion.id)}

                    {


                      (buttonActionID === singleData._id) ?
                        <button
                          style={{ margin: "10px", width: "80px", height: "30px", borderRadius: "15px", padding: "5px", border: "none", backgroundColor: "#242F42", color: "white" }}
                          onClick={() => handleButtonToggle()}
                        >
                          hide
                        </button>



                        :
                        <button
                          style={{ margin: "10px", width: "80px", height: "30px", borderRadius: "15px", padding: "5px", border: "none", backgroundColor: "#242F42", color: "white" }}
                          onClick={() => get_My_Answer(singleData._id)}
                        >
                          Discussion
                        </button>


                    }
                    {
                      console.log(ansTheQuestion.id)
                    }



                  </div>
                );
              })}
            </div>
            <div className="answer-list"></div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-container-contents your-section">
            <h1>
              <Link>+ Add Your section</Link>
            </h1>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>HTML</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>CSS</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>JavaScript</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>Node.js</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>React.js</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>mongoDB</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>fireBase</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>Next.js</Link>
            </h2>
          </div>
          <div className="right-container-contents">
            <h2>
              <Link>Error Handling</Link>
            </h2>
            <h6>Web development</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskDoubt;
