import {React,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {User} = useContext(UserContext)
  if(!User) return <div>Login again</div>
 
   return <div> Helloe {User.UserName}</div>
     
    
  }


export default Profile
