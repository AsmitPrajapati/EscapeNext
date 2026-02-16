import React from 'react';
import Styles from './singleHotel.module.css';
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
function SingleHotel() {
  return (
    <div >
      <ShortHeader />
      <div className={Styles.content}>
        <HotelCard />
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

export default SingleHotel;
