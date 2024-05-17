import React, { useState, useEffect } from 'react';

const Rolldice = ({ change, generateRandomNumber, reset, currentdice }) => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (currentdice === null) {
      setNumber(4);
    } else {
      setNumber(currentdice);
    }
  }, [currentdice]);

  return (
    <div className="container">
      <div className="content ml-[400px]">
        <h1 className='text-[40px] -ml-[70px]'>This is Gambling Section</h1>
        <img src={`image_${number}.png`} className="items-center h-[250px] w-[250px] cursor-pointer" alt="" onClick={generateRandomNumber} />
        <p className='text-[25px] ml-[20px]'>Click on dice to roll</p>
        <button className="bg-black text-white px-4 py-2 mt-4 border rounded-lg border-black hover:cursor-pointer" onClick={reset}>Reset Scores</button>
        <button className="bg-black text-white px-4 py-2 border rounded-lg mx-4 border-black" onClick={change}>Show rules</button>
      </div>
    </div>
  );
};

export default Rolldice;
