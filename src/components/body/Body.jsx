import React from 'react'
import '../style/body.css'
import mob from '../../assets/mob.png'
import Apple from '../../assets/Apple.png'
import Google from '../../assets/Google.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import story from '../../assets/story.jpg'
import Button from '../button/button'
import Cnex from '../Cnex.jsx'
import Cnex2 from '../Cnex2.jsx'
import Community from '../Community.jsx'
import Flutter from '../Flutter.jsx'
import Testimonal from '../Testimonal.jsx'
import FAQ from '../FAQ.jsx'
import Connect from '../Connect.jsx'




const Body = () => { 
  return (
    <>
    <div className="body">
        <div className="up">
          <div className="left">
          <h1 className='text-2'><span className='colored underlined'>Experience</span> the Future of Female Commerce with <span className='colored underlined'>Cnex</span> </h1>
         <p className='para'>Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</p>
         <div className='image'>
         <img src={Apple} alt="" />
         <img src={Google} alt="" />
         </div>
         </div>
         <div className="right">
          <img src={mob} alt="" className='mob'/>
         </div>
         </div>
         <div className="down">
         <div className="facts">
           <h2> 200+ </h2>
           <p>client worldwide</p>
         </div>
         <div className="facts">
           <h2> 100+ </h2>
           <p>client satisfaction</p>
         </div>
         <div className="facts">
           <h2> 99k+ </h2>
           <p>Number of sales</p>
         </div>
         <div className="facts">
           <h2> 24H </h2>
           <p>team support</p>
         </div>
         </div>
      </div>
      <div className='body-2'>
<div className="container-2">
  <p className='colored'>-ABOUT US</p>
  <h1 className='photo-text'> <span className='colored underlined'>Pioneering Female</span>-Centric Solutions for the Modern Woman </h1>
  <div className="layout">
    <div className="part-1">
    <img src={img1} alt="" className='img1'/>
    <img src={img4} alt="" className='img4'/>
    </div>
    <div className="part-2">
    <img src={img2} alt="" className='img2'/>
    <img src={img3} alt="" className='img3'/>
    <img src={img5} alt="" className='img5'/>
    </div>
    <div className="part-3">
    <img src={img8} alt="" className='img6'/>
    <img src={img6} alt="" className='img7'/>
    <img src={img7} alt="" className='img8'/>
    </div>
  </div>
</div>

</div>
  
      <div className="body-3">
        <div className="layout-1">
          <h1 className='head'>Our <span className='colored underlined'> Story</span> </h1>
          <div className="innerlayout">
        <img src={story} alt="" className='story' />
        <div className="innerlayout-2">
          <div>
            <p>
              At the beginning, it was just the two of them, working out of a small office space.
             They were determined to provide personalized service to their clients and build lasting relationships.
             They worked tirelessly, often working long hours and weekends to ensure that their clients' needs were met.
            </p>
         </div><br/>
         <div>
          <p>
             Their hard work paid off, and soon their business began to grow.
             They hired additional staff members and expanded their service offerings to include property management and real estate investments
          </p>
         </div><br/>
         <div>
         <p>
             Over the years, their business has continued to grow, and they have helped countless clients buy, sell, and manage their real estate investments.
             Today, their business is a respected name in the real estate industry, known for its exceptional service and commitment to its clients.
         </p>
         </div><br/>
         <div>
          <p>
             As they look to the future, John and Jane remain dedicated to their clients and to providing the best possible service in the real estate industry.
             They are excited to continue to grow and evolve their business, and to help even more clients achieve their real estate goals.
          </p>
         </div><br/><br/><br/>
         <Button type= 'GetInTouch'/>
        </div>
        </div>
        </div>
      </div>
      <Cnex/>
      <Cnex2/>
      <Testimonal/>
      <FAQ/>
      <Community/>\
      <Connect/>
      <Flutter/>
    </>
  )
}
export default Body;
