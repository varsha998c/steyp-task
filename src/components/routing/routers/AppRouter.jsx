import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../general/Header";
import Main from "../../general/Main";
import Learning from "../../includes/Learning";
import MenusContainer from "../../includes/MenusContainer";
import SideBar from "../../includes/SideBar";
import Tech from "../../includes/Tech";
import Assessments from "../../screens/Assessments";
import Certification from "../../screens/Certification";
import Challeges from "../../screens/Challeges";
import FreeGround from "../../screens/FreeGround";
import Home from "../../screens/Home";
import NewContent from "../../screens/NewContent";
import Practice from "../../screens/Practice";
import Workshop from "../../screens/Workshop";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/" element={<MenusContainer />}>
                        <Route path="/" element={<Tech />} />
                        <Route path="learning" element={<Learning />} />

                        <Route path="practice" element={<Practice />} />
                        <Route path="/workshop" element={<Workshop />} />
                        <Route path="/assessments" element={<Assessments />} />
                        <Route path="/new_content" element={<NewContent />} />
                        <Route
                            path="/certificate"
                            element={<Certification />}
                        />
                    </Route>
                    <Route path="/free-ground" element={<FreeGround />} />
                    <Route path="/challenges" element={<Challeges />} />
                </Route>
            </Routes>
            <SideBar />
        </>
    );
}

export default AppRouter;
