import React from "react";
import Styles from "./propertyCard.module.css";
import { useNavigate } from "react-router-dom";

function PropertyCard({ property = {} }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!property?._id) return;
    navigate(`/property/${property._id}`);
  };
  return (
    <div className={Styles.card}>
      <div className={Styles.cardImg}>
        <img
          className={Styles.img}
          src={property?.photos?.[0] || '/assets/fallback.jpg'}
          alt={property?.basicInfo?.propertyName || 'property image'}
          loading="lazy"
        />
        <div className={Styles.discountTag}>{property?.basicInfo.discount || ''}</div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.hotelDetails}>
          <div className={Styles.hotelInfo}>
            <h2 className={Styles.hotelName}>
              {property?.basicInfo?.propertyName || "Unknown"}
            </h2>
            <p className={Styles.subInfo}>
              {property?.basicInfo?.subInfo || ""}
            </p>
          </div>
          <div className={Styles.ratingDetails}>
            <div className={Styles.rating}>
              <span className={Styles.ratingScore}>
                {property?.basicInfo.rating ?? 0}/5
              </span>
              {property?.basicInfo.ratingText || ""}
            </div>
            <p className={Styles.review}>{property?.basicInfo.reviews ?? 0} Reviews</p>
          </div>
        </div>
        <p className={Styles.hotelCategory}>{property?.basicInfo.category || ''}</p>
        <div className={Styles.roomDetails}>
          <div className={Styles.roomInfo}>
            <p className={Styles.feature}>{property?.basicInfo.roomType || ""}</p>
            <p>{property?.basicInfo.bed || ""}</p>
            <p>{property?.basicInfo.bathroom || ""}</p>
          </div>
          <div className={Styles.priceDetails}>
            <p className={Styles.price}>{property?.basicInfo.price ? `₹${property.basicInfo.price}` : 'N/A'}</p>
            <p>+ ${property?.basicInfo.taxInfo || ""} Taxes and fees</p>
            <p>{property?.basicInfo.duration || ""}Per Night </p>
          </div>
        </div>
        <div className={Styles.tagsInfo}>
          <div className={Styles.tags}>
            {property?.basicInfo?.tags?.map((tag, index) => (
              <p className={Styles.tag} key={index}>
                {tag}
              </p>
            ))}
          </div>
          <button className={Styles.bookNowBtn} onClick={handleClick}>
            See booking options{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;
