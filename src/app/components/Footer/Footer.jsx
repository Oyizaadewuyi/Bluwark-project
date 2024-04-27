import React from 'react'
// import { linksMenu } from './data'
import style from './style.module.css'
// import { aboutFeaturesMenu, linksMenu, officialinfoMenu, legalUrls } from './data';
import logo from '../Assets/icons/Bulwarklogo.svg'
import { FaClock, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { FaFacebookF, FaMapMarkerAlt, FaTwitterSquare } from 'react-icons/fa'
 import CustomButton from '../Button'
// import { FaFacebookF, FaInstagram, FaTwitter, FaGlobeAfrica } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import line from '../Assets/images/Line 51.png'




export const CustomFooter = () => {
  return (
    <div className={style.footer_container}>
      <div className='row py-5'>
        <div className={style.footerLogo}> 
        {/* 'col-md-4 col-sm-12' */}
        <img src={logo} alt="" />
        <p className={style.para}>Tailored Antivirus Solutions Crafted to<br/>align with your business requirements,<br/>providing optimal protection and tailored<br/>features for enhanced cybersecurity.</p>
      <h6 className={style.footheading}>Get started with Bulwark.</h6>
      </div>
      <form action="" className={style.footerForm} >
        <input type="email" required placeholder="enter your email"/>
         <CustomButton onClick={()=>{}}className={style.footerbutton}>
                    Subscribe
                </CustomButton>
                 
      </form>
  
      </div>
      
      
       <div className={style.footerMenu}>
       
       
        <h4 className={style.menutitle}>Features</h4>
        {/* <div className={style.menupara}> */}
        <p>Personal data cleanup</p>
        <p>Identity Monitoring</p>
        <p>Scam Protection</p>
        <p>Web Protection</p>
        <p>VPN (Virtual private network)</p>
        </div>
    
      
        {/* </div> */}
      


      <div className={style.footerMenu}>
        <h4 className={style.menutitle}>Links</h4>
        {/* <div className={style.menupara}> */}
        <p>Product</p>
        <p>Resources</p>
        <p>Features</p>
        <p>About Us</p>
        <p>Why Bulwark</p>
        </div>
      
      {/* </div> */}

      <div className={style.footerMenu}>
        <h4 className={style.menutitle}>Official Information</h4>
         <div className={style.menupara}> 
       
        <FaMapMarkerAlt/>Green Street Avenue
        <br/>
        <br/>
        <br/>
        <FaEnvelope/> setpace@gmail.com
        <br/>
        <br/>
        <br/>
        <FaClock />  +00 234 675 76
        
        </div>
         </div> 
           <div className={style.footerbottom}>
          <div className={style.footerIcons}>
            {/* <img src={line} alt="" className={style.line}/>
             */}
            <FaLinkedin/>
            
            <FaTwitter/>
            <FaFacebookF/>
            <FaInstagram/> 

          </div>
        </div> 
      </div>
       
     
    
  
  )
}

//   return (<footer className={style.footer}>
//           <div className={style.menu}>
//               <div className={style.menuItem}>
//                   <img src={logo} alt="" />
//                   <div className={style.flex}>
//                       <Menu title="Features" options={aboutFeaturesMenu} />
//                       <Menu title="Links" options={linksMenu} />
//                       <Menu title="Official information" options={officialinfoMenu} />
//                   </div>
//               </div>
//               <div className={style['legal-urls']}>
//                   {
//                       legalUrls.map(({ url, name }) => <a href={url}>{name}</a>)
//                   }
//               </div>
//           </div>

//           <div className={style.copyright}>
//               <div className={style.social}>
//                   <FaInstagram />
//                   <FaTwitter />
//                   <FaFacebookF />
//               </div>
//               <div>
//                 </div>
//                 </div>
                
//                 </footer>
//   )

// } 

// export const Menu = ({ title, options}) => {
//   return (<nav className={style.nav}>
//           <h5>{title || <>&nbsp;</>} </h5>
//           <ul>
//           {
//               options && options.map((option)=>{
//                   return (<li><a href={option.url}>{option.name}</a></li>)
//               })
//           }
//           </ul>
//       </nav>)
// }