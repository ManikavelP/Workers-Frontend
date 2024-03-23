import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MyBookingsPage from "../MyBookingsPage/MyBookingsPage";

const HomePage = () => {
    return (
        <>
            <div className="bg-backGround">
                <Navbar />

                <div>
                    <MyBookingsPage />
                </div>

                <div className="mt-36">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;
