import React from 'react'
import "./Body.css"
import background from "../images/background2.png"

const Body = () => {
  return (
    <div className='body'>
      <h1>FIND CLOTHES <br /> THAT MATCHES <br />YOUR STYLE</h1>
      <p>Browse through our diverse range of meticulously crafted garments, designed <br />to bring out your individuality and cater to your sense of style.</p>
      <button>Shop Now</button>
      <div className='customers'>
        <div>
          <h1>
            200+
          </h1>
          <p>International Brands</p>
        </div>

        <div >
          <h1>
            2,000+
          </h1>
          <p>High-Quality Products</p>
        </div>


        <div>
          <h1>
            30,000+
          </h1>
          <p>Happy Customers</p>
        </div>
      </div>

      <img className='background' src={background} alt="img" />

    </div>
  )
}

export default Body