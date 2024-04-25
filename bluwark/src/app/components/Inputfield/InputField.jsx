import React from 'react';
import style from './style.module.css'

export const CustomInputField = ({ label, type, placeholder, value, id, name, onChange }) => {
  return (
    <div className={style.input_container }>
      <label className={style.input_label} htmlFor={name}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.input_field}
        name={name}
      />
    </div>
  );
};
