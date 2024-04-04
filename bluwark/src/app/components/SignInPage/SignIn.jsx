
import React, {useState} from "react";

import style from "../SignInPage/style.module.css"
 import logo from '../Assets/icons/BLUWARK-ICON.svg'
 import google from '../Assets/icons/google.png'
 import twitter from '../Assets/icons/twitter.svg'
 import facebook from '../Assets/icons/facebook.svg'
 import CustomButton from '../Button'

const SignIn = () => {

  const [action,setName] = useState("Sign in to Bulwark");
  return (
    <div className={style.background}>
      <div className={style.SignInContainer}>
        <div>
          <img src={logo} className={style.logoicon} alt="logo" />
          </div>
        <div>

         <div className={style.header}>
         <h2>{action}</h2>
          </div>


          <div className={style.forms}>
          
          <form action="">
<label htmlFor="">
            Email Address <span>*</span> 
            <br />
              <input
                type="email"
                placeholder="Enter Email Address "
                
              />
            </label>

          <label htmlFor="">
            Password <span>*</span>
            <br />
              <input
                type="password"
                placeholder="Enter Password "
                
              />
            </label>
</form>
          </div>
            <br />
            
          <CustomButton className={action==="Sign in"?"submit gray":"submit"} onClick={() => {}}>
            Sign in
          </CustomButton>
           
          <br />
<h4>Forgot password? <span><a href="#/"className={action==="Sign in"?"submit gray":"submit"} >Click here</a></span></h4>
          <br />
          <h6>OR</h6>
          <br />
          
        <div className={style.Icons}>
        <img src={google} alt="" />
        <img src={twitter} alt="" />
        
        <img src={facebook} alt="" />
        
        
        </div>
        </div>
      </div>
      </div>
    
  );
};
    
    
export default SignIn