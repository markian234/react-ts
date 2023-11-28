import React, { useState } from "react";
// import "../styles/tailwind.css";
const MyDick = () => {
  const [count, setSize] = useState<number>(0);
  const clickIncrease = () => {
    setSize(count + 1);
  };
  const resetMyProgress = () => {
    setSize(0);
  };
  return (
    <div className='bg-yellow-500'>
      <p>
        increase my dick <span>{count}</span>
      </p>
      <button onClick={clickIncrease}>increase</button>
      <button onClick={resetMyProgress}>reset my progress</button>
    </div>
  );
};

export default MyDick;
