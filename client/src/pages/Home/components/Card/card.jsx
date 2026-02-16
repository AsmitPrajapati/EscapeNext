// import React from "react";
// import styles from "./card.module.css";
// import Dubai from "../../../../../public/assets/dubai.jpg"
// function Card(){
//     return(
//         <div className={styles.container} >
//             <div className={styles.cardImg} >
//                 <img className={styles.img} src={Dubai} alt="Dubai"/>
//             </div>
//             <div className={styles.content}>
//                 <h1 className={styles.place}>Dubai</h1>
//             </div>
//         </div>       
//     )
// }
// export default Card;
import React from "react";
import styles from "./card.module.css";
import Dubai from "../../../../../public/assets/dubai.jpg";

function Card({ title = "Dubai", size = "md" }) {
  return (
    <div className={`${styles.card} ${size === "sm" && styles.cardSm} ${size === "md" && styles.cardMd} ${size === "lg" && styles.cardLg}`}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={Dubai} alt={title} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.place}>{title}</h2>
      </div>
    </div>
  );
}

export default Card;