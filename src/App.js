import "./App.css";
import Header from "./components/general/Header";
import Main from "./components/general/Main";
import Schooling from "./components/includes/Schooling";
import "./assets/css/style.css";
import LearningSection from "./components/screens/LearningSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Learning from "./components/includes/Learning";
import MenusContainer from "./components/includes/MenusContainer";
import SideBar from "./components/includes/SideBar";
import Home from "./components/screens/Home";
import { useState } from "react";
function App() {
    const [dash, setDash] = useState(true);
    return (
        <>
            <BrowserRouter>
                <Header />
                <SideBar />
                {dash ? <Home setDash={setDash} /> : <MenusContainer />}
                {/* <MenusContainer /> */}
            </BrowserRouter>
        </>
    );
}

export default App;
