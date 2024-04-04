import React, { useState } from "react";
import style from "../VerifyEmailPage/style.module.css"
import CustomButton from '../Button'


const VerifyEmail = () => {
    const [action,setName] = useState("Verify your E-mail Address");
 
  return (
    <div className={style.background}>
   
    <div className={style.VerifyEmailContainer}>
        <div>

         <div className={style.header}>
         <h1>{action}</h1>
         <p>Please check your inbox for verification code</p>
          
          </div>

          <div className={style.forms}>
          
          <form action="">
<label htmlFor="">
            <br />
              <input
                type=""
                placeholder="Enter Verification code "
                
              />
            </label>
            </form>
            <br/>
            <CustomButton className={action==="Submit"?"submit gray":"submit"} onClick={() => {}}>
            Submit
          </CustomButton>
          

          </div>
          </div>
          </div>
          </div>

    )
}

export default VerifyEmail