import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const [password,setPassword]=useState('')
  
 const passwordGenerator=useCallback(()=>{
  let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(number) str += "01234567899"
   if(character) str += "!@#$%^&*:?><~"
   for(let i=1;i<=length;i++){
     let temp = Math.floor(Math.random()*str.length + 1)
     pass = pass+ str.charAt(temp)
   }
   setPassword(pass)
 },[length,number,character,password])
 
useEffect(()=>{passwordGenerator()},[length,character,number])
  return (
    <>
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-800'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={password} className='outline-none w-full py-4 px-4 my-2' placeholder='Password' readOnly>
     
      </input>
      <button className='m-3'>copy</button>
    </div>
   
    <input type='range'  min={3} max={30} value={length} className='text-white mr-0 pr-0 ' onChange={(e)=>setLength(e.target.value)}></input><label> : length {length}</label>
   <div>
   <input type='checkbox' defaultChecked={number} className='text-white mr-0 pr-0 ' onChange={()=>setNumber((prev)=>!prev)}></input><label> Number</label>
   <input type='checkbox' defaultChecked={character} className='text-white mr-0 pr-0 m-2 ' onChange={()=>setCharacter((prev)=>!prev)}></input><label> character</label>
   </div>
   
    </div>
    </>
  )
}

export default App
