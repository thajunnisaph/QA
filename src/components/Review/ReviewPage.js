import React from "react";
import { useContext } from "react";
import QuestionContext from "../../store/QuestionContext";
import { questions } from "../Questions/Questions";
import "./ReviewPage.css";

const ReviewPage = () => {
  const { selectedAnswers } = useContext(QuestionContext);
  {/*selected answers are take out from context map the questions and corresponding answers*/}
  return (
    <div className="answers">
      <h2>Questions And Answers</h2>
      <ol>
        {questions.map((question, index) => (
          <li key={index} className="questions">
            <p>{question.question} : </p>
            {selectedAnswers[index] ? (
              <p>{selectedAnswers[index]}</p>
            ) : (
              <p> Not Answered</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ReviewPage;
