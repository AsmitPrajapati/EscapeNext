import React from 'react';
import Styles from './shortHeader.module.css';
import Header from "../../../../components/global/Header/header"

function ShortHeader() {
  return (
    <div className={Styles.container}>
       <Header />
    </div>
  );
}

export default ShortHeader;
