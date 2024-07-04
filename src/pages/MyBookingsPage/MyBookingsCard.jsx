import React, { useState } from "react";
import axios from "axios";

const MyBookingsCard = (props) => {
  const [showAcceptButton, setShowAcceptButton] = useState(props.status);

  const handleReject = async () => {
    try {
      const response = await axios.post(
        "https://thozhilali-backend.onrender.com/Customer/deletebooking",
        {userId: props.uid,workerID: props.wid },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleAccept = async () => {
    try {
      const response = await axios.post(
        "https://thozhilali-backend.onrender.com/Worker/accept",
        {userId: props.uid,workerID: props.wid },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 203) {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
   setShowAcceptButton(!showAcceptButton);
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="sm:px-10 px-24 py-5 ">
        {props.name} <br /> +91-{props.phoneno}
      </td>
      <td className="sm:px-10 py-5 px-20 ">{props.skill}</td>
      <td className="sm:px-6 py-5 px-10">{props.date}</td>
      <td className="py-5 flex items-center justify-center gap-5 px-5">
        {!showAcceptButton ? (
          <>
            <button
              type="button"
              className="w-[70%] sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-green-500 text-white rounded-md hover:bg-backGround font-semibold"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              type="button"
              className="w-[70%] sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-red-500 text-white rounded-md hover:bg-backGround font-semibold"
              onClick={handleReject}
            >
              Reject
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-[70%] sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-green-500 text-white rounded-md hover:bg-backGround font-semibold"
          >
            Accepted
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyBookingsCard;
