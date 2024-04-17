import React, { useState } from "react";

import style from "./style.module.css";

// import logo from "../Assets/icons/BLUWARK-ICON.svg";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
import Image2 from "../../components/Assets/images/image 2.png";
import {CustomInputField} from "../../components/Inputfield/InputField";
import { Logo } from "../../components/Logo/Logo";

const SignIn = () => {
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [action, setName] = useState("Login");

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { email, password };
    console.log(regobj);
  };
  return (
    <div className={style.background}>
      <div className={style.logo_container}>
        <Logo className={style.logoicon}/>
        
        {/* <img src={logo}  alt="logo" /> */}
      </div>
      <div className={style.signin_image}>
        <main className={style.SignIncontainer}>
          <div className={style.headerpassage}>
            <h2>{action}</h2>
          </div>

          <div className={style.forms}>
            <form action="" onSubmit={handlesubmit}>
             
              <CustomInputField
                label="Email Address"
                type="text"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => emailchange(e.target.value)}
              />
              <CustomInputField
                label="Password"
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => passwordchange(e.target.value)}
              />

    
            </form>
          </div>
          <br />

          <span className={style.forgot}>
            <a
              href="#/"
              className={
                action === "forgot Password" ? "submit gray" : "submit"
              }
            >
              {" "}
              <Link to={"/forgotpassword"}> Forgot password? </Link>
            </a>
          </span>
          <br />

          <Link to={"/verifyemail"}>
            <CustomButton
              className={action === "Sign in" ? "submit gray" : "submit"}
              onClick={() => {}}
            >
              Sign In
            </CustomButton>
          </Link>

          <br />
          <div className={style.alternativeLogin}>
            <br />
            <h3 className={style.signin}>
              Don't have an account?{" "}
              <span>
                <Link to={"/signup"}>
                  <a
                    href="#/"
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                  >
                    Sign Up
                  </a>
                </Link>
              </span>
            </h3>

            <h6 className={style.signinicons}>Or log in with</h6>
            <br />

            <div className={style.socialIcons}>
              <a href="https://accounts.google.com/"><FcGoogle className={style.google} /></a>
              <FaXTwitter className={style.twitter} />
              <FaFacebookF className={style.facebook} />
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

// import React, { useState } from "react";
// import InputField from "../InputField";

// const SignInPage = () => {

//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (e) => {
//     setInputValue(e.target.value);

//   };

//   return (
//     <div>
//       <InputField
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <InputField
//         label="password"
//         type="text"
//         placeholder="Enter your password"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <InputField
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={inputValue}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default SignInPage;
