import React, { useState } from "react";
const MyDick = () => {
  const [count, setSize] = useState<number>(0);
  const clickIncrease = () => {
    setSize(count + 1);
  };
  return (
    <div className='bg-yellow-500'>
      <p>
        increase my dick <span>{count}</span>
      </p>
      <button onClick={clickIncrease}>increase</button>
    </div>
  );
};

export default MyDick;
