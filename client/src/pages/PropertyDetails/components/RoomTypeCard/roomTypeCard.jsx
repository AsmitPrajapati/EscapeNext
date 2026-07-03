import React from 'react';
import Styles from './roomTypeCard.module.css';

function RoomTypeCard() {
    const options = [
        {
            title: "Room with Free Cancellation",
            features: [
                "Free Cancellation",
                "Complimentary Wifi",
                "Breakfast included",
                "Enjoy Complimentary 2 pint(s) of Beer",
                "20% off on Food & Beverage services",
                "Housekeeping",
            ],
            price: "$240",
            note: "Only One Room Left",
        },
        {
            title: "Room with Free Cancellation",
            features: ["Free Cancellation", "Complimentary Wifi"],
            price: "$180",
            note: "Only One Room Left",
        },
    ];
    const amenities = [
        "Western Toilet",
        "Shower",
        "Geyser",
        "Air Conditioning",
    ];
     return (
    <div className={Styles.container}>
        <div className={Styles.header}>
            <div className={Styles.headerItem}><span>1 Room Type</span></div>
            <div className={Styles.headerItem}><span>Options</span></div>
            <div className={Styles.headerItem}><span>Price</span></div>
        </div>

        <div className={Styles.roomContent}>
            <div className={Styles.left}>
                <div className={Styles.imgSection}>
                    <img className={Styles.img}
                        // src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                        alt="room"
                    />
                </div>
                <div className={Styles.roomInfo}>
                    <div className={Styles.roomName}>Deluxe Room with Lake View</div>
                    <div className={Styles.subInfo}>
                        <span>18 sqm</span>•<span>2 people</span>•<span>1 queen bed</span>
                    </div>
                </div>
                <div className={Styles.amenities}>
                    {amenities.map((a, i) => (
                        <li key={i} className={Styles.amenitie}>{a}</li>
                    ))}
                    <div className={Styles.more}>See More</div>
                </div>
            </div>

            <div className={Styles.right}>
                {options.map((opt, i) => (
                    <div key={i} className={Styles.options}>
                        <div className={Styles.optionBox}>
                            <h5 className={Styles.title}>{opt.title}</h5>
                            {opt.features.map((f, j) => (
                            <div className={j === 0 ? Styles.firstItem: Styles.features} key={j}>✓ {f}</div>
                            ))}
                        </div>   
                        <div className={Styles.priceBox}>
                            <span className={Styles.offer}>20% OFF</span>
                            <div>
                                <strong className={Styles.price}>{opt.price}</strong>
                                <small className={Styles.tax}> + $13 Taxes and fees</small>
                            </div>
                            <p className={Styles.duration}>per night</p>
                            <p className={Styles.note}>{opt.note}</p> 
                            <button className={Styles.bookBtn}>Book now</button>                       
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default RoomTypeCard;
