
 import React, { useState} from "react";
// import React, { useState, useEffect } from "react";

import style from "./style.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import CustomButton from "../../components/Button/index";
 import { Link } from "react-router-dom";
import Image2 from "../../components/Assets/images/image 2.png";
import { CustomInputField } from "../../components/Inputfield/InputField";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/index'


const SignIn = () => {
  const navigate=useNavigate()
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



 const handleLogin = async (e) => {
  e.preventDefault();
    setLoading(true);


  try {
    const response = await fetch('https://bluwark-project-b8ax.onrender.com/bluwark/v1/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    navigate("/productpage")

    const { token } = await response.json();

    localStorage.setItem('token', token);

    } 
    
    catch (error) {
    
      setError(error.message);
  }finally {
    setLoading(false);
  }
};
   
    
  return (
    <div className={style.background}>

{error && <div className={style.error}>{error}</div>} {/* Render error message */}

      <div className={style.logo_container}>
        {/* Your logo or logo icon component goes here */}
      </div>
      <div className={style.signin_image}>
        <main className={style.SignIncontainer}>
          <div className={style.headerpassage}>
            <h2>{style.action}</h2>
          </div>
          <div className={style.forms}>
            <form onSubmit={handleLogin} className={style.loginForm}
              >
               
              <CustomInputField
                label="Email"
                id="emailAddress"
                type="email"
                placeholder="Enter Email Address"
                value={emailAddress}
                onChange={(e)=> setEmail(e.target.value)} required/>
                
               
              <CustomInputField
                label="Password"
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} required/>


{/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} Password
              </button> */}

          <span className={style.forgot}>
            <a
              href="#/"
              className={style.action === "forgot Password" ? "submit gray" : "submit"
              }
            >
              <Link to={"/forgotpassword"}> Forgot password? </Link>
            </a>
          </span>

          
          

           <CustomButton 
                    className={style.loginBtn} 
                    onClick={handleLogin}
                    disabled={loading}
                    >
                                
            {loading ? 'Logging in...' : 'Login'}
      
                    {/* Login */}
                </CustomButton>
                 
                
              
            </form>
          </div>
         
          
           
          
           <br /> 
          <div className={style.alternativeLogin}>
            <br />
            <h3 className={style.signin}>
              Don't have an account?{" "}
              <span>
                <a
                  href="#/"
                  className={style.action === "Sign Up" ? "submit gray" : "submit"}
                >
                  <Link to={"/signup"}>Sign Up</Link>
                </a>
              </span>
            </h3>

            <div className={style.divider}>
                    <span>Or log in with</span>
                </div>

            {/* <h6 className={style.signinicons}>Or log in with</h6> */}
            <br />
            <div className={style.socialIcons}>
            
            <FcGoogle className={style.google}/>
             {/* <FcGoogle /> */}
             <FaXTwitter/>
              <FaFacebookF className={style.facebook}/>
              {/* <FaFacebookF/> */}
           
            {/* <div className={style.socialIcons}>
              <a href="https://accounts.google.com/">
                <FcGoogle className={style.google}
                
 onClick={() => navigate('home')}/>
                </FcGoogle>
              </a>
              <FaApple className={style.facebook} 
               onClick={() => navigate('home')}/>
            
              </FaApple>
            </div> */}
            </div>
          </div>
        </main>
        <aside>
          <img className={style.sideimage} src={Image2} alt="signin_image" />
        </aside>
      </div>
    </div>
  );
};

export default SignIn;
