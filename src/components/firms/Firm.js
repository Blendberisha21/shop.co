import React from 'react'
import "./Firm.css"
import Versace from '../images/Versace.png'
import Zara from '../images/zara.png'
import Gucci from '../images/gucci.png'
import Prada from "../images/prada.png"
import Calving from '../images/calvin.png'


const Firm = () => {
  return (
    <div className='firms'>
<div className='logos'>
<img src={Versace} alt="versace" />
<img src={Zara} alt="zara"/>
<img src={Gucci} alt="gucci"/>
<img src={Prada} alt="prada"/>
<img src={Calving} alt="calvin"/>
</div>

<div className='responsive'>
  
<img src={Versace} alt="versace" />
<img src={Zara} alt="zara"/>
<img src={Gucci} alt="gucci"/>
</div>
<div className='responsive2'>
<img src={Prada} alt="prada"/>
<img src={Calving} alt="calvin"/>
</div>



    </div>
  )
}

export default Firm