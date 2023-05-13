import React, { useState } from 'react';
import StartGame from './StartGame'; //importing the new StartGame component
import QuestionList from './QuestionList';
import CompletionPage from './CompletionPage';

function TriviaGame() {
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false); //new state for tracking if the game has started
  const [isComplete, setIsComplete] = useState(false);
  const [currentScore, setCurrentScore] = useState(score); // add new state variable for current score

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore((score) => score + 1);
      setCurrentScore((score) => score + 1); // update current score
    }
    if (score === questions.length - 1) {
      setIsComplete(true);
    }
  };

  const questions = [
    {
      id: 1,
      question: 'What is the weakest link in any security system?',
      answers: [
        { id: '1', text: 'Firewall' },
        { id: '2', text: 'Human error' },
        { id: '3', text: 'Antivirus software' },
        { id: '4', text: 'Encryption' },
      ],
      correctAnswerId: '2',
    },
    {
      id: 2,
      question: 'What is a common social engineering attack?',
      answers: [
        { id: '5', text: 'DDoS' },
        { id: '6', text: 'Man-in-the-middle' },
        { id: '7', text: 'Phishing' },
        { id: '8', text: 'Ransomware' },
      ],
      correctAnswerId: '7',
    },
    {
      id: 3,
      question: 'What is a good password?',
      answers: [
        { id: '9', text: 'password' },
        { id: '10', text: '123456' },
        { id: '11', text: 'CorrectHorseBatteryStaple' },
        { id: '12', text: 'qwerty' },
      ],
      correctAnswerId: '11',
    },
  ];

  const handleGameStart = () => {
    setIsStarted(true);
  };

  return (
    <div>
      {isComplete ? ( //if game is complete, render the CompletionPage component
        <CompletionPage score={score} />
      ) : isStarted ? ( //if game has started, render the QuestionList component and score
        <>
          <QuestionList questions={questions} onAnswerSelected={handleAnswerSelected} />
          <p>Score: {currentScore}</p>
        </>
      ) : ( //if game hasn't started, render the StartGame component
        <StartGame onStart={handleGameStart} />
      )}
    </div>
  );  
}

export default TriviaGame;