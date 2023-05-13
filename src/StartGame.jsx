import React, { useState } from 'react';

function StartGame(props) {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    // check for spaces in username
    if (/\s/.test(value)) {
      alert('Spaces are not allowed!');
      return;
    }
    // check for length of username
    if (value.length > 12) {
      alert('Username must be 12 characters or less!');
      return;
    }
    setUsername(value);
  };

  const handleStartClick = () => {
    if (username.length >= 2) {
      props.onStart(username);
    } else {
      alert('Username must be at least two characters long!');
    }
  };

  return (
    <div>
      <h2>Welcome to the Best Cybersecurity Trivia Game!</h2>
      <label>
        Please enter a username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <button onClick={handleStartClick}>Start Game</button>
    </div>
  );
}

export default StartGame;