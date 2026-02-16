import React from "react"
import styles from "./inputField.module.css"

function Input({label,type,placeholder,value,icon,name,onChange,width}){
    return(
        <div className={styles.FormField} style={{ width: width || "100%"}}>
            <div className={styles.FormInputLabelContainer}>
                {icon}
                <label className={styles.FormInputLabel}>{label}</label>
            </div>
            <input 
                className={styles.FormInput}
                type={type}
                placeholder={placeholder}
                name={name} value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default Input;
