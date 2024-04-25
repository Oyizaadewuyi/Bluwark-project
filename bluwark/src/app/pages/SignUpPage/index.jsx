// import React, { useState } from "react";
import React, { useState } from 'react';
import axios from 'axios'; // assuming you are using Axios for HTTP requests
// import { useHistory } from 'react-router-dom';
import { Redirect, Link } from 'react-router-dom';



import style from "./style.module.css";
// import { Logo } from "../../components/Logo/Logo";
import Button from "../../components/Button/index";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image2 from "../../components/Assets/images/image 2.png";
import { CustomInputField } from "../../components/Inputfield/InputField";
// import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';



export const SignUp = () => {
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

  // const history = useHistory();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
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
      // history.push('/SignIn');


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
  if (signedUp) {
    return <Navigate to="/SignIn" />;
  }

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
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                // value={formData.firstName}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                // value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.email_company}>
              <CustomInputField
                label="Email address"
                type="email"
                name="emailAddress"
                placeholder="Enter your Email"
                // value={formData.email}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Company Name"
                type="text"
                name="companyName"
                placeholder="Enter company name"
                // value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.nameforms}>
              <CustomInputField
                label="Password"
                type="password"
                name="password"
                placeholder="Enter Password"
                // value={formData.password}
                onChange={handleChange}
                required
              />
              <CustomInputField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                // value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.checkbox}>
              <input type="checkbox" name="agreeToTerms" id="checkboxs" required />
              <label htmlFor="checkboxs">I agree to all the Terms and Privacy Policies</label>
            </div>

            <button className={style.signupBtn} disabled={loading}>
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




    
  
//     <main className={style.background}>
      
//          <img src={Logo} className={style.logoicon} alt="logo" />
//         <Logo className={style.logoicon}/> 
   
//       <br />
//      <section className={style.signup_image}>
//        <aside className={style.SignUpcontainer}>
//           <div className={style.headerpassage}>
//             <h2>{style.action}</h2>
//           </div>

// //           <div className={style.forms}>
//               <form onSubmit={handleSubmit}>

//               <div className={style.nameforms}>
              

//               <CustomInputField
      
//                 label="First Name"
//                type="text"
//                 id="firstname-input"
//                 placeholder="Enter First Name"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//                  />
//               <CustomInputField
//                 label="Last Name"
//                 type="text"
//                 id="lastname-input"
//                 placeholder="Enter Last Name"
//                  value={formData.lastname}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>

           
//              <div className={style.email_company}>
//               <CustomInputField
//                label="Email address"
//                 type="email"
//                 id="email-input"
//                 placeholder="Enter your Email"
//                 value={formData.Email}
//                onChange={handleChange}
//                required
//                 /> 
//               <CustomInputField
//                 label="Company Name"
//                 type="text"
//                 id="company-input"
//                 placeholder="Enter company name"
//                  value={formData.company}
//                  onChange={handleChange}
//                 required
//                 />
//             </div>

//             <div className={style.nameforms}>
//                            <CustomInputField
//                 label="Password"
//                 type="Password"
//                 id="Passwordinput"
//                 placeholder="Enter Password"
//                 value={formData.Password}
//                 onChange={handleChange}
//                 required
//              />
//               <CustomInputField
//                 label="Confirm Password"
//                 type="password"
//                 id="confirmpassword-input"
//                 placeholder="Confirm Password"
//                  value={formData.confirmpassword}
//                 onChange={handleChange}
//                 required
//               />
//           </div>
              
               
              
//                <div className={style.checkbox}>
//           <input  type="checkbox" name="" id="checkboxs" /><p>I agree to all the Terms and Privacy Policies</p>
//         </div>
//             </form>
          
//          </div>
        
// <br />
//           {/* <Button
//             className={style.action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {}}
//           >
//             Create Account
//           </Button> */}
//           <button type="submit" disabled={loading}>
//         {loading ? 'Signing Up...' : 'Create Account'}
//       </button>
    

          
//    <div className={style.alternativeLogin}>
      
//      <h3 className={style.login}>
//            Already have an account?{" "}
//             <span>
//             <Link to={"/signin"}>
//                     className={style.action === "Sign Up" ? "submit gray" : "submit"}
                  
//                     Login
                  
//                  </Link>
//              </span>
           

//           </h3>
          
//           <h5 className={style.signupicons}>Or Sign up with</h5>
//           <br />

//           <div className={style.socialIcons}>
//             <FcGoogle className={style.google}/>
//             <FaXTwitter />
//              <FaFacebookF className={style.facebook}/>
//            </div>

//      </div>
//          </aside>
//         <div>
//            <img className={style.sideimage} src={Image2} alt="signup_image" />
//          </div>
//        </section>
//     </main>
//   );
//  };


