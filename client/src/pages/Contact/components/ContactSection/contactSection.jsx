import React from "react";
import styles from "./contactSection.module.css"
import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BASE_URL } from "../../../../utils/constants";
import { toast } from "react-toastify";

function ContactSection(){

    const contactInfo = [
        { icon: <Phone size={20} />, text: "+923041234567" },
        { icon: <Mail size={20} />, text: "eskapenext13@gmail.com" },
        { icon: <MapPin size={20} />, text: "Glassplace, Near Cool Avenue, Boson" },
        { icon: <Facebook size={20} />, text: "Eskapenextforyou" },
        { icon: <Instagram size={20} />, text: "__Eskapenextforyou13__" }
    ];

    const formFields = [
        { label: "name", icon: <Phone size={18} /> },
        { label: "email", icon: <Mail size={18} /> },
        { label: "phone", icon: <Phone size={18} /> },
        { label: "address", icon: <MapPin size={18} /> },
        { label: "message", icon: <Mail size={18} /> }
    ];

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/contact/post`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                message: ""
            });

            if (data.success) {
                toast.success("Submitted Successfully") 
            } else {
                toast.error("Error");
            }
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>Get Your Instant FreeQuote Now</h1>
                <h3 className={styles.subTitle}>Qaclipiscing elit, sed do elusmod tempor.</h3>
                <p className={styles.description}>Adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

                {contactInfo.map((item, index) => (
                    <div key={index} className={styles.contact}>
                        <div className={styles.contactIcon}>{item.icon}</div>
                        <p className={styles.contactText}>{item.text}</p>
                    </div>
                ))}     
            </div>
            <div className={styles.rightContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {formFields.map((field, index) => (
                        <div key={index} className={styles.inputField}>
                            <label className={styles.label}>
                                <div className={styles.labelIcon}>{field.icon}</div>
                                <h1 className={styles.labelName}>{field.label}</h1>
                            </label>
                            <input className={styles.input} name={field.label} value={formData[field.label]} onChange={handleChange}/>
                        </div>  
                    ))}
                    <button className={styles.submitBtn}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ContactSection;








