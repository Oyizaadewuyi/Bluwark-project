import axios from 'axios'; 
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import style from "./style.module.css";
import Button from "../../components/Button/index";
import { CustomInputField } from "../../components/Inputfield/InputField";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import {Checkbox} from "../../components/PrivacyPolicyCheckBox/checkkbox";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import Image2 from "../../components/Assets/images/SignupImage.png";





export const SignUp = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    // agreeToTerms: false // Added checkbox state
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signedUp, setSignedUp] = useState(false); // State for redirect
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]  :value
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setLoading(true);

    try {
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords don't match");
      }

      const response = await fetch('https://bluwark-project-b8ax.onrender.com/bluwark/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      navigate("/signin")


      // Assuming your backend responds with some data after successful signup
      console.log('User signed up successfully');

      // Reset form after successful sign-up
      setFormData({
        firstName: '',
        lastName: '',
        emailAddress: '',
        companyName: '',
        password: '',
        confirmPassword: '',
        // agreeToTerms: false
      });
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <main className={style.background}>
    <br />
    <section className={style.signup_image}>
      <aside className={style.SignUpcontainer}>
        <div className={style.headerpassage}>
          <h2>{style.action}</h2>
        </div>

        <div className={style.forms}>
          <form onSubmit={handleSubmit}>
            <div className={style.nameforms}>
              <CustomInputField
                label="First Name"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                 value={formData.firstName}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                 value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.email_company}>
              <CustomInputField
                label="Email address"
                id="emailAddress"

                type="email"
                name="emailAddress"
                placeholder="Enter your Email"
                 value={formData.emailAddress}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Company Name"
                id="companyName"

                type="text"
                name="companyName"
                placeholder="Enter company name"
                 value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.nameforms}>
              <CustomInputField
                label="Password"
                id="password"

                type="password"
                name="password"
                placeholder="Enter Password"
                 value={formData.password}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Confirm Password"
                type="password"
                id="confirmPassword"

                name="confirmPassword"
                placeholder="Confirm Password"
                 value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.checkbox}>
              <input type="checkbox" name="agreeToTerms" id="checkboxs" required />
              <label htmlFor="checkboxs">I agree to all the Terms and Privacy Policies</label>
            </div>

            <button type="submit" className={style.signupBtn} disabled={loading}>
  {loading ? 'Signing Up...' : 'Create Account'}
</button>

             
          </form> 
        </div>



    <div className={style.alternativeLogin}>
      
     <h3 className={style.login}>
           Already have an account?{" "}
            <span>
            <Link to={"/signin"}
                    className={style.action === "Sign Up" ? "submit gray" : "submit"}>
                  
                    Login
                  
                 </Link>
             </span>
             </h3>

             <h5 className={style.signupicons}>Or Sign up with</h5>
             <br />

             <div className={style.socialIcons}>
             <FcGoogle className={style.google}/>
             <FaXTwitter />
              <FaFacebookF className={style.facebook}/>
           </div>

      </div>
         </aside>
         <div>
           <img className={style.sideimage} src={Image2} alt="signup_image" />
          </div>
        </section>
    </main>
  );
  };
           

