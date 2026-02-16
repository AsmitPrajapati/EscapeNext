import React, { useEffect,useState } from "react";
import styles from "./aboutUs.module.css";
import LeftArrow from "../../../../../public/assets/LeftArrow.svg"
import RightArrow from "../../../../../public/assets/RightArrow.svg"
import ViewList from "../../../../components/global/ViewList/viewList";
import { BASE_URL } from "../../../../utils/constants";

function AboutUs(){

    const [clients, setClients] = useState([]);

    const clientData = async () => {
        try {
            const res = await fetch(`${BASE_URL}/clients/get`);
            const data = await res.json();
            setClients(data.data);
        } catch (error) {
            console.error(err);
        } 
    }; 

    useEffect(() => {
            clientData();
        }, []);
        
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.heading}>
                    What Our Clients Say <span className={styles.highlight}>About Us</span>
                </p>
                <div className={styles.arrows}>
                    <div className={styles.leftArrow}>
                        <img src={LeftArrow}/>
                    </div>
                    <div className={styles.rightArrow}>
                        <img src={RightArrow}/>
                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                {clients.map((client,index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.profile}>
                            <div className={styles.imgSection}></div>
                            <h1 className={styles.name}>{client.name}</h1>
                        </div>
                        <div className={styles.discription}>
                            {client.description}
                        </div>
                    </div> 
                ))}                 
            </div>
            <ViewList />
        </div>    
    )
}
export default AboutUs;