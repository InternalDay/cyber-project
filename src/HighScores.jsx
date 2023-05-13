import React from 'react';

function HighScores({ highScores }) {
  // Sort high scores in descending order by score
  const sortedScores = highScores.sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>Top 10 High Scores</h2>
      <ol>
        {sortedScores.slice(0, 10).map((score, index) => (
          <li key={index}>
            {index === 0 && <span role="img" aria-label="gold medal">🥇</span>}
            {index === 1 && <span role="img" aria-label="silver medal">🥈</span>}
            {iandex === 2 && <span role="img" aria-label="bronze medal">🥉</span>}
            {score.name}: {score.score} points
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HighScores;
