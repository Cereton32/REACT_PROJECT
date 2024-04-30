import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
     const [UserName,setUserName]=useState(null)
     const [Password,setPassName] = useState(null)
      const {setUser} =useContext(UserContext)

     const handlesubmit = (e)=>{
        e.preventDefault()
        setUser({UserName,Password})
     }
    
  return (
    <div>
      <h2>LOGIN</h2>
      <input type='text'
      value={UserName}
      onChange={(e)=>setUserName(e.target.value)}
      placeholder='Username'/>
      
      <input  type='text'
      value={Password}
      onChange={(e)=>setPassName(e.target.value)}
       placeholder='Enter Your Password'/>
      
      <button onClick={handlesubmit}>SUBMIT</button>
    </div>
  )
}

export default Login
