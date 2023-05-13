import React, { useState } from 'react';
import Question from './Question';

function QuestionList(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelected = (isCorrect) => {
    props.onAnswerSelected(isCorrect);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = props.questions[currentQuestionIndex];

  return (
    <div>
      <Question
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        onAnswerSelected={handleAnswerSelected}
      />
    </div>
  );
}

export default QuestionList;
