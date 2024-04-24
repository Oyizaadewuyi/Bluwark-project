import React from 'react'
import CustomButton from "../Button"
import heroimg from '../Assets/images/heropageimg.svg'
// import './Hero.css'
import style from './style.module.css'




export const Hero = (props) => {
  return (
    <section className={`${style.hero} ${props.className}`}>
    <h1 className={style.title}>
         Your best choice<br/>to protect your online life
    </h1>
    <p className={style.description}> We believe everyone has the right to be safe online, which is why we offer<br/> our award-winning free antivirus to millions of people around the world</p>
     <div className={style['button-group']}>
        <CustomButton onClick={()=>{}}className={style.herobutton}>
            Get started now
        </CustomButton>
                </div>
</section>
  )
}

// const Hero = () => {
//   return (
//     <div className='hero'>
//     <h1>Your best choice<br/> 
// to protect your online life</h1>
//     <p>We believe everyone has the right to be safe online, which is why we offer<br/>our award-winning free antivirus to millions of people around the world</p>
//        <div className='buttons-container'>
//        <button>Get Started Now</button> 
//        </div>
           
//         </div>
    
      
//   )
// }




// export default Hero