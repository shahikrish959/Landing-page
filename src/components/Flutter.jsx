import React from 'react'
import logo from '../assets/logo1.png'
import Apple from '../assets/Apple.png'
import Google from '../assets/Google.png'
import './style/flutter.css'

const Flutter = () => {
  return (
    <div className='flutter-con'>
        <div className="flutter-layout">
            <div className="logo-con">
                <img src={logo} alt="" />
            </div>
            <div className="contact-con">
                <h2>Contact us</h2>
                <p>
                    Head office:<br/><br/>
                    Sankhamul, Baneshwor<br/><br/>
                    +977 98********<br/><br/>
                    cnex@gmail.com<br/><br/>
                </p>
            </div>
            <div className="services-con">
                <h2>Services </h2>
                <p>
                Order and Pre-order<br/><br/>
                Beauty service Appointment Booking<br/><br/>
                Order and Pre-order<br/><br/>
                Order and Pre-order<br/><br/>
                </p>
            </div>
            <div className="download-con">
                <h2>Download our App</h2>
                <img src={Apple} alt="" />
                <img src={Google} alt="" />
            </div>
        </div> 
    </div>
  )
}

export default Flutter
