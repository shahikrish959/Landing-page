import React from 'react'
import Button from './button/button'
import './style/connect.css'

const Connect = () => {
  return (
    <div className='connect-container'>
        <div className="connect-layout">
            <div className="connect-up">
                <p className='colored'> - Reach Out to Us </p><br/>
                <h1><span className='colored underlined'>Connect</span> with Us </h1><br/>
                <p> Fill out the form below, and we'll get back to you as soon as possible."</p><br/>
            </div><br/>
            <div className="connect-down">
                <div className="connect-d2">
                 <div className="connect-left">
                 <label htmlFor='con1'>Name:</label>
                 <input type='text' id='con1' placeholder='Enter your Name'></input><br/>
                 <label htmlFor='con2' >Phone number:</label>
                 <input type='text'id='con2'placeholder='9845******'></input><br/>
                 </div>
                 <div className="connect-right">
                 <label htmlFor='con1.1'>Email:</label>
                 <input type='text' id='con1.1' placeholder='name@email.com'></input><br/>
                 <label htmlFor='con2.1'>Subject:</label>
                 <input type='' id='con2.1' placeholder='service name'></input><br/>
                 </div>
                </div>
                <div className="connect-last">
                <label htmlFor='con3'>Message:</label><br/>
                <input type='text' id='con3' placeholder='feedback about the service'></input>
                </div><br/><br/>  
            </div>
            <Button type='GetInTouch'/>
        </div>
       
    </div>
  )
}

export default Connect
