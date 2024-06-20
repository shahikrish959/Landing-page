import React from "react"
import './navbar.css'
import logo from '../../assets/logo.png'
import Button from "../button/button"



const Navbar = () => {
    return(
        <>
        <div className="container">
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="text">
                <div className="home">home</div>
                <div className="about">About Us</div>
                <div className="FAQ">FAQ</div>
                <div className="contact">Contact</div>
            </div>
            <Button type="Download" />
        
        </div>
        </div>
    
        </>
    )

}
export default Navbar