// import React from 'react';
// import { useState } from 'react';
// import Styles from './personal.module.css';
// import Input from '../../../../components/global/Input/inputField';

// function Personal() {
//      const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         persons: "",
//         state: "",
//         arrival: "",
//         depart: "",
//       });

//     function handleChange(event) {
//         console.log(event.target.value); 
//     }

//     const formFields = [
//         { label: "First Name", name: "firstName", type: "text", icon: "user" },
//         { label: "Last Name", name: "lastName", type: "text", icon: "user" },
//         { label: "Phone", name: "phone", type: "tel", icon: "phone" },
//         { label: "Email ID", name: "email", type: "email", icon: "mail" },
//         { label: "Total Person", name: "totalPerson", type: "number", icon: "users" },
//         { label: "Your State", name: "state", type: "text", icon: "map-pin" },
//         { label: "Arrived Date", name: "arrivedDate", type: "date", icon: "calendar" },
//         { label: "Depart Date", name: "departDate", type: "date", icon: "calendar" }
//     ];

//     const chunkArray = (arr, size) => {
//         const result = [];
//         for (let i = 0; i < arr.length; i += size) {
//             result.push(arr.slice(i, i + size));
//         }
//         return result;
//     };

//     const rows = chunkArray(formFields, 2); 

//     return (
//         <div className={Styles.container}>
//             <h1 className={Styles.title}>Personal Details</h1>
//             <div className={Styles.subContainer}>
//                 {rows.map((row,index)=>(
//                     <div key={index} className={Styles.rows}>
//                         {row.map((section,index)=>(
//                             <div key={index} 
//                                 className={Styles.section}>
//                                 <Input label={section.label} 
//                                 type={section.type} 
//                                 placeholder="" 
//                                 value="" 
//                                 name={section.name} 
//                                 onChange={handleChange}
//                                 width="100%"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div className={Styles.confirm}>
//                 <div className={Styles.checkbox}></div>
//                 <span className={Styles.confirmtext}>Confirm and save billing details to your profile</span>
//             </div>
//             <p className={Styles.addGuest}>+ Add Guest</p>
//         </div>
//     )
// }
// export default Personal;
import {
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";

import React, { useState } from "react";
import Styles from "./personal.module.css";
import Input from "../../../../components/global/Input/inputField";
import { BASE_URL } from "../../../../utils/constants";

function Personal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    persons: "",
    state: "",
    arrival: "",
    depart: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const formFields = [
    { label: "First Name", name: "firstName", type: "text", icon: <User size={20} /> },
    { label: "Last Name", name: "lastName", type: "text", icon: <User size={20} /> },
    { label: "Phone", name: "phone", type: "tel", icon: <Phone size={20} /> },
    { label: "Email ID", name: "email", type: "email", icon: <Mail size={20} /> },
    { label: "Total Person", name: "persons", type: "number", icon: <Users size={20} /> },
    { label: "Your State", name: "state", type: "text", icon: <MapPin size={20} /> },
    { label: "Arrived Date", name: "arrival", type: "date", icon: <Calendar size={20} /> },
    { label: "Depart Date", name: "depart", type: "date", icon: <Calendar size={20} /> },
  ];

  const rows = [];
  for (let i = 0; i < formFields.length; i += 2) {
    rows.push(formFields.slice(i, i + 2));
  }

  const handleSubmit = async (e) => {
    
    try{
      const response = await fetch(`${BASE_URL}/api/booking/post`,{
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(formData)
      })
      console.log("done");

      // const data = response.json();
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Personal Details</h1>

      <div className={Styles.subContainer}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={Styles.rows}>
            {row.map((field, index) => (
              <div key={index} className={Styles.section}>
                <Input
                  label={field.label}
                  type={field.type}
                  placeholder=""
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  icon={field.icon}  
                  width="100%"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={Styles.confirm}>
        <input type="checkbox" className={Styles.checkbox} />
        <span className={Styles.confirmtext}>
          Confirm and save billing details to your profile
        </span>
      </div>

      <p className={Styles.addGuest} onClick={handleSubmit}>+ Add Guest</p>
    </div>
  );
}

export default Personal;
