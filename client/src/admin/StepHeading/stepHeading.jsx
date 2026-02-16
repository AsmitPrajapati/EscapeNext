import styles from "./stepHeading.module.css";

export default function StepHeading() {
    return(

        <div className={styles.basicHeader}>
            <h2 className={styles.basicTitle}>Basic Information</h2>
            <p className={styles.subTitle}>
            Please fill in details of your property
            </p>
        </div>
    )
}