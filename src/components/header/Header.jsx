import React  from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className='top'>
                <p>Sign up and get 20% off to your first order. <span>Sign Up Now</span>
                </p>
            </div>
       <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
            <div className='logo2'>
            <input placeholder='🔍 Search for products...'></input>
            </div>
          <div class="logo">
          <h1>SHOP.CO</h1>
          </div>
          <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
        </div>
      </div>
    </nav>
        
              
             
</div>
     
  
    )
}

export default Header