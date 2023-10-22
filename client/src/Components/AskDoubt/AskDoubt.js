import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AskDoubt = () => {
  const [doubtsData, setDoubtsData] = useState([]);
  const [show, setShow] = useState(false);
  const [qnabox, setQnabox] = useState(true);
  const [handRaiseCounts, setHandRaiseCounts] = useState({});
  const [ques, setQues] = useState("");
  const [ansinput, setAnswerinput] = useState(false);
  const [quesinput, setQuesinput] = useState(true);
  const [prompttitle1, setPrompttitle1] = useState(true);
  const [prompttitle2, setPrompttitle2] = useState(false);
  const [prompttip1, setPrompttip1] = useState(true);
  const [prompttip2, setPrompttip2] = useState(false);
  const [quesbutton, setQuesbutton] = useState(true);
  const [ansbutton, setAnsbutton] = useState(false);
  const [ans, setAns] = useState("");
  const [ans_id, setAns_id] = useState(null);
  const [ansTheQuestion, setAnswerTheQuestion] = useState([]);
  const [answerDiv, setAnswerDiv] = useState(false);

  // const getDoubtsDetails = async () => {
  //   try {
  //     let response = await fetch(`http://localhost:5000/viewdoubts`);
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       console.log(data);
  //       getDoubts(data);
  //     } else {
  //       console.log(
  //         "API unable to fetch the data with status code ",
  //         response.status
  //       );
  //     }
  //   } catch {
  //     console.log("An error occured while fetching the data");
  //   }
  // };
  const getDoubtsDetails = async () => {
    try {
      let response = await fetch(`http://localhost:5000/viewdoubts`);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);

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

  const Switch = () => {
    setAnswerinput(false);
    setQuesinput(true);
    setShow(true);
    setQnabox(false);
    setPrompttitle1(true);
    setPrompttitle2(false);
    setPrompttip1(true);
    setPrompttip2(false);
    setQuesbutton(true);
    setAnsbutton(false);
  };
  const SwitchAgain = () => {
    setShow(false);
    setQnabox(true);
  };

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
    SwitchAgain();
  };

  const enableAnswerInput = (val) => {
    Switch();
    setAnswerinput(true);
    setQuesinput(false);
    setPrompttitle1(false);
    setPrompttitle2(true);
    setPrompttip1(false);
    setPrompttip2(true);
    setQuesbutton(false);
    setAnsbutton(true);
  };

  const handleAnswerButtonClick = (id) => {
    setAns_id(id);
    enableAnswerInput(id);
  };

  // const AddAnswer = async () => {
  //   let value_id = ans_id;
  //   console.log(value_id);
  //   let result = await fetch(`http://localhost:5000/postanswer/${value_id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ solution: ans }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   let data = await result.json();
  //   console.log(data);
  // };

  const AddAnswer = async () => {
    try {
      // Construct the request body with the answer data
      const requestBody = { solution: ans }; // Include other fields as needed

      // Send a PUT request to update the answer
      const response = await fetch(
        `http://localhost:5000/postanswer/${ans_id}`,
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
  };

  const get_My_Answer = async (answer_id) => {
    let result = await fetch(`http://localhost:5000/answer/${answer_id}`);
    if (result.status == 200) {
      const my_ans = await result.json();
      setAnswerTheQuestion(my_ans);
      console.log(my_ans);
    }
  };

  // enableAnswerInput();

  return (
    <section className="askdoubt-section">
      <div className="flex-container">
        <div className="left-container">
          <div id="bg-color">
            {qnabox && (
              <div className="qna">
                <h1>Q&A</h1>
                <h1>Q&A</h1>
              </div>
            )}

            {qnabox && (
              <div className="qna-box">
                <input
                  className="input-box"
                  type="text"
                  placeholder="ask your doubt..."
                  onClick={Switch}
                />
                <div className="ask-answer-events">
                  <button onClick={Switch} className="btn3">
                    Ask
                  </button>
                  <h1>|</h1>
                  <button onClick={Switch} className="btn4">
                    Answer
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            {show && (
              <div id="prompt">
                {prompttitle1 && (
                  <div className="prompt-div">
                    <h1>Ask Your Doubt</h1>
                  </div>
                )}
                {prompttitle2 && (
                  <div className="prompt-div">
                    <h1>Answer the Query</h1>
                  </div>
                )}
                {prompttip1 && (
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
                )}

                {prompttip2 && (
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
                )}

                <div className="prompt-div2">
                  {quesinput && (
                    <input
                      type="text"
                      placeholder="ask your query here..."
                      onChange={(e) => setQues(e.target.value)}
                      value={ques}
                    />
                  )}

                  {ansinput && (
                    <input
                      type="text"
                      placeholder="Enter your answer"
                      onChange={(e) => setAns(e.target.value)}
                      value={ans}
                    />
                  )}
                </div>
                <div className="prompt-div3">
                  <button className="askdoubt-btn1" onClick={SwitchAgain}>
                    cancel
                  </button>
                  {quesbutton && (
                    <button className="askdoubt-btn2" onClick={AddQuestion}>
                      Add question
                    </button>
                  )}
                  {ansbutton && (
                    <button className="btn2" onClick={AddAnswer}>
                      Add answer
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* posted questions div  */}
          {/* <div className="posted-questions-bg"> */}

          {/* </div> */}
          <div className="posted-questions-bg">
            <div className="doubts-list">
              {doubtsData.map((singleData, index) => {
                return (
                  <div className="doubt-box" key={singleData._id}>
                    <p>{singleData.doubt}</p>

                    {ansTheQuestion === singleData._id ? (
                      <div>
                        {console.log("hello")}
                        {ansTheQuestion.map((singleVal, index) => {
                          if (singleVal.ans) {
                            return (
                              <p key={index}>
                                Ans {index}-->{singleVal.ans}
                              </p>
                            );
                          }
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="doubt-box-nav">
                      {/* <h6 className="count">
                        {handRaiseCounts[singleData._id]}
                      </h6> */}
                      {/* <button
                        onClick={() => increseRaiseCount(singleData._id)}
                        className="questions-discussion-btn"
                      >
                        Raise hand
                      </button> */}
                      {/* <h1>|</h1> */}
                      <button
                        onClick={() => handleAnswerButtonClick(singleData._id)}
                        className="questions-discussion-btn"
                      >
                        Answer
                      </button>
                      <h1>|</h1>
                      <button
                        className="questions-discussion-btn"
                        onClick={() => get_My_Answer(singleData._id)}
                      >
                        Discussion
                      </button>
                    </div>
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
