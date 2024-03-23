import './App.css';

import { useState } from 'react';
import videoSrc from '/myGif-ezgif.com-gif-maker.gif';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle click event
  const handleClick = (event) => {
    // Get the clicked position relative to the container
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const clickedX = event.clientX - boundingRect.left;
    const clickedY = event.clientY - boundingRect.top;

    // Update the position state
    setPosition({ x: clickedX, y: clickedY });

    // Flip horizontally if the clickedX is less than the current position.x
    setIsFlipped(clickedX < position.x);
  };
  return (
    <div
      style={{ position: 'relative', height: '90vh', width: '90vw' }}
      onClick={handleClick}
    >
      <img
        src={videoSrc}
        alt="Moveable Image"
        style={{
          height: '50px',
          position: 'absolute',
          top: position.y + 'px',
          left: position.x + 'px',
          transition: 'top 1.5s, left 1.5s', // Adding CSS transition for smooth movement
          transform: isFlipped ? 'scaleX(-1)' : 'none', // Flip horizontally if isFlipped is true
        }}
      />
    </div>
  );
}
export default App;
