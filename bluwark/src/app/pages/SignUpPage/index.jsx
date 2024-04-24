// import React, { useState } from "react";
// import style from "./style.module.css";
// // import { Logo } from "../../components/Logo/Logo";
// import Button from "../../components/Button/index";
// import { FcGoogle } from "react-icons/fc";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
// import Image2 from "../../components/Assets/images/image 2.png";
// import { CustomInputField } from "../../components/Inputfield/InputField";
// import { Link } from "react-router-dom";
// import { Checkbox } from "../../components/PrivacyPolicyCheckBox/checkkbox";

// export const SignUp = () => {
//   const [id, idchange] = useState("");
//   const [firstname, firstnamechange] = useState("");
//   const [lastname, lastnamechange] = useState("");
//   const [email, emailchange] = useState("");
//   const [company, companychange] = useState("");
//   const [password, passwordchange] = useState("");
//   const [confirmpassword, confirmpasswordchange] = useState("");
//   const [action, setName] = useState("Sign Up");


//   const handlesubmit = (e) => {
//     e.preventDefault();
   
//     let regobj={id, firstname, lastname, email, company, password, confirmpassword };
//     console.log(regobj)
    
//     // fetch("",{
//     //   method:"POST",
//     //   headers:{},
//     //   body:
//     // }
//     // )
    
//   };
//   return (
//     <main className={style.background}>
      
//         {/* <img src={Logo} className={style.logoicon} alt="logo" />
//         <Logo className={style.logoicon}/> */}
   
//       <br />
//       <section className={style.signup_image}>
//         <aside className={style.SignUpcontainer}>
//           <div className={style.headerpassage}>
//             <h2>{action}</h2>
//           </div>

//           <div className={style.forms}>
//             <form action="" onSubmit={handlesubmit}>
//               <div className={style.nameforms}>
              

//               <CustomInputField
//                 label="First Name"
//                 type="text"
//                 placeholder="Enter First Name"
//                 value={firstname}
//                 onChange={(e) => firstnamechange(e.target.value)}
//               />
//               <CustomInputField
//                 label="Last Name"
//                 type="text"
//                 placeholder="Enter Last Name"
//                 value={lastname}
//                 onChange={(e) => lastnamechange(e.target.value)}
//               />
//             </div>

           
//             <div className={style.email_company}>
//               <CustomInputField
//                 label="Email Address"
//                 type="text"
//                 placeholder="Enter Email Address"
//                 value={email}
//                 onChange={(e) => emailchange(e.target.value)}
//               />
//               <CustomInputField
//                 label="Company Name"
//                 type="text"
//                 placeholder="Enter company name"
//                 value={company}
//                 onChange={(e) => companychange(e.target.value)}
//               />
//             </div>

//             <div className={style.nameforms}>
             
//               <CustomInputField
//                 label="Password"
//                 type="text"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => passwordchange(e.target.value)}
//               />
//               <CustomInputField
//                 label="Confirm Password"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={confirmpassword}
//                 onChange={(e) => confirmpasswordchange(e.target.value)}
//               />
//             </div>
              
               
              
//               <div className={style.checkbox}>
//               <Checkbox
//         label="Please send me information about new product releases, price changes, and special offers from Bulwark. I am aware that my consent could be revoked at any time by clicking the unsubscribe link inside any email received from Bulwark."
//         checked={marketingChecked}
//         onChange={handleMarketingChange}
//       />

//           </div>
//             </form>
          
//           </div>
        
// <br />
//           <Button
//             className={action === "Login" ? "submit gray" : "submit"}
//             onClick={() => {}}
//           >
//             Create Account
//           </Button>

          
//   <div className={style.alternativeLogin}>
      
//     <h3 className={style.login}>
//           Already have an account?{" "}
//             <span>
//             <Link to={"/signin"}>
//                   <a
//                     href="#/"
//                     className={action === "Sign Up" ? "submit gray" : "submit"}
//                   >
//                     Login
//                   </a>
//                 </Link>
//             </span>
           

//           </h3>
          
//           <h5 className={style.signupicons}>Or Sign up with</h5>
//           <br />

//           <div className={style.socialIcons}>
//             <FcGoogle className={style.google}/>
//             <FaXTwitter />
//             <FaFacebookF className={style.facebook}/>
//           </div>

//     </div>
//         </aside>
//         <div>
//           <img className={style.sideimage} src={Image2} alt="signup_image" />
//         </div>
//       </section>
//     </main>
//   );
// };




import React, { useState } from "react";
import style from "./style.module.css";
import Button from "../../components/Button/index";
import { CustomInputField } from "../../components/Inputfield/InputField";
import { Link } from "react-router-dom";
import {Checkbox} from "../../components/PrivacyPolicyCheckBox/checkkbox";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SignupImage from "../../components/Assets/images/SignupImage.png";

export const SignUp = () => {
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [policyChecked, setPolicyChecked] = useState(false);


 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Check if first name and last name are filled
  //   if (!firstname || !lastname) {
  //     alert("Please fill in your first and last name");
  //     return;
  //   }
  
  //   // Check if password and confirm password match
  //   if (password !== confirmpassword) {
  //     alert("Password and Confirm Password must match");
  //     return;
  //   }
  
  //   // Check if privacy policy is accepted
  //   if (!policyChecked) {
  //     alert("Please accept the Privacy Policy");
  //     return;
  //   }
  
  //   try {
  //     const formData = {
  //       id,
  //       firstname,
  //       lastname,
  //       email,
  //       company,
  //       password,
  //     };
  
  //     const response = await fetch(
  //       "https://bluwark-project-b8ax.onrender.com/bluwark/v1/signup",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Failed to sign up");
  //     }
  
  //     alert("Sign up successful!");
  //     // Optionally redirect the user to the login page or any other page
  //   } catch (error) {
  //     alert(error.message || "Failed to sign up");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if first name, last name, and email address are filled
    if (!firstname || !lastname || !email) {
      alert("Please fill in your first name, last name, and email address");
      return;
    }
  
    // Check if password and confirm password match
    if (password !== confirmpassword) {
      alert("Password and Confirm Password must match");
      return;
    }
  
    // Check if privacy policy is accepted
    if (!policyChecked) {
      alert("Please accept the Privacy Policy");
      return;
    }
  
    try {
      const formData = {
        id,
        firstname,
        lastname,
        email,
        company,
        password,
      };
  
      const response = await fetch(
        "https://bluwark-project-b8ax.onrender.com/bluwark/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }
  
      alert("Sign up successful!");
      // Optionally redirect the user to the login page or any other page
    } catch (error) {
      alert(error.message || "Failed to sign up");
    }
  };
  


  return (
    <main className={style.background}>
      <br />
      <section className={style.signup_image}>
        <aside className={style.SignUpcontainer}>
          <div className={style.headerpassage}>
            <h2>Sign Up</h2>
          </div>

          <div className={style.forms}>
            <form onSubmit={handleSubmit}>
              <div className={style.nameforms}>
                <CustomInputField
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <CustomInputField
                  label="Last Name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>

              <div className={style.email_company}>
                <CustomInputField
                  label="Email Address"
                  type="text"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInputField
                  label="Company Name"
                  type="text"
                  placeholder="Enter company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={style.nameforms}>
                <CustomInputField
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <CustomInputField
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className={style.checkbox}>
                <Checkbox
                  label="I agree to all the Terms and Privacy Policies"
                  checked={policyChecked}
                  onChange={handlePolicyChange}
                />
              </div>

              <br />
              {/* <Link to={"/BulwarkLanding"}>
            <Button
              className={action === "Sign in" ? "submit gray" : "submit"}
              onClick={handleLogin}
              disabled={isSubmitting}
            >
              Login
            </Button> */}

            <Button
            onClick={() => {}}
          >
            Create Account
          </Button>

          
            </form>
          </div>

          <br />
          <div className={style.alternativeLogin}>
            <h3 className={style.login}>
              Already have an account?{" "}
              <span>
                <Link to={"/signin"} className="submit">
                    Login
                </Link>
              </span>
            </h3>

            <h5 className={style.signupicons}>Or Sign up with</h5>
            <br />

            <div className={style.socialIcons}>
            <FcGoogle className={style.google}/>
         <br />
         
            <FaApple  className={style.facebook}/>
          </div>

          </div>
        </aside>
        <div>
        <img className={style.sideimage} src={SignupImage} alt="signup_image" />
        </div>
      </section>
    </main>
  );
};
