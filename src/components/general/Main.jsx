import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "../includes/SideBar";
import Schooling from "../includes/Schooling";
import Aaa from "../includes/Schooling";
import Tech from "../includes/Tech";
import Learning from "../screens/Learning";

function Main() {
    return (
        <>
            <Header />
            <Container>
                <Section className="wrapper">
                    <Left>
                        <SideBar />
                    </Left>
                    <Right>
                        <Tech />
                    </Right>
                </Section>
                <Learning />
            </Container>
        </>
    );
}

export default Main;
const Container = styled.div``;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 15%;
`;
const Right = styled.div`
    width: 85%;
    margin-top: 100px;
`;
