import style from "./style.module.css";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import privacyPolicyImage from "../../components/Assets/images/Privacy_Policy.png";
import { PolicyAgreement } from "../../components/policyAgreement/data";
<<<<<<< HEAD
import {Footer } from "../../components/Footer/Footer"
=======
import { CustomFooter, Footer } from "../../components/Footer/Footer";
import PrivacyPolicyCheckbox from "../../components/PrivacyPolicyCheckBox/checkkbox";
import Button from "../../components/Button";
>>>>>>> 349509c34e9f2d8de65b53c7397f20b824835e40

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
          <br />
<PrivacyPolicyCheckbox/>

<button className={style.btn}>Submit</button>
        </div>
<<<<<<< HEAD
        <div>
          </div>
=======


        <div className={style.Footer}> 
          <CustomFooter />
        </div>
>>>>>>> 349509c34e9f2d8de65b53c7397f20b824835e40
      </section>
      <Footer />
        
    </main>
  );
};
