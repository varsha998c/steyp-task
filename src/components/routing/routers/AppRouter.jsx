import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../general/Header";
import Main from "../../general/Main";
import Profile from "../../general/Profile";
import CompletedAssessments from "../../includes/assessments/CompletedAssessments";
import Learning from "../../includes/Learning";
import MenusContainer from "../../includes/MenusContainer";
import SideBar from "../../includes/SideBar";
import Tech from "../../includes/Tech";
import CompletedWorkshops from "../../includes/workshops/CompletedWorkshops";
import Assessments from "../../screens/Assessments";
import Certification from "../../screens/Certification";
import Challeges from "../../screens/Challeges";
// import CompletedPractice from "../../includes/assessments/CompletedPractice";
import FreeGround from "../../screens/FreeGround";
import Home from "../../screens/Home";
import NewContent from "../../screens/NewContent";
import Practice from "../../screens/Practice";
import Workshop from "../../screens/Workshop";
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
