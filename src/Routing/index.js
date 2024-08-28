import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Register from "../Screens/Register";
import Login from "../Screens/Login";
import UserInfo from "../Screens/UserInfo";
import Search from "../Screens/Search";
import Events from "../Screens/Events";
import Contact from "../Screens/Contact";
import Aboutus from "../Screens/Aboutus";
import FAQs from "../Screens/FAQs";
import SearchProfile from "../Screens/SearchProfile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/SearchProfile" element={<SearchProfile />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
