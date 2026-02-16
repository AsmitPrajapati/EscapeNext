import React from "react";
import Styles from "./propertyCard.module.css";

function PropertyCard({hotel}){
    return(
        <div className={Styles.card}>
            <div className={Styles.cardImg}>
                <img className={Styles.img} src={hotel.image} alt="image" />
                <div className={Styles.discountTag}>{hotel.discount}</div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.hotelDetails}>
                    <div className={Styles.hotelInfo}>
                        <h2 className={Styles.hotelName}>{hotel.name}</h2>
                        <p className={Styles.subInfo}>{hotel.subInfo}</p>
                    </div>
                    <div className={Styles.ratingDetails}>
                        <div className={Styles.rating}>
                            <span className={Styles.ratingScore}>{hotel.rating}</span>
                            {hotel.ratingText}</div>
                        <p className={Styles.review}>{hotel.reviews} Reviews</p>                     
                    </div>
                </div>
                <p className={Styles.hotelCategory}>{hotel.category}</p>
                <div className={Styles.roomDetails}>
                    <div className={Styles.roomInfo}>
                        <p className={Styles.feature}>{hotel.roomType}</p>
                        <p>{hotel.bed}</p>
                        <p>{hotel.bathroom}</p>
                    </div>
                    <div className={Styles.priceDetails}>
                        <p className={Styles.price}>{hotel.price}</p>
                        <p>{hotel.taxInfo}</p>
                        <p>{hotel.duration}</p>
                    </div>
                </div>
                <div className={Styles.tagsInfo}>
                    <div className={Styles.tags}>
                        {hotel.tags.map((tag,index)=>(
                            <p className={Styles.tag} key={index}>{tag}</p>
                        ))} 
                    </div>
                    <button className={Styles.bookNowBtn}>See booking options </button>
                </div>
            </div>
        </div>
    )
}
export default PropertyCard;
