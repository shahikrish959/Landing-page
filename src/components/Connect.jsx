import React from 'react'
import Button from './button/button'
import './style/connect.css'

const Connect = () => {
  return (
    <div className='connect-container'>
        <div className="connect-layout">
            <div className="connect-up">
                <p className='colored'> - Reach Out to Us </p>
                <h1><span className='colored underlined'>Connect</span> with Us </h1>
                <p> Fill out the form below, and we'll get back to you as soon as possible."</p>
            </div><br/>
            <div className="connect-down">
                <div className="con-1"><br/>
                    Name:
                    <input type='text'></input>
                    Email:
                    <input type='text'></input>
                </div><br/>
                <div className="con-2">   
                    Phone number:
                    <input type='text'></input>
                    Subject:
                    <input type=''></input>
                    </div><br/>
                <div className="con-3">
                    Message:
                <input type='text'></input>
                </div><br/>
                    
            </div>
            <Button type='GetInTouch'/>
        </div>
    </div>
  )
}

export default Connect
