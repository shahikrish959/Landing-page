import React from 'react'
import './style/testimonal.css'
import tphoto1 from '../assets/tphoto1.jpg'
import tphoto2 from '../assets/tphoto2.jpg'

const Testimonal = () => {
  return (
    <div className='testimonal'>
        <div className="testimonal-layout">
            <p className='colored'> -Testimonal </p><br/>
            <h1> What our <span className='colored underlined'>Costumer say</span></h1><br/>
            <div className="tphoto-layout">
                <img src={tphoto1} alt="" />
                <img src={tphoto2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonal
