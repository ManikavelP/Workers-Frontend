import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignInPage from "../pages/LoginPage/SignInPage";
import RegisterPage from "../pages/LoginPage/RegisterPage";
import MyBookingsCard from "../pages/MyBookingsPage/MyBookingsCard";
import MyBookingsPage from "../pages/MyBookingsPage/MyBookingsPage";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage/>}/>
          <Route path="/login" element={< SignInPage/>} />
          <Route path="/register" element={< RegisterPage/>} />
          <Route path="/home" element={< MyBookingsPage/>} />






        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
