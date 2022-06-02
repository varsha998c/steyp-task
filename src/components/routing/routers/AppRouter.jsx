import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../general/Header";
import Profile from "../../general/Profile";
import SideBar from "../../includes/SideBar";
import Challeges from "../../screens/Challeges";
// import CompletedPractice from "../../includes/assessments/CompletedPractice";
import FreeGround from "../../screens/FreeGround";
import Home from "../../screens/Home";
import TechRouter from "./TechRouter";

function AppRouter() {
    const [isClick, setClick] = useState(false);
    return (
        <>
            <Header setClick={setClick} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tech-schooling/*" element={<TechRouter />} />
                <Route path="/free-ground" element={<FreeGround />} />
                <Route path="/challenges" element={<Challeges />} />
            </Routes>
            <SideBar />

            <Profile setClick={setClick} isClick={isClick} />
        </>
    );
}

export default AppRouter;
