import React from 'react';


const Cards = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-32 gap-5">
      <div className="flex justify-between gap-10 items-center h-[50vh] w-full">
        <div className='card relative rounded-xl w-1/2 h-full bg-[#175014] flex items-center justify-center'>
          <img className='w-32' src="/imag-removebg-preview.png" alt="" />
          <button className="absolute rounded-xl px-5 py-1 border-2 left-10 bottom-10 text-white">
            Get Started
          </button>
        </div>

        <div className='card flex items-center justify-center rounded-xl w-1/3 h-full bg-zinc-800'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          {/* <button className="absolute rounded-xl px-5 py-1 border-2 left-10 bottom-10 text-white">
            Get Started
          </button> */}
        </div>
        <div className='card flex items-center justify-center rounded-xl w-1/3 h-full bg-zinc-900'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          {/* <button className="absolute rounded-xl px-5 py-1 border-2 left-10 bottom-10 text-white">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
