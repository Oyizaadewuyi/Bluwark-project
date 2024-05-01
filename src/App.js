
import React from "react";
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import SignIn from "./app/pages/SignInPage/SignIn";
import VerifyEmail from "./app/pages/VerifyEmailPage/VerifyEmail";
import AccountConfirm from "./app/pages/AccountConfirmation/AccountConfirm";
import{ SignUp} from "./app/pages/SignUpPage/index";
import { ForgotPassword } from "./app/pages/ForgotPassword";
import { BulwarkLanding } from './app/pages/BulwarkLanding';
import  {PrivacyPolicy}  from "./app/pages/PrivacyPolicy/index";
import Test from "./app/pages/test2";
import Quiz from "./app/pages/Quiz/index";


import {BulwarkAboutUs} from './app/pages/BulwarkAboutUs';
import {ProductPage} from "./app/pages/ProductPage";
import { BulwarkEducation } from "./app/pages/BulwarkEducation";



 function App() {
  return (
		<div>
      
			<BrowserRouter>
				<Routes>
					<Route index element={<BulwarkLanding />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="verifyemail" element={<VerifyEmail />} />
					<Route path="accountconfirm" element={<AccountConfirm />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="ForgotPassword" element={<ForgotPassword />} />
					<Route path="privacypolicy" element={<PrivacyPolicy />} />
					<Route path="productpage" element={<ProductPage />} />

					<Route path="Education" element={<BulwarkEducation />} />
					<Route path="bulwarkAboutUs/" element={<BulwarkAboutUs />} />
          <Route path="quiz/" element={<Quiz />} />
        <Route path="Test/" element={<Test />} />
				</Routes>
			</BrowserRouter>
		</div>
  );
}
export default App
