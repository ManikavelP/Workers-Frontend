import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MyBookingsPage from "../MyBookingsPage/MyBookingsPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
    const navigate = useNavigate();
    const loc = useLocation();
    const receivedId = loc.state?.id;
    const receivedname = loc.state?.name;
    const receivedstatus=loc.state?.status;
    useEffect(() => {
      if (!loc.state) {
        navigate("/login");
      }
    }, [navigate, loc.state]);
    return (
        <>
            <div className="bg-backGround">
                <Navbar name={receivedname}/>

                <div>
                    <MyBookingsPage name={receivedname} iD={receivedId} status={receivedstatus}/>
                </div>

                <div className="mt-36">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;
