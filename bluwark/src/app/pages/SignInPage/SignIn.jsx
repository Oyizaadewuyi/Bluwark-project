// import React, { useState, useEffect } from "react";
// import style from "./style.module.css";
// import { useNavigation } from "../../components/hooks/useNavigation"
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// // import { FaXTwitter, FaFacebookF } from "react-icons/fa";
// import CustomButton from "../../components/Button";
// import { Link } from "react-router-dom";
// import Image2 from "../../components/Assets/images/image 2.png";
// import toast from 'react-hot-toast';
// import { CustomInputField } from "../../components/Inputfield/InputField";
// import { isUserLogin } from "../../../utilis/user"

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [action, setAction] = useState("Login");

//   const { navigate } = useNavigation()

//   const handleEmail = (event) => {
//     setEmail(event.target.value)
// }  
// const handlePassword = (event) => {
//     setPassword(event.target.value)
// }  

// const [isSubmitting, setIsSubmitting] = useState(false);
// const [error, setError] = useState(null);


// const handleLogin = async () => {
//   setIsSubmitting(true)
//   const formData = { 
//       username: email, 
//       password
      
//   }

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formData = { email, password };
//   //   console.log(formData);

    
//     // API KEY
//     // fetch("https://bluwark-project-b8ax.onrender.com/bluwark/v1/signin", {
//     //   method: "POST",
//     //   body: JSON.stringify(formData),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // })


//     console.log({formData}, "I'm inside handleLogin" )
//         const response = await fetch("https://bluwark-project-b8ax.onrender.com/bluwark/v1/signin", {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         })

//       const data = await response.json()
//       if (response.status >= 400) {
//           toast.error(error.message);
//           setError(error.message);
//       } else {
//           console.log("I got a login success", data)
//           localStorage.setItem('user', JSON.stringify(data))
//           window.location.href = routes.dashboard()
//       }
//       setIsSubmitting(false)
//   }

//   useEffect(()=>{
//         const user = isUserLogin()
//         if (user) {
//             window.location.href = routes.dashboard()
//         }
//     }, [])

//   return (
//     <div className={style.background}>
//       <div className={style.logo_container}>
//         {/*  <img src={logo}  alt="logo" />  */}
//       </div>
//       <div className={style.signin_image}>
//         <main className={style.SignIncontainer}>
//           <div className={style.headerpassage}>
//             <h2>{action}</h2>
//           </div>
//           <div className={style.forms}>
//             <form onSubmit={handleLogin}>
//               <CustomInputField
//                 label="Email Address"
//                 type="text"
//                 placeholder="Enter Email Address"
//                 value={email}
//                 onChange={handleEmail}
//               />
//               <CustomInputField
//                 label="Password"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={handlePassword}
//               />
//             </form>
//           </div>
//           <br />
//           <span className={style.forgot}>
//             <a
//               href="#/"
//               className={
//                 action === "forgot Password" ? "submit gray" : "submit"
//               }
//             >
//               <Link to={"/forgotpassword"}> Forgot password? </Link>
//             </a>
//           </span>
//           <br />
//           <Link to={"/BulwarkLanding"}>
//             <CustomButton
//               className={action === "Sign in" ? "submit gray" : "submit"}
//               onClick={handleLogin}
//               disabled={isSubmitting}
//             >
//               Login
//             </CustomButton>
//           </Link>
//           <br />
//           <div className={style.alternativeLogin}>
//             <br />
//             <h3 className={style.signin}>
//               Don't have an account?{" "}
//               <span>
//                 <a
//                   href="#/"
//                   className={action === "Sign Up" ? "submit gray" : "submit"}
//                 >
//                   <Link to={"/signup"}>Sign Up</Link>
//                 </a>
//               </span>
//             </h3>

//             {/* <h3 className={style.signin}>
//               Don't have an account?
//               <span>
//                 <a
//                   href="#/"
//                   className={action === "Sign Up" ? "submit gray" : "submit"}
//                 >
//                   <Link to={"/signup"}>Sign Up</Link>
//                 </a>
//               </span>
//             </h3> */}

//             <h6 className={style.signinicons}>Or log in with</h6>
//             <br />
//             <div className={style.socialIcons}>
//               <a href="https://accounts.google.com/">
//                 <FcGoogle className={style.google} onClick={() => navigate('home')}/>
//               </a>
//               {/* <FaXTwitter className={style.twitter} /> */}
//               <FaApple className={style.facebook} onClick={() => navigate('home')}/>
//             </div>
//           </div>
//         </main>
//         <aside>
//           <img className={style.sideimage} src={Image2} alt="signin_image" />
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

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



 import React, { useState} from "react";
import style from "./style.module.css";
// import { useHistory} from 'react-router-dom'
// import { redirect } from "react-router-dom";
// import { useNavigation } from "../../components/hooks/useNavigation"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import CustomButton from "../../components/Button";
 import { Link } from "react-router-dom";
import Image2 from "../../components/Assets/images/image 2.png";
// import toast from 'react-hot-toast';
import { CustomInputField } from "../../components/Inputfield/InputField";
// import { useState } from "react";
// import { isUserLogin } from "../../../utilis/user";
// import axios from 'axios'

const SignIn = () => {
  const [email, setEmail] =
  useState("");
  const[password, setPassword]=
  useState("");
  // const [loggedIn, setLoggedIn] = useState (false);
  //  const history = useHistory();
  const handleLogin = async (e) =>
  {
    e.preventDefault();
    try {
      const response = await fetch ('https://bluwark-project-b8ax.onrender.com/bluwark/v1/signin', {
        method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:
      JSON.stringify({email, password})
    });
    if (!response.ok){
      throw new
      Error('Network response was not ok');
    }
      const data =await response.json();
      console.log (data);
      // history.push ('/BulwarkLanding');
    } catch (error) {
      // setError ('Invalid email or password');
      console.error ('There was a problem with the fetch operation:',error);
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
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} required/>
                
                {/* // onChange={handleEmail} */}
              
              <CustomInputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} required/>
               
                {/* // value={password} */}
                {/* // onChange={handlePassword} */}
              
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
           
          <CustomButton onClick={handleLogin}className={style.action}>
            Login
        </CustomButton>
       
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
