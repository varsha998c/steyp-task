import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";

function MainRouter() {
    return (
        <Routes>
            <Route path="/*" element={<AppRouter />} />
        </Routes>
    );
}

export default MainRouter;
