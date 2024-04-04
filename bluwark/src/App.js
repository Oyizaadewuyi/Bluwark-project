import React from "react";
import SignIn from "./app/components/SignInPage/SignIn";
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import VerifyEmail from "./app/components/VerifyEmailPage/VerifyEmail";
import AccountConfirm from "./app/components/AccountConfirmation/AccountConfirm";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="verifyemail" element={<VerifyEmail />} />
        <Route path="accountconfirm" element={<AccountConfirm />} />
        
            </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
