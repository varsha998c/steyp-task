import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SideBar from "../includes/SideBar";
import Schooling from "../includes/Schooling";
import Aaa from "../includes/Schooling";
import Tech from "../includes/Tech";
import Learning from "../includes/Learning";

function Main() {
    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Right>
                        <Tech />
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default Main;
const Container = styled.div`
    /* margin-top: 200px; */
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 15%;
`;
const Right = styled.div`
    width: 100%;
    /* margin-top: 100px; */
`;
