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
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <SideBar />
                <MenusContainer />
            </BrowserRouter>
        </>
    );
}

export default App;
