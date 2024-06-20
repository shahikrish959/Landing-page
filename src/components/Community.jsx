import React from 'react'
import Apple from '../assets/Apple.png'
import Google from '../assets/Google.png'
import './style/community.css'

const Community = () => {
  return (
    <div className='community-container'>
        <div className="layout-community">
        <div className="layout-community1">
        <h1>Join the <span className='colored underlined'>CNEX Community</span> Today!</h1>
        <p> Download CNEX now to explore a world of female-centric products and services, and empower yourself with every purchase and booking </p>
        </div>
        <div className="layout-community3">
            <img src={Apple} alt="" />
            <img src={Google} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Community
