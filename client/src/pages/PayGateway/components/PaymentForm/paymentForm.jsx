import React from "react";
import styles from "./paymentForm.module.css";

function PaymentForm() {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <h2 className={styles.title}>Secure Payment</h2>
            <div className={styles.section}>
                <p className={styles.label}>Credit-Debit Card</p>
                <div className={styles.cardIcons}>
                <img src="#" alt="Visa" />
                <img src="#" alt="MasterCard" />
                <img src="#" alt="RuPay" />
                <img src="#" alt="Amex" />
                </div>
            </div>
            <div className={styles.section}>
                <label className={styles.label}>Card Number</label>
                <input type="text" placeholder="Name Card" className={styles.input} />
            </div>
            <div className={styles.section}>
                <label className={styles.label}>Name Card</label>
                <input type="text" placeholder="Expiry Date (aMM/Y)" className={styles.input} />
            </div>
            <div className={styles.section}>
                <label className={styles.label}>CCV</label>
                <input type="text" placeholder="CCV" className={styles.input} />
            </div>
            <div className={styles.checkboxRow}>
                <input type="checkbox" id="billing" />
                <label htmlFor="billing">Billing address same as guest information</label>
            </div>
            <button className={styles.payBtn}>Pay Now</button>
        </div>
    </div>
  );
}

export default PaymentForm;
