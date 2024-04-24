
import style from "./style.module.css";

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className={style.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={style.checkboxCustom}></span>
      {label}
    </label>
  );
};


