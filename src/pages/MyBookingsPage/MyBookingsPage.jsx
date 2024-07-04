import React from "react";
import MyBookingsCard from "./MyBookingsCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MyBookingsPage = (prop) => {
  const [isActive, setIsActive] = useState(prop.status);
  const [mybookings, setmybookings] = useState();

useEffect(()=>{
  const getData = async (data) => {
    try {
      const response = await axios.post(
        "https://thozhilali-backend.onrender.com/Worker/customers",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setmybookings(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  const requestData = { name: prop.name, id: prop.iD };
  getData(requestData);

})

  const toggleStatus = async() => {
    try{
      const response=await axios.put("https://thozhilali-backend.onrender.com/Worker/status",{id:prop.iD});
      setIsActive(response.data.message);
    }
    catch(err){
      console.log(err);
    }
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
        {mybookings && mybookings.map((item,index)=>{
          return(<MyBookingsCard key={index} uid={item.id} wid={prop.iD}  name={item.name} phoneno={item.phone} date={item.date} skill={item.work} status={item.status}/>)
        })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
