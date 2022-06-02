import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import CompletedPractice from "../../includes/practices/CompletedPractice";
import FreeGround from "../../screens/FreeGround";
import Home from "../../screens/Home";
import NewContent from "../../screens/NewContent";
import Practice from "../../screens/Practice";
import Workshop from "../../screens/Workshop";
import LearningSpotlight from "../../includes/learning/LearningSpotlight";

function TechRouter() {
    console.log("++++++++++++++++++++++++++++");
    const [isClick, setClick] = useState(false);
    return (
        <>
            <MenusContainer />
            <Routes>
                <Route path="/" element={<Tech />} />
                <Route path="professions/" element={<Learning />} />
                <Route path="profession/:id" element={<LearningSpotlight />} />

                <Route path="practices/" element={<Practice />} />
                <Route
                    path="practices/completed-practices/"
                    element={<CompletedPractice />}
                />
                <Route path="workshops/" element={<Workshop />} />
                <Route
                    path="workshops/completed-workshops/"
                    element={<CompletedWorkshops />}
                />
                <Route path="assessments/" element={<Assessments />} />
                <Route
                    path="assessments/completed-assessments/"
                    element={<CompletedAssessments />}
                />
                <Route path="new-content/" element={<NewContent />} />
                <Route path="certificate/" element={<Certification />} />
            </Routes>
        </>
    );
}

export default TechRouter;
