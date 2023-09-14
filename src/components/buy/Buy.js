import React from 'react'
import "./Buy.css"
import Shirt from "../images/shirt.png";
import Pants from "../images/pants.png"
import Shirt2 from "../images/shirt2.png"
import Shoe from "../images/shoe.png"

const Buy = () => {
  return (
    <div className='wrapper'>
        <h1>NEW ARRIVALS</h1>
        <div className='items'>

       <div className='shirt'>
       <img src={Shirt} alt="shirt"/>
       <h3>SKINNY FIT JEANS</h3>
       <h4>$120 <span className='span1'>$260</span> <span className='span2'>-20%</span></h4>
       </div>

       <div className='shirt'>
       <img src={Pants} alt="pants"/>
       <h3>T-SHIRT WITH TAPE DETAILS</h3>
       <h4>$240  <span className='span1'>$260</span> <span className='span2'>-15%</span></h4>
       </div>

       <div className='shirt'>
       <img src={Shirt2} alt="shirt"/>
       <h3>CHECKERED SHIRT</h3>
       <h4>$180 <span className='span1'>$260</span> <span className='span2'>-20%</span></h4>
       </div>

       <div className='shirt'>
       <img src={Shoe} alt="shoe"/>
       <h3>NEW SHOES</h3>
       <h4>$130 <span className='span1'>$160</span> <span className='span2'>-30%</span></h4>
       </div>
       
        </div>
    </div>
  )
}

export default Buy