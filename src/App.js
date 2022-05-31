import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainRouter from "./components/routing/routers/MainRouter";

function App() {
    const [dash, setDash] = useState(true);
    const [free, setFree] = useState(false);
    return (
        <>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
