import React from 'react';
import style from './style.module.css'

export const CustomInputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className={style.input_container }>
      <label className={style.input_label} htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.input_field}
      />
    </div>
  );
};
