import React from "react";
import MyBookingsCard from "./MyBookingsCard";
import { useState } from "react";

const MyBookingsPage = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full h-screen bg-backGround">
      <div className="w-full h-[8%]  items-center flex justify-center  ">
        <h1 className=" flex text-2xl font-semibold text-white">
          Your Bookings
        </h1>
      </div>

      <div className="w-full h-[20%]  flex place-content-center items-center justify-center">
        <div className="w-[60%] h-[50%] items-center justify-center flex ">
          <div className=" mx-auto flex items-center justify-center  place-content-center ">
            <h1 className="w-28 font-semibold text-white">Your Status:</h1>

            <button
              className={`py-2 px-4 rounded-full text-white ${
                isActive ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleStatus}
            >
              {isActive ? "Active" : "Inactive"}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  h-full flex items-center justify-center bg-backGround">
        <div className="w-[85%] h-[85%] bg-white relative overflow-x-auto shadow-md ">
          <table className="w-full text-center  table-auto">
            <thead className="text-md text-gray-700 bg-gray-100 uppercase">
              <tr>
                <th scope="col" className="sm:px-12 px-20 py-5">
                  Customers
                </th>
                <th scope="col" className="px-8 py-5">
                  Work
                </th>
                <th scope="col" className="px-6 py-5">
                  Date
                </th>
                
                <th scope="col" className="px-8 py-5">
                  Confirmation
                </th>
              </tr>
            </thead>
            <tbody className="">
              <MyBookingsCard />
              <MyBookingsCard />
              <MyBookingsCard />
              <MyBookingsCard />
              <MyBookingsCard />
              <MyBookingsCard />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
