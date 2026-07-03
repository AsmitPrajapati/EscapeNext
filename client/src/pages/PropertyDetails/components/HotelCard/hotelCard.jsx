// import React from 'react';
// import Styles from './hotelCard.module.css';
// import Main from "../../../../../public/assets/mainHotel.jpg";

// function HotelCard({hotel}) {
//     // const hotels = [
//     //     {
//     //         title : "Day Use Room 10 AM to 5 PM, Check in and Check out on same day",
//     //         features : ["Fits 2 Adults","Meals included","Free cancellation","Per Night"]
//     //     }
//     // ]
    
//   return (
//     <div className={Styles.container}>
//         <div className={Styles.mainImg}>
//             <img className={Styles.img} src={Main} alt="Main Hotel Image" />
//         </div>
//         <div className={Styles.SubImg}>
//             <div className={Styles.upperImg}>
//                 {/* <img className={Styles.img} src={Main} alt="Main Hotel Image" /> */}
//             </div>
//             <div className={Styles.lowerImg}>
//                 {/* <img className={Styles.img} src={Main} alt="Main Hotel Image" /> */}
//             </div>   
//         </div>  
//         {hotel.map((hotel,index)=>(
//             <div key={index} className={Styles.content}>
//                     <h3 className={Styles.title}>{hotel.title}</h3>

//                 {hotel.features.map((feature, i) => (
//                     <div key={i} className={Styles.features}>
//                     {feature}
//                     </div>
//                 ))}
//                     <div className={Styles.priceRow}>
//                         <span className={Styles.price}>$180</span>
//                         <span className={Styles.tax}> + $13 Taxes and fees</span>
//                     </div>
//                     <div className={Styles.btns}>
//                         <button className={Styles.cta} >
//                             Book now for $220
//                         </button>
//                         <div className={Styles.more} >
//                             39 More Option
//                         </div>
//                     </div> 
//                 </div>  
//             ))}
//     </div>
       
//   )
// }

// export default HotelCard;




import React from 'react';
import Styles from './hotelCard.module.css';
import Main from "../../../../../public/assets/mainHotel.jpg";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
    const navigate = useNavigate();

      const handleClick = () => {
    // console.log("Hotel ID:", hotel);
    navigate("/pay-gateway");
  };

  if (!hotel) return null;

  return (
    <div className={Styles.container}>
      
      <div className={Styles.mainImg}>
        <img className={Styles.img} src={Main} alt="Main Hotel Image" />
      </div>

      <div className={Styles.SubImg}>
        <div className={Styles.upperImg}></div>
        <div className={Styles.lowerImg}></div>
      </div>  

      <div className={Styles.content}>
        <h3 className={Styles.title}>{hotel.name  }</h3>

        {hotel.features?.map((feature, i) => (
          <div key={i} className={Styles.features}>
            {feature}
          </div>
        ))}

        <div className={Styles.priceRow}>
          <span className={Styles.price}>{hotel.price}</span>
          <span className={Styles.tax}> + ${hotel.taxes} Taxes and fees</span>
        </div>

        <div className={Styles.btns}>
          <button className={Styles.cta} onClick={handleClick} >
            Book now for ${hotel.totalPrice}
          </button>
          <div className={Styles.more}>
            More Options
          </div>
        </div> 
      </div>  

    </div>
  )
}

export default HotelCard;