import { useState } from 'react';

function Supports() {
  const [isVisible, setIsVisible] = useState(false);

  function show() {
    let toggle = isVisible;
    setIsVisible(!toggle);
  }
  return (
    <div className='support-container'>
      <button className='numberLine-btn' onClick={() => show()}>Show or Hide Number Line</button>
      {/* <button className='numberLine-btn' onClick={() => show()}>Hide Number Line</button> */}
      <img
        className='number-line'
        hidden={!isVisible}
        src='./numberline.jpg'
        alt='number line starting at 0 and going to 20'
      />
    </div>
  );
}

export default Supports;
