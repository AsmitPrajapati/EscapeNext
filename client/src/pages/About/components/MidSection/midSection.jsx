import React from "react";
import styles from "./midSection.module.css";
import TeamCard from "../TeamCard/teamCard";
import ViewList from "../../../../components/global/ViewList/viewList";


function MidSection(){

    const ourStoryData = [
        {
            title: "Company History",
            description:
            "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example."
        },
        {
            title: "Mission",
            description:
            "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example."
        },
        {
            title: "Company Values",
            description:
            "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example."
        }
    ];


    return(
        <div className={styles.container}>
            <div className={styles.first}>
                <div className={styles.firstTop}>Our Story</div>
                <div className={styles.firstBottom}>
                    {ourStoryData.map((item, index) => (
                        <div key={index} className={styles.bottomCard}>
                            <h2 className={styles.cardHeading}>{item.title}</h2>
                            <p className={styles.cardText}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.second}>
                <h1 className={styles.secondHeading}>Meet Our Team</h1>
                <div className={styles.cardSection}>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
                <ViewList />
            </div>
        </div>
    )
}
export default MidSection;
