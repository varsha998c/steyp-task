import React from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "../general/Main";
import Assessments from "../screens/Assessments";
import Certification from "../screens/Certification";
import LearningSection from "../screens/LearningSection";
import NewContent from "../screens/NewContent";
import Practice from "../screens/Practice";
import Workshop from "../screens/Workshop";
import Tech from "./Tech";

const MenusContainer = () => {
    return (
        <>
            <Cover>
                <h2>Tech Schooling</h2>
                <Div>
                    <Ul>
                        <Li activeclassName="active" to="/tech-schooling">
                            Dashboard
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/professions"
                        >
                            Learning
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/practices/"
                        >
                            Practices
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/workshops"
                        >
                            Workshops
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/assessments"
                        >
                            Assessments
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/new-content"
                        >
                            New Content
                        </Li>
                        <Li
                            activeclassName="active"
                            to="/tech-schooling/certificate"
                        >
                            Certification
                        </Li>
                    </Ul>
                </Div>
            </Cover>
            <Outlet />
        </>
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
const Li = styled(NavLink)`
    min-width: fit-content;
    display: inline-block;
    color: rgb(113, 113, 113);
    font-size: 15px;
    margin-right: 55px;
    cursor: pointer;
    font-family: "gordita_regular";
    &:last-child {
        margin-right: 0;
    }
    &.active {
        color: rgb(95, 209, 138);
    }
`;
const Cover = styled.div`
    margin-top: 80px;
    margin-left: 76px;
    width: 93%;
    padding: 20px 0;
    h2 {
        text-transform: capitalize;
        font-family: gordita_medium;
        font-size: 23px;
        margin-bottom: 19px;
    }
`;
