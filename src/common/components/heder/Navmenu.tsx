import { useState } from "react";
export const NavMenu = () => {
  const [display, setDisplay] = useState<string>("hidden");

  const openCloseNav = () => {
    setDisplay((prevDisplay) => (prevDisplay === "flex" ? "hidden" : "flex"));
  };
  return (
    <nav className='ml-5 relative'>
      <button
        onClick={openCloseNav}
        className='bg-[#7D8883] p-2'
      >
        Navigation
      </button>
      <ul className={`${display} absolute top-10 left-20 bg-[#7D8883]`}>
        <li>
          {" "}
          <button>item-1</button>
        </li>
        <li>
          {" "}
          <button>item-2</button>
        </li>
        <li>
          {" "}
          <button>item-3</button>
        </li>
        <li>
          {" "}
          <button>item-4</button>
        </li>
      </ul>
    </nav>
  );
};
