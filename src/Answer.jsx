import React, { useState } from 'react';

function Answer(props) {
  const { id, text, onAnswerSelected, isSelected } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!isSelected) {
      onAnswerSelected(id);
    }
  };

  return (
    <div className={isSelected ? 'selected' : isHovered ? 'hovered' : ''}>
      <label htmlFor={id} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <input
          type="radio"
          id={id}
          name={`answer-${id}`}
          value={id}
          checked={isSelected}
          onChange={() => {}}
        />
        <span
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </span>
      </label>
    </div>
  );
}

export default Answer;

// This component renders each individual answer choice as a radio button.
// It handles user interactions including clicking and hovering over an answer choice.