import React from "react";
import Styles from "./checkboxFilter.module.css";

function CheckboxFilter({ text, checked = false, onChange }) {
  return (
    <div className={Styles.container}>
      <input
        type="checkbox"
        className={Styles.box}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <label className={Styles.text}>{text}</label>
    </div>
  );
}
export default CheckboxFilter;
