import React from 'react';
import Styles from './payGateway.module.css';
import Footer from '../../components/global/Footer/footer';
import FooterStrip from '../../components/global/FooterStrip/footerStrip';
import Booking from './components/Booking/booking';
import Summary from './components/Summary/summary';
import Personal from './components/Personal/personal';
import RoomInfo from './components/RoomInfo/roomInfo';
import PaymentForm from './components/PaymentForm/paymentForm';

function PayGateway() {

    return (
        <div>
            <div className={Styles.payGateway}>
                <div className={Styles.container}>
                    <h1>Review your Booking</h1>
                </div>
                <div className={Styles.comp}>
                    <Booking />
                    <Summary />
                </div>
                <Personal />              
                <RoomInfo />
                <PaymentForm />
            </div>
            <Footer />
            <FooterStrip />
        </div>
    )
}
export default PayGateway;