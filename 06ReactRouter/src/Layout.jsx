import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
   <>
   <Header/>
  
  <Outlet/>
 
  <Footer/>
  
   </>
  )
}

export default Layout
//here header and footer will same for all the webpage but the 
//middle component will be changed so we use Outlet method od react router dom
