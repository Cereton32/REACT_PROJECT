
import { useState } from 'react'
import './App.css'
import FirstScreen from './Component/FirstScreen'
import GameStart from './Component/GameStart';
import Rule from './Component/Rule';
import Rolldice from './Component/Rolldice';


function App() {
const [isGameStarted,setGame] = useState(false);

const toggleGame = (prev) =>{
  setGame((prev)=>{
    return !prev;
  })
}



  return (
    <>
    {isGameStarted?<GameStart/>:<FirstScreen toggle={toggleGame}/>}
    
    </>
  )
}

export default App
