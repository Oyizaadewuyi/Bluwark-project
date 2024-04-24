import style from "./style.module.css";
import HeaderPage from "../../components/BulwarkHomePage/HeaderPage";
import privacyPolicyImage from "../../components/Assets/images/Privacy_Policy.png";
import { PolicyAgreement } from "../../components/policyAgreement/data";
import {Footer } from "../../components/Footer/Footer"

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
        </div>
        <div>
          </div>
      </section>
      <Footer />
        
    </main>
  );
};
