
import React from "react";
import SignIn from "./app/pages/SignInPage/SignIn";
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import VerifyEmail from "./app/pages/VerifyEmailPage/VerifyEmail";
import AccountConfirm from "./app/pages/AccountConfirmation/AccountConfirm";
import{ SignUp} from "./app/pages/SignUpPage/index";
import { ForgotPassword } from "./app/pages/ForgotPassword";
import { BulwarkLanding } from './app/pages/BulwarkLanding';
import { PrivacyPolicy } from "./app/pages/PrivacyPolicy";




// import React from 'react'
// import HeaderPage from './app/components/BulwarkHomePage/HeaderPage'
// import Hero from './app/components/BulwarkHeroPage/Hero'
// import Services from './app/components/BulwarkServices/Services'
// import { Protection } from './app/components/BulwarkProtection/Protection'
// import { Testimonials } from './app/components/BulwarkTestimonials/Testimonials'
// import { ContactForm } from './app/components/BulwarkContactForm/ContactForm'
// import { Footer }  from './app/components/Footer/Footer'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import IsProtectedRoute from './IsProtectedRoute';

import {BulwarkAboutUs} from './app/pages/BulwarkAboutUs'


 function App() {
  return (

    <div>


    <BrowserRouter>
      <Routes>
 
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="verifyemail" element={<VerifyEmail />} />
        <Route path="accountconfirm" element={<AccountConfirm />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="ForgotPassword" element={<ForgotPassword/>} />

        
        <Route path="privacypolicy" element={<PrivacyPolicy/>} />
       
        

        <Route path="BulwarkLanding/" element={<BulwarkLanding />} />

      
        
        
            </Routes>
       </BrowserRouter>

    
  );
}
export default App
