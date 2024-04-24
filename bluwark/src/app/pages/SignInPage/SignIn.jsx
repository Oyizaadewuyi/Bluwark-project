import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { useNavigation } from "../../components/hooks/useNavigation"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
import Image2 from "../../components/Assets/images/image 2.png";
import toast from 'react-hot-toast';
import { CustomInputField } from "../../components/Inputfield/InputField";
import { isUserLogin } from "../../../utilis/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");

  const { navigate } = useNavigation();

  const handleEmail = (event) => {
    setEmail(event.target.value)
  };  

  const handlePassword = (event) => {
    setPassword(event.target.value)
  };  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setIsSubmitting(true);
    const formData = { 
      username: email, 
      password
    };

    try {
      const response = await fetch("https://bluwark-project-b8ax.onrender.com/bluwark/v1/signin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.status >= 400) {
        setError("An error occurred while logging in.");
        toast.error("An error occurred while logging in.");
      } else {
        console.log("Login success:", data);
        localStorage.setItem('user', JSON.stringify(data));
        // Replace the navigate('dashboard') with your routing logic
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in.");
      toast.error("An error occurred while logging in.");
    }

    setIsSubmitting(false);
  };

  useEffect(()=>{
    const user = isUserLogin();
    if (user) {
      // window.location.href = routes.BulwarkLanding();
    }
  }, []);

  return (
    <div className={style.background}>
      <div className={style.logo_container}>
        {/* Your logo or logo icon component goes here */}
      </div>
      <div className={style.signin_image}>
        <main className={style.SignIncontainer}>
          <div className={style.headerpassage}>
            <h2>{action}</h2>
          </div>
          <div className={style.forms}>
            <form onSubmit={handleLogin}>
              <CustomInputField
                label="Email Address"
                type="text"
                placeholder="Enter Email Address"
                value={email}
                onChange={handleEmail}
              />
              <CustomInputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePassword}
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
              <Link to={"/forgotpassword"}> Forgot password? </Link>
            </a>
          </span>
          <br />
          <Link to={"/BulwarkLanding"}>
            <CustomButton
              className={action === "Sign in" ? "submit gray" : "submit"}
              onClick={handleLogin}
              disabled={isSubmitting}
            >
              Login
            </CustomButton>
          </Link>
          <br />
          <div className={style.alternativeLogin}>
            <br />
            <h3 className={style.signin}>
              Don't have an account?{" "}
              <span>
                <a
                  href="#/"
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                >
                  <Link to={"/signup"}>Sign Up</Link>
                </a>
              </span>
            </h3>

            <h6 className={style.signinicons}>Or log in with</h6>
            <br />
            <div className={style.socialIcons}>
              <a href="https://accounts.google.com/">
                <FcGoogle className={style.google} onClick={() => navigate('home')}/>
              </a>
              <FaApple className={style.facebook} onClick={() => navigate('home')}/>
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
