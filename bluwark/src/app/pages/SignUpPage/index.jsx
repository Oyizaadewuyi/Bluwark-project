import React, { useState } from "react";
import style from "./style.module.css";
import { Logo } from "../../components/Logo/Logo";
import Button from "../../components/Button/index";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image2 from "../../components/Assets/images/image 2.png";
import { CustomInputField } from "../../components/Inputfield/InputField";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [id, idchange] = useState("");
  const [firstname, firstnamechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [email, emailchange] = useState("");
  const [company, companychange] = useState("");
  const [password, passwordchange] = useState("");
  const [confirmpassword, confirmpasswordchange] = useState("");
  const [action, setName] = useState("Sign Up");

  // const [formData, setFormData] = useState({
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   company: '',
  //   password: '',
  //   cpassword: ''
  // })

  const handlesubmit = (e) => {
    e.preventDefault();
   
    let regobj={id, firstname, lastname, email, company, password, confirmpassword };
    console.log(regobj)
    
    // fetch("",{
    //   method:"POST",
    //   headers:{},
    //   body:
    // }
    // )
    
  };
  return (
    <main className={style.background}>
      <div className={style.logo_container}>
        {/* <img src={Logo} className={style.logoicon} alt="logo" /> */}
        <Logo className={style.logoicon}/>
      </div>
      <br />
      <section className={style.signup_image}>
        <aside className={style.SignUpcontainer}>
          <div className={style.headerpassage}>
            <h2>{action}</h2>
          </div>

          <div className={style.forms}>
            <form action="" onSubmit={handlesubmit}>
              <div className={style.nameforms}>
              

              <CustomInputField
                label="First Name"
                type="text"
                placeholder="Enter First Name"
                value={firstname}
                onChange={(e) => firstnamechange(e.target.value)}
              />
              <CustomInputField
                label="Last Name"
                type="text"
                placeholder="Enter Last Name"
                value={lastname}
                onChange={(e) => lastnamechange(e.target.value)}
              />
            </div>

           
            <div className={style.email_company}>
              <CustomInputField
                label="Email Address"
                type="text"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => emailchange(e.target.value)}
              />
              <CustomInputField
                label="Company Name"
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => companychange(e.target.value)}
              />
            </div>

            <div className={style.nameforms}>
             
              <CustomInputField
                label="Password"
                type="text"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => passwordchange(e.target.value)}
              />
              <CustomInputField
                label="Confirm Password"
                type="password"
                placeholder="Enter Password"
                value={confirmpassword}
                onChange={(e) => confirmpasswordchange(e.target.value)}
              />
            </div>
              
               
              
              <div className={style.checkbox}>
          <input  type="checkbox" name="" id="checkboxs" /><p>I agree to all the Terms and Privacy Policies</p>
          </div>
            </form>
          
          </div>
        
<br />
          <Button
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {}}
          >
            Create Account
          </Button>

          
  <div className={style.alternativeLogin}>
      
    <h3 className={style.login}>
          Already have an account?{" "}
            <span>
            <Link to={"/signin"}>
                  <a
                    href="#/"
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                  >
                    Login
                  </a>
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


