import React from 'react'

const FirstScreen = ({toggle}) => {
  return ( <>
    <div className='conatiner flex w-600 h-600 py-[122px]'>
       <div className="image w-1/2 "> <img  className=" " src="dices1.png" alt="" /></div>
      <div className="  w-1/2 block space-y-3 ">
        <h1 className=" text-9xl   text-center">Dice Game</h1>
        <button class="bg-black h-12 ml-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={toggle}>
Play Game
</button>
      </div>
    </div>
    </>
  )
}

export default FirstScreen
