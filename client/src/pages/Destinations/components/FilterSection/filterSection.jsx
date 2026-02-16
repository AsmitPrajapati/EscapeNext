import React from "react";
import Styles from "./filterSection.module.css";
import CheckboxFilter from "../CheckboxFilter/checkboxFilter";

function FilterSection({filterType,children}){
    return(
        <div className={Styles.container}>
            <div className={Styles.filterHead}>
                <p className={Styles.head}>{filterType}</p>
                <p className={Styles.clear}>Clear</p>
            </div>
            {children}
        </div>
    )
}
export default FilterSection;
