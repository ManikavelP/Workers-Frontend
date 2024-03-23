import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignInPage from "../pages/LoginPage/SignInPage";
import RegisterPage from "../pages/LoginPage/RegisterPage";
import TeamPage from "../pages/TeamPage/Teampage";
import HomePage from "../pages/HomePage/HomePage";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage/>}/>
          <Route path="/login" element={< SignInPage/>} />
          <Route path="/register" element={< RegisterPage/>} />
          <Route path="/home" element={< HomePage/>} />
          <Route path="/OurTeam" element={< TeamPage/>} />







        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
