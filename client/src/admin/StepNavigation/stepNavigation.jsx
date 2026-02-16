import styles from "./stepNavigation.module.css";
export default function StepNavigation({
  onBack,
  onNext,
  nextDisabled,
  isLastStep,
}) {
  return (
    <div className={styles.actions}>
      <button type="button" onClick={onBack}  className={styles.btn}>
        Cancel
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className={styles.btn}
      >
        {isLastStep ? "Submit" : "List Property"}
      </button>
    </div>
  );
}