
 import React, { useState} from "react";
// import React, { useState, useEffect } from "react";

import style from "./style.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import CustomButton from "../../components/Button";
 import { Link } from "react-router-dom";
import Image2 from "../../components/Assets/images/image 2.png";
import { CustomInputField } from "../../components/Inputfield/InputField";

const SignIn = () => {

  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


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

    const { token } = await response.json();

    localStorage.setItem('token', token);

    } catch (error) {
    
      setError(error.message);
  }finally {
    setLoading(false);
  }
};
   
    
  return (
    <div className={style.background}>
      <div className={style.logo_container}>
        {/* Your logo or logo icon component goes here */}
      </div>
      <div className={style.signin_image}>
        <main className={style.SignIncontainer}>
          <div className={style.headerpassage}>
            <h2>{style.action}</h2>
          </div>
          <div className={style.forms}>
            <form onSubmit={handleLogin}
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
               
                
                <button className={style.signinBtn} disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
              
            </button>
          
              
            </form>
          </div>
          <br />
          <span className={style.forgot}>
            <a
              href="#/"
              className={style.action === "forgot Password" ? "submit gray" : "submit"
              }
            >
              <Link to={"/forgotpassword"}> Forgot password? </Link>
            </a>
          </span>
          <br />

          
           
          {/* <CustomButton onClick={handleLogin}className={style.action}>
            Login
        </CustomButton>
        */}
            {/* <CustomButton */}
              {/* // className={style.action === "Sign in" ? "submit gray" : "submit"} */}
              {/* // onClick={handleLogin} */}
              {/* // disabled={isSubmitting} */}
            {/* > */}
      
            {/* </CustomButton> */}
          
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

            <h6 className={style.signinicons}>Or log in with</h6>
            <br />
            <div className={style.socialIcons}>
              <a href="https://accounts.google.com/">
                <FcGoogle className={style.google} 
                // onClick={() => navigate('home')}/>
                ></FcGoogle>
              </a>
              <FaApple className={style.facebook} 
              // onClick={() => navigate('home')}/>
            >
              </FaApple>
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
