import React from 'react';

function CompletionPage(props) {
  return (
    <div>
      <h2>Congratulations, {props.username}!</h2>
      <p>You've completed the trivia game!</p>
      <p>Your final score is {props.score}.</p>
      <button onClick={props.onViewScore}>View Score</button>
    </div>
  );
}

export default CompletionPage;
