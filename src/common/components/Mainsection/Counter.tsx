import React, { useState } from "react";
// import "../styles/tailwind.css";
export const Counter = () => {
  const [count, setSize] = useState<number>(0);
  const clickIncrease = () => {
    setSize(count + 1);
  };
  const resetMyProgress = () => {
    setSize(0);
  };
  return (
    <div className='bg-yellow-500 flex justify-center items-center flex-col p-1'>
      <p className='font-bold text-xl'>
        increase my блек спайсі пенсіл <span>{count}</span>sm
      </p>
      <button
        className=' bg-white active:bg-[#C3C3C3] border border-1 border-black p-1 mt-4 transition duration-300 ease-in-out'
        onClick={clickIncrease}
      >
        increase
      </button>
      <button
        className='bg-white active:bg-[#C3C3C3] border border-1 border-black p-1 mt-5 transition duration-300 ease-in-out'
        onClick={resetMyProgress}
      >
        reset my progress
      </button>
    </div>
  );
};
