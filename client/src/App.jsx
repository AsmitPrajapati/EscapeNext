import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/local/signup/signup";
import Login from "./components/local/login/login";
import About from "./pages/About/about";
import Rough from "./pages/Rough Page/rough";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Destination from "./pages/Destinations/destination";
import SingleHotel from "./pages/SingleHotel/singleHotel";
import PayGateway from "./pages/PayGateway/payGateway";

import Dashboard from "./admin/pages/Dashboard/dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingsPage from "./admin/pages/Booking/bookings";
import LogoutBtn from "./components/global/Profile/profile";

import { AuthProvider } from "./Context/AuthContext/authContext";
import LoginPage from "./admin/pages/Login/loginPage";
import OtpPage from "./admin/pages/Otp/otpPage";
import ForgotPassword from "./admin/pages/Forgot Password/forgotPasssword";
// import { ModalProvider } from "./Context/ModalContext/modelContext";
// import HeroSection from "./components/global/HeroSection/heroSection";
// import LoginPage from "./pages/admin/pages/Login/loginPage";

function App() {
  return (
    <>
      <AuthProvider>
        {/* <ModalProvider> */}
        <BrowserRouter>
          {/* <HeroSection /> */}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rough" element={<Rough />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/singleHotel" element={<SingleHotel />} />
            <Route path="/PayGateway" element={<PayGateway />} />
            <Route path="/booking" element={<BookingsPage />} />
            <Route path="/log" element={<LogoutBtn />} />



            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/adminlogin" element={<LoginPage/>} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/forgot" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          draggable
          pauseOnHover
          // theme="light"
        />
        {/* </ModalProvider> */}
      </AuthProvider>
    </>
  );
}

export default App;
