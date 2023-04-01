import React, { useState } from "react";

import { questions } from "../components/Questions/Questions";
const QuestionContext = React.createContext();
export const QuestionContextProvider = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill("")
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const handleAnswerSelection = (optionId) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionId;
    setSelectedAnswers(newSelectedAnswers);
  };

  const questionvalue = {
    selectedAnswers,
    currentQuestion,
    handleAnswerSelection,
    setCurrentQuestion,
  };
  return (
    <QuestionContext.Provider value={questionvalue}>
      {props.children}
    </QuestionContext.Provider>
  );
};
export default QuestionContext;
