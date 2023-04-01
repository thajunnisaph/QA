import React, { Fragment } from "react";
import "./QAForm.css";
import { useContext } from "react";
import QuestionContext from "../../store/QuestionContext";
import { questions } from "./Questions";
import { useHistory } from "react-router-dom";

const QAForm = () => {
  const history = useHistory("");
  const {
    selectedAnswers,
    currentQuestion,
    handleAnswerSelection,
    setCurrentQuestion,
  } = useContext(QuestionContext);
  const currentQuestionData = questions[currentQuestion];
  {
    /*get single questions from context,initially 0 so first question render */
  }
  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
    {
      /*back button handling */
    }
  };
  const handleSubmit = () => {
    console.log(selectedAnswers);
    history.push("/review");
    {
      /*when submit go to review page */
    }
  };
  return (
    <Fragment>
      <h1>Sample Questions</h1>
      <div className="outer">
        <div>
          {currentQuestionData.questionid !== 1 && (
            <button
              onClick={handleBack}
              className="btn btn-outline-secondary back-button"
            >
              Back{" "}
            </button>
          )}
        </div>
        <hr></hr>
        <div className="question">{currentQuestionData.question}</div>
        <div className="option">
          {/*if question type is checkbox,radio then the  options are maped */}
          {currentQuestionData.questiontype === "Checkbox" ||
          currentQuestionData.questiontype === "Radio" ? (
            currentQuestionData.questionoption.map((option) => (
              <div key={option.optionid} className="options">
                <input
                  type={currentQuestionData.questiontype}
                  id={option.optionid}
                  name={`question${currentQuestion}`}
                  value={option.optionvalue}
                  checked={
                    selectedAnswers[currentQuestion] === option.optionvalue
                  }
                  onChange={(e) => handleAnswerSelection(e.target.value)}
                />
                <label htmlFor={option.optionid}>{option.optionvalue}</label>
              </div>
            ))
          ) : (
            <input
              className="textbox"
              type={currentQuestionData.questiontype}
              name={`question${currentQuestion}`}
              value={selectedAnswers[currentQuestion]}
              placeholder="Please enter the answer"
              onChange={(e) => handleAnswerSelection(e.target.value)}
            />
          )}
        </div>
        {/* submit button only render when last question reached */}
        {currentQuestion === questions.length - 1 ? (
          <button
            className="btn btn-primary float-end submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-primary float-end next"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Next
          </button>
        )}
        {/* next button increase the current question count by 1,so from context get next question and render */}
      </div>
    </Fragment>
  );
};

export default QAForm;
