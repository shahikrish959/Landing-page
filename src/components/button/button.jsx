import React from "react";
import '../style/button.css';

function Button ({type}){

    switch(type)
    {
        case "Download":return<button className="Download">Download Now</button>
        case "GetInTouch":return<button className="GetInTouch"> Get In Touch</button> 
    }
}
export default Button;