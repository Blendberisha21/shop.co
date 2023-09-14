import React from 'react'
import "./Footer.css"
import Socials from "../images/Social.png"

const Footer = () => {
  return (
    <>

    <div className='footer'>
    <div className='contact'>
    <h1>STAY UP TO DATE ABOUT <br/> OUR LATEST OFFERS</h1>
    <div className='inputs'>
    <input className='input' type="text" placeholder='Enter your email adress...'></input>
    <button className='input'>Subscribe to Newsletter</button>
    </div>
   </div>
       <h1>SHOP.CO</h1>
       <p>We have clothes that suits your style and <br/>
         which you’re proud to wear. From women to men.</p>
         <img className='socialmedia' src={Socials} alt="socials"/>

        </div>
        </>
  )
}

export default Footer