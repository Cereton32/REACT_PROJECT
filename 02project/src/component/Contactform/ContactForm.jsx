import React, { useState } from 'react'

import formstyle from './ContactForm.module.css'
const ContactForm = () => {
    const [formvalue,setformValue] = useState({name:'Enter Name',email:' Enter E-mail',text:'Write something'});
 const onclicked = (name) =>{
    console.log("this is from " + name);
 };
 const handleSubmit = (event)=>{
    event.preventDefault();
    const name=event.target[0].value;
    const email = event.target[1].value;
    const text = event.target[2].value;
    console.log("Name : " + name + "\nEmail : " + email + "\n text : " + text );
    setformValue({name,email,text});
   
    event.target.reset();
 }

// function handleSubmit (event) {
//     event.preventDefault();
//     console.log(event.target[1].value)
// }
  return (
    <div className={formstyle.container1}>

     
     <div className={formstyle.form}>
    <div className={formstyle.btns}>
    <button type="submit" onClick={()=>onclicked("Chat")} >Via support chat</button>
     <button type="submit" onClick={()=>onclicked("Call")}>Via call</button> <br/>
     
    </div>
    <button type="submit" id="mailbtn" className={formstyle.mailbtn} onClick={()=>onclicked("call")} >via mail form </button>
      <form id="contactForm" onSubmit={handleSubmit}>
     <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
       
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Submit</button>
        
     </form>
     <p>Name : {formvalue.name} </p>
     <p>email : {formvalue.email}</p>
     <p>password : {formvalue.text}</p>
     </div>
     <div>
        <img src="images/logo3.svg" alt="" />
     </div>
     
    </div>
    
  )
}

export default ContactForm
