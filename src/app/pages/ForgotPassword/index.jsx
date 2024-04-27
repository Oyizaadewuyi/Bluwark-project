import { useState } from "react";

import style from './style.module.css'
import { CustomInputField } from "../../components/Inputfield/InputField"
// import { Logo } from "../../components/Logo/Logo";
import CustomButton from "../../components/Button";
import forgotPasswordrafiki from "../../components/Assets/images/forgotPasswordrafiki.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
    const [email, emailchange] = useState("");
    const [action, setName] = useState("Submit");
    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { email};
        console.log(regobj);
      };

    return(
        <div  className={style.background}>
            {/* <div className={style.logo_container}> 
            <Logo/>
            </div> */}
           
            <div className={style.signin_image}>
            <div className={style.forgot_field}>
            
            <h5 className={style.login}>
            {/* Back to login{" "} */}
            <span>
              <Link to={"/login"}>
              <a
                href="#/"
                className={action === "Sign Up" ? "submit gray" : "submit"}
              >
                <MdKeyboardArrowLeft/> Back to login
              </a>
              </Link>
            </span>

          </h5>
            <br />
        <h2 className={style.forgot}>Forgot your password?</h2>
        
       
        <p className={style.login}>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
<br />
        <form action="" onSubmit={handlesubmit}>
             
             <CustomInputField
               label="Email Address"
               type="text"
               placeholder="Enter Email Address"
               value={email}
               onChange={(e) => emailchange(e.target.value)}
               className={style.custominput_field}
             />
             </form>
             <br />
             <CustomButton
              className={action === "Sign in" ? "submit gray" : "submit"}
              onClick={() => {}}
            >
              Submit
            </CustomButton>
            </div>
             {/* <Button
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {}}
          >
            Create Account
          </Button> */}
              <aside>
          <img className={style.sideimage} src={forgotPasswordrafiki} alt="signin_image" />
        </aside>

         </div>
     
            </div>
            
    
    )
}