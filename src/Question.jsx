import React, { useState } from 'react';
import Answer from './Answer';

function Question(props) {
  const { question, answers, correctAnswerId, onAnswerSelected } = props;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedAnswer) {
      return; // Do nothing if no answer has been selected
    }
    const isCorrect = selectedAnswer === correctAnswerId;
    if (isCorrect || attempts === 1) { // If the answer is correct or the player has used up their attempts, allow them to proceed
      onAnswerSelected(isCorrect);
      setSelectedAnswer(null); // Clear selected answer for next question
      setAttempts(0); // Reset attempts for next question
    } else {
      setAttempts(attempts + 1); // Increment attempts
      setSelectedAnswer(null); // Clear selected answer for another attempt
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            id={answer.id}
            text={answer.text}
            isSelected={selectedAnswer === answer.id}
            onAnswerSelected={setSelectedAnswer}
            correct={answer.id === correctAnswerId}
          />
        ))}
        <button type="submit">{selectedAnswer ? 'Next' : 'Submit'}</button>
      </form>
      {attempts === 1 && <p>Incorrect answer. You have 1 Life left!</p>}
    </div>
  );
}

export default Question;
