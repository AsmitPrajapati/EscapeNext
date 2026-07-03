import React from 'react';
import Styles from './propertyDetails.module.css';
import Footer from "../../components/global/Footer/footer"
import ShortHeader from './components/ShortHeader/shortHeader';
import HotelCard from './components/HotelCard/hotelCard';
import FooterStrip from "../../components/global/FooterStrip/footerStrip"
import HotelInfo from './components/hotelInfo/hotelInfo';
import InfoList from './components/InfoList/infoList';
import BookingSearchBar from './components/BookingSearchBar/BookingSearchBar';
import RoomTypeCard from './components/RoomTypeCard/roomTypeCard';
import RoomCard from './components/RoomCard/roomCard';
import ExploreArea from './components/ExploreArea/exploreArea';
import Reviews from './components/Reviews/reviews';
import HotelFacilities from './components/HotelFacilities/hotelFacilities';
import HotelPolicies from './components/HotelPolicies/hotelPolicies';

import { BASE_URL } from '../../utils/constants';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function PropertyDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

//   useEffect(() => {
//   const fetchHotel = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/api/hotel/${id}`);
//       // console.log(`${BASE_URL}/api/hotel/get/${id}`);
//       const data = await res.json();
//       console.log("Fetched hotel data:", data);

//       if (res.ok) {
//         setHotel(data.data);   // ✅ correct
//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching hotel:", error);
//     }
//   };

//   fetchHotel();
// }, [id]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchHotel = async () => {
        try {
          const res = await fetch(`${BASE_URL}/api/hotel/${id}`);
          const data = await res.json();
           console.log("Fetched hotel data:", data);

          if (!res.ok) {
            throw new Error(data.message || "Something went wrong");
          }

          setHotel(data.data);
         

        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchHotel();
    }, [id]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!hotel) return <h2>Hotel not found</h2>;

  
  return (
    <div >
      <ShortHeader  />
      <div className={Styles.content}>
        <HotelCard hotel={hotel}/>
        <HotelInfo />
        <InfoList />
        <BookingSearchBar />
        <RoomTypeCard />
        <RoomCard />
        <ExploreArea />
        <Reviews />
        <HotelFacilities />
        <HotelPolicies />
      </div>
      <Footer />
      <FooterStrip />
    </div>
  );
}

export default PropertyDetails;
