// function StepIndicator({ currentStep, totalSteps, steps }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "2rem",
//       }}
//     >
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           style={{ display: "flex", alignItems: "center", flex: 1 }}
//         >
//           <div
//             style={{
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontWeight: 600,
//               backgroundColor:
//                 index < currentStep
//                   ? "#10b981"
//                   : index === currentStep
//                   ? "#0066ff"
//                   : "#e0e0e0",
//               color:
//                 index < currentStep || index === currentStep ? "white" : "#999",
//             }}
//           >
//             {index < currentStep ? "✓" : index + 1}
//           </div>
//           {index < steps.length - 1 && (
//             <div
//               style={{
//                 flex: 1,
//                 height: "2px",
//                 backgroundColor: index < currentStep ? "#10b981" : "#e0e0e0",
//                 margin: "0 0.5rem",
//               }}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default StepIndicator;

import styles from "./stepIndicator.module.css";

function StepIndicator({ currentStep, steps }) {
  return (
    <div className={styles.stepsContainer}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <>
            <div className={styles.step} key={index}>
              <div className={`${styles.stepNumber} 
                ${isActive ? styles.active : ""} 
                ${isCompleted ? styles.completed : ""}`}
              >
                {isCompleted ? "✓" : index + 1}
              </div>

              <span
                className={`${styles.stepLabel} 
                  ${isActive ? styles.active : ""} 
                  ${isCompleted ? styles.completed : ""}`}
              >
                {step}
              </span>              
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${styles.stepConnector} ${isCompleted ? "completed" : ""}`}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

export default StepIndicator;
