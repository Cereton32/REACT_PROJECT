 import React from 'react'
 import styles from './Navigation.module.css';
 

 const Navigation = () => {
 
   return (
     <nav className={`${styles.navigation} container`} >
        <div>
            <img  src="images/logo.png" alt="newwww" />
        </div>
        <ul>
            <li>Home</li>
             <li>About</li>
            <li>Conact</li>
        </ul>
     </nav>
   )
 }
 
 export default Navigation
 