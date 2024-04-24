import React, { useState } from "react";
import style from "./style.module.css";

const PrivacyPolicyCheckbox = () => {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const handlePrivacyChange = () => {
    setPrivacyChecked(!privacyChecked);
  };

  const handleMarketingChange = () => {
    setMarketingChecked(!marketingChecked);
  };

  return (
    <div className={style.checkboxContainer}>
      <label className={style.checkboxLabel}>
        <input
          type="checkbox"
          checked={privacyChecked}
          onChange={handlePrivacyChange}
        />
        <span className={style.checkboxCustom}></span>
        I understand and agree that my personal data will be collected and processed according to the Privacy policies and unconditionally agree and accept the Terms of use
      </label>
      <label className={style.checkboxLabel}>
        <input
          type="checkbox"
          checked={marketingChecked}
          onChange={handleMarketingChange}
        />
        <span className={style.checkboxCustom}></span>
        Please send me information about new product releases, price changes, and special offers from Bulwark. I am aware that my consent could be revoked at any time by clicking the unsubscribe link inside any email received from Bulwark.
      </label>
    </div>
  );
};

export default PrivacyPolicyCheckbox;
