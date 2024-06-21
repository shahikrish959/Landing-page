import React from 'react'
import './style/testimonal.css'
import tphoto1 from '../assets/tphoto1.jpg'
import tphoto2 from '../assets/tphoto2.jpg'
import tcard from '../assets/tcard.png'

const Testimonal = () => {
  return (
    <div className='testimonal'>
        <div className="testimonal-layout">
            <p className='colored'> -Testimonal </p><br/>
            <div className="t-head">
            <h1> What our <span className='colored underlined'>Costumer say</span></h1><br/>
            <div className="btn-layout">
            <button className='t-button btn-left'></button>
            <button className='t-button btn-right'></button>
            </div>
            </div>
            <div className="tphoto-layout">
              <div className="slide-wrapper">
                
                <div className="image-list">
                  <div className="image-left">
                   <img src={tphoto1} alt="" className='timg' />
                   <img src={tcard} alt="" className='tcard'/>
                  </div>
                  <div className="image-right">
                   <img src={tphoto2} alt="" className='timg'/>   
                   <img src={tcard} alt="" className='tcard'/>               
                  </div>              
                </div>
              </div>             
            </div>
        </div>
    </div>
  )
}

export default Testimonal
