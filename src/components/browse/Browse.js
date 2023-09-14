import React from 'react'
import "./Browse.css"


const Browse = () => {
  return (
    <div className='browser'>
 <h1>BROWSE BY dress STYLE</h1>
 <div className='firstRow'>
<div className='pic1'>
<h2 className='fHeader'>Casual</h2>
</div>
<div className='pic2'>
<h2 className='sHeader'>Formal</h2>
</div>
</div>

<div className='secondRow'>
<div className='pic3'>
<h2 className='ssHeader'>Party</h2>
</div>
<div className='pic4'>
<h2 className='fHeader'>Gym</h2>
</div>
</div>
    </div>
  )
}

export default Browse