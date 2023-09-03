import React, { useState, useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";

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

  const enableAnswerInput = () => {
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

  // enableAnswerInput();

  return (
    <section className="askdoubt-section">
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

        {/* <div className="ques-posted">
          <h1>Posted Question</h1>
        </div> */}
      </div>
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
                <li>Make sure your Qestion is not being asked frequently</li>
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
                  Please make sure you have proficiency on that topic before
                  answering
                </li>
                <li>
                  Don't use unncessary and illegal words while answering,people
                  may hurt
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

            {ansinput && <input type="text" placeholder="Enter your answer" />}
          </div>
          <div className="prompt-div3">
            <button className="btn1" onClick={SwitchAgain}>
              cancel
            </button>
            {quesbutton && (
              <button className="btn2" onClick={AddQuestion}>
                Add question
              </button>
            )}
            {ansbutton && (
              <button className="btn2" onClick={AddQuestion}>
                Add answer
              </button>
            )}
          </div>
        </div>
      )}
      {/* posted questions div  */}
      {/* <div className="posted-questions-bg"> */}
      <div className="posted-questions-bg">
        <div className="doubts-list">
          {doubtsData.map((singleData, index) => {
            return (
              <div className="doubt-box" key={singleData._id}>
                <p>{singleData.doubt}</p>
                <div className="doubt-box-nav">
                  <h6 className="count">{handRaiseCounts[singleData._id]}</h6>
                  <button onClick={() => increseRaiseCount(singleData._id)}>
                    Raise hand
                  </button>
                  <h1>|</h1>
                  <button onClick={enableAnswerInput}>Answer</button>
                  <h1>|</h1>
                  <h4>Discussion</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AskDoubt;
