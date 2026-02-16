import React from "react";
import Styles from "./sidebar.module.css";
import FilterSection from "../FilterSection/filterSection";
import CheckboxFilter from "../CheckboxFilter/checkboxFilter";

function Sidebar(){
    const filters = [
        {
            type : "Tour Types",
            options : [
                "Nature Tours",
                "Adventure Tours",
                "Cultural Tours",
                "Food Tours",
                "City Tours",
                "Cruises Tours"
            ]
        },{
            type : "Price Night",
            options : [
                "0-2000",
                "2000- 4000",
                "4000- 8000",
                "8000- 10000"
            ]
        },{
            type : "Star Category",
            options : [
            "3 Star",
            "4 Star",
            "5 Star"
            ]
        },{
            type : "User Rating",
            options : [
                "Excellent",
                "Very Good",
                "Good"
            ]
        },{
            type : "Property Type",
            options : [
                "Apartments",
                "Hotels",
                "Villas",
                "Very Good",
                "Resorts"
            ]
        },{
            type : "Meals",
            options : [
                "Breakfast included",
                "Lunch included ",
                "Dinner included"
            ]
        }
    ];
    return(
        <div className={Styles.sidebar}>
            <div className={Styles.sidebarHeader}>
                <div className={Styles.headerContent}>
                    <p className={Styles.heading}>When are you traveling?</p>
                    <input className={Styles.dateFilter} type="date" />
                </div>
            </div>
            {filters.map((filter,index) => (
                <FilterSection key={index} filterType={filter.type}>
                    {filter.options.map((option,idx) => (
                     <CheckboxFilter key={idx} text={option} />
                    ))}
                </FilterSection>
            ))}   
        </div>
    )
}
export default Sidebar;

