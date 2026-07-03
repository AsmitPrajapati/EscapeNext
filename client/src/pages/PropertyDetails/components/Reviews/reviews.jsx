import React from "react";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Styles from "./reviews.module.css";

function Reviews() {
  const [active, setActive] = useState("All Reviews");
  const filters = [
    { name: "All Reviews", count: 540 },
    { name: "Group", count: 135 },
    { name: "Couple", count: 135 },
    { name: "Family", count: 135 },
    { name: "Business", count: 135 },
  ];

  const reviews = [
    {
      title: "Ideal for Groups",
      rating: 9.8,
      reviewText1: "Best for couple, family and friends also",
      reviewText2: "Best for couple, family and friends also",
    },
    {
      title: "Great Value Stay",
      rating: 9.8,
      reviewText1: "Best for couple, family and friends also",
      reviewText2: "Best for couple, family and friends also",
    },
    {
      title: "Value for Money Stay",
      rating: 9.8,
      reviewText1: "Best for couple, family and friends also",
      reviewText2: "Best for couple, family and friends also",
    },
    {
      title: "Ideal for Groups",
      rating: 9.8,
      reviewText1: "Best for couple, family and friends also",
      reviewText2: "Best for couple, family and friends also",
    },
    {
      title: "Best Stay Experience",
      rating: 9.8,
      reviewText1: "Best for couple, family and friends also",
      reviewText2: "Best for couple, family and friends also",
    },
  ];

  const overallRating = 8.0;
  const totalReviews = 1441;

  const ratingDetails = [
    { label: "Cleanliness", value: 8.8 },
    { label: "Value for Money", value: 9.8 },
    { label: "Staff", value: 9.1 },
    { label: "Location", value: 8.6 },
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <h1 className={Styles.totalReviews}>540 Reviews</h1>
        <div className={Styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActive(filter.name)}
              className={
                active === filter.name ? Styles.active : Styles.notActive
              }
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>
        {reviews.map((review, index) => (
          <div key={index} className={Styles.review}>
            {index === 0 && (
              <div className={Styles.mailInput}>
                <input
                  className={Styles.input}
                  type="text"
                  placeholder="Write a review"
                />
                <button className={Styles.contactBtn}>Contact</button>
              </div>
            )}
            <div className={Styles.title}>
              {review.title}
              <span className={Styles.rating}>{review.rating}</span>
            </div>
            <p className={Styles.text1}>{review.reviewText1}</p>
            <div className={Styles.text2}>
              <FaCircleUser size={21} />
              {review.reviewText2}
            </div>
          </div>
        ))}
        <div className={Styles.viewAll}>View All Reviews</div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.overallRating}>
            <span className={Styles.overall}>{overallRating}</span>
            <span className={Styles.excellent}>Excellent</span>
            <span className={Styles.total}>{totalReviews} Ratings</span>
        </div>
        {ratingDetails.map((item, index) => (
          <div key={index} className={Styles.row}>
            <div className={Styles.barContainer}>
              <div
                className={Styles.barFill}
                style={{ width: `${(item.value / 10) * 100}%` }}
              ></div>
            </div>
            <div className={Styles.labelValue}>
                <div className={Styles.label}>{item.label}</div>
                <div className={Styles.value}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
