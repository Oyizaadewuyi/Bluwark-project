
import style from "./style.module.css";

export const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className={style.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <h1>h</h1>
      <span className={style.checkboxCustom}></span>
      {label}
    </label>
    
  );
};


