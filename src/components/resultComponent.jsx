import React from "react";

const ResultComponent = () => {
  return (
    <div>
      <center>
        <h1 className="result">Result</h1>
        <div className="main-body-3">
          <div>
            <h2>You need more practise!</h2>
            <h1 className="result-tag">Your score is 20%</h1>
          </div>
          <div className="flex">
            <p>total number of questions</p>
            <p>15</p>
          </div>
          <div className="flex">
            <p>number of attempted questions</p>
            <p>9</p>
          </div>
          <div className="flex">
            <p>number of correct answers</p>
            <p>12</p>
          </div>
          <div className="flex">
            <p>number of wrong answers</p>
            <p>3</p>
          </div>
        </div>
        <div className="flex-1">
            <button className="playagain">Play Again</button> &nbsp;
            <button className="back2home">Back to home</button>
        </div>
      </center>
    </div>
  );
};

export default ResultComponent;
