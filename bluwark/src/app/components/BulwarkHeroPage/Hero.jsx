import React from 'react'
import CustomButton from "../Button"
import heroimg from '../Assets/images/heropageimg.svg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
    <h1>Your best choice<br/> 
to protect your online life</h1>
    <p>We believe everyone has the right to be safe online, which is why we offer<br/>our award-winning <span>free antivirus</span> to millions of people around the world</p>
       <div className='buttons-container'>
       <button>Get Started Now</button> 
       </div>
       <img src={heroimg} alt=""  />
           
        </div>
    
      
  )
}




export default Hero