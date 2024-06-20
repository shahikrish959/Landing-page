import React from 'react'
import './style/faq.css'
import faq from '../assets/faq.jpg'

const FAQ = () => {
  return (
    <div className='FAQ-container'>
        <div className="FAQ-layout">
            <div className="FAQ-up">
                <p className='colored'> - FAQ </p><br/>
                <h1><span className='colored underlined'>Frequently</span>  Asked Question</h1><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            </div>
            <div className="FAQ-down">
                <div className="FAQ-text">
                    <div><br/><br/>
                        <h3>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><br/>
                       <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div><br/><br/>
                    <div>
                        <h3>Norem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        
                    </div><br/><br/>
                    <div>
                        <h3>Norem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        
                    </div><br/><br/>
                    <div>
                        <h3>Norem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        
                    </div>
                </div>
                <div className="FAQ-image1">
                    <img src={faq} alt="" className='FAQ-image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ
