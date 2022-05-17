import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "../general/Main";
import LearningSection from "../screens/LearningSection";
import Practice from "../screens/Practice";
const MenusContainer = () => {
    return (
        <Cover>
            <h2>Tech Schooling</h2>
            <Div>
                <Ul>
                    <Li to="/dashboard">Dashboard</Li>
                    <Li to="/">Learning</Li>
                    <Li to="/practice">Practices</Li>
                    <Li to="dashboard/">Workshops</Li>
                    <Li to="/">Assessments</Li>
                    <Li to="/">New Content</Li>
                    <Li to="/">Certification</Li>
                </Ul>
            </Div>
            <Routes>
                <Route path="/" element={<LearningSection />} />
                <Route path="dashboard" element={<Main />} />
                <Route path="practice" element={<Practice />} />
            </Routes>
        </Cover>
    );
};

export default MenusContainer;

const Div = styled.div`
    width: 100%;
    height: 50px;
    box-shadow: 14px 8px 36px -6px #c2bdbb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-left: 250px; */
`;
const Ul = styled.div`
    display: flex;
    width: 74%;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
`;
const Li = styled(Link)`
    min-width: fit-content;
    display: inline-block;
    color: rgb(113, 113, 113);
    font-size: 15px;
    margin-right: 55px;
    cursor: pointer;
    font-family: "gordita_regular";
    &:hover {
        color: rgb(95, 209, 138);
    }
    &:last-child {
        margin-right: 0;
    }
`;
const Cover = styled.div`
    margin-top: 98px;
    margin-left: 265px;
    width: 81%;
    h2 {
        text-transform: capitalize;
        font-family: gordita_medium;
        font-size: 23px;
        margin-bottom: 19px;
    }
`;
