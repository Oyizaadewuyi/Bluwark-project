
import React from "react";
import SignIn from "./app/pages/SignInPage/SignIn";
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import VerifyEmail from "./app/pages/VerifyEmailPage/VerifyEmail";
import AccountConfirm from "./app/pages/AccountConfirmation/AccountConfirm";
import{ SignUp} from "./app/pages/SignUpPage/index";
import { ForgotPassword } from "./app/pages/ForgotPassword";
import { BulwarkLanding } from './app/pages/BulwarkLanding';
import { PrivacyPolicy } from "./app/pages/PrivacyPolicy";


import {BulwarkAboutUs} from './app/pages/BulwarkAboutUs';


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
       
        

        <Route path="bulwarkLanding/" element={<BulwarkLanding />} />

        <Route path="BulwarkAboutUs/" element={<BulwarkAboutUs />} />



      
            </Routes>
       </BrowserRouter>

    </div>
  );
}
export default App
