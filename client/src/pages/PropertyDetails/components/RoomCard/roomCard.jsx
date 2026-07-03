import React from 'react';
import Styles from './roomCard.module.css';

function RoomCard() {
  const roomData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      title: "Luxury Room King Bed",
      area: "18 sqm",
      people: "2 people",
      bed: "1 queen bed or 2 separate beds",
      desc: "Non-refundable, Breakfast included",
      price: 220,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      title: "Room with Pool View",
      area: "18 sqm",
      people: "2 people",
      bed: "1 queen bed or 2 separate beds",
      desc: "Non-refundable, Breakfast included",
      price: 220,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
      title: "Luxury Room King Bed",
      area: "18 sqm",
      people: "2 people",
      bed: "1 queen bed or 2 separate beds",
      desc: "Non-refundable, Breakfast included",
      price: 220,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600585154207-6ee113d6c7b9?q=80&w=800",
      title: "Deluxe Family Room",
      area: "18 sqm",
      people: "2 people",
      bed: "1 queen bed or 2 separate beds",
      desc: "Non-refundable, Breakfast included",
      price: 220,
    },
  ];

  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>Rooms</h1>
        <div className={Styles.subContainer}>
          {roomData.map((room,index)=>(
            <div key={index}className={Styles.card}>
                <div className={Styles.img}></div>
                <h1 className={Styles.cardTitle}>{room.title}</h1>
                <div className={Styles.details}>
                    <div>{room.area}</div>
                    <div>{room.people}</div>
                    <div>{room.bed}</div>
                </div>
                <p className={Styles.description}>{room.desc}</p>
                <button className={Styles.btn}>Book now for ${room.price}</button>
            </div>
            ))}
        </div>
    </div>
  );
}

export default RoomCard;
