import style from "./style.module.css";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import privacyPolicyImage from "../../components/Assets/images/Privacy_Policy.png";
import { PolicyAgreement } from "../../components/policyAgreement/data";

import { CustomFooter } from "../../components/Footer/Footer";
// import Button from "../../components/Button";

import PrivacyPolicyCheckbox from "../../components/PrivacyPolicyCheckBox/data";
// import Button from "../../components/Education/Button";
 import {BackToTop} from "./privacy";


export const PrivacyPolicy = () => {
  return (
    <main className={style.container}>
      <HeaderPage className={style.headerPage} />
      <section>
        <img
          className={style.privacyPolicyImage}
          src={privacyPolicyImage}
          alt="privacyPolicy_Image"
        />
        <div className={style.privacycommitment}>
          <h2 className={style.commitmenttext}>
            Our privacy commitment to you
          </h2>
        </div>
        <div className={style.policy}>
          <PolicyAgreement />
           <BackToTop/>
          <br />
 <PrivacyPolicyCheckbox/>


<button className={style.btn}>Submit</button>
        </div>


        <div className={style.Footer}> 
          <CustomFooter />
        </div>
      </section>
      
        
    </main>
  );
};
