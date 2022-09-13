import { useState } from 'react';
import './App.css';
import image from './assets/image.jpg';
import styled from 'styled-components';

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [cursorPositions, setCursorPositions] = useState({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'c') {
      setIsCopied(true);
    }
  };

  const handleMouseMove = (e) => {
    setCursorPositions({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='container' onMouseMove={handleMouseMove}>
      <div className='first-image-box' tabIndex={0} onKeyDown={handleKeyDown}>
        <img src={image} width='100%' height='100%' />
      </div>
      <div className='second-image-box'>
        {/* <img src={image} width='100%' height='100%' /> */}
      </div>
      {isCopied ? (
        <div
          className='copyPreview'
          style={{
            position: 'absolute',
            left: `${cursorPositions.x}`,
            top: `${cursorPositions.y}`,
            maxHeight: '4rem',
            maxWidth: '3rem',
            borderRadius: '1px',
          }}
        >
          <img src={image} width='100%' height='100%' />
        </div>
      ) : null}
    </div>
  );
};

export default App;
