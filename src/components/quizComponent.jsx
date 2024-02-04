import React from "react";

const QuizComponent = () => {
  return (
    <div>
        <div className="main-body-2">
          <center>
            <h1>Question</h1>
          </center>
          <p className="no">1 of 15</p>
          <center>
            <p className="question"><b>Which is the only mammal that can jump?</b></p>

            <div className="options">
              <div className="options-1">
                <button className="optionBtn">Dog</button> &nbsp;&nbsp;
                <button className="optionBtn">Elephant</button>
              </div>
              <div className="options-2">
                <button className="optionBtn">Goat</button> &nbsp;&nbsp;
                <button className="optionBtn">Lion</button>
              </div>
              <div className="options-3">
                <button className="previousBtn">Previous</button>&nbsp;
                <button className="nextBtn">Next</button>&nbsp;
                <button className="quitName">Quit</button>&nbsp;
              </div>
            </div>
          </center>
        </div>
    </div>
  );
};

export default QuizComponent;
