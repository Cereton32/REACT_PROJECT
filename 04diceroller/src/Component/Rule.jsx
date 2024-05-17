import React from 'react'
import Totalscore from './Totalscore'
import NumberSelector from './NumberSelector'
import Rolldice from './Rolldice'
const Rule = () => {
  return (
    <>
  <div class="flex-block justify-center items-center mt-5 h-150 ml-72 bg-cyan-200 w-1/3">
    <h1 className=' p-5 text-xl'>How to play dice game </h1>
    <div className='   px-6'>
    <p>Select any number Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
    <p>if you get wrong guess then  2 point will be dedcuted </p>
    </div>
  


  </div>

   </>
  )
}

export default Rule
