import React from "react";
import Learning from "../includes/Learning";
import styled from "styled-components";
import Header from "../general/Header";

function LearningSection() {
    return (
        <>
            <Header />
            <Container>
                <Section className="wrapper">
                    <Right>
                        <Learning />
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default LearningSection;
const Container = styled.div``;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 15%;
`;
const Right = styled.div`
    width: 100%;
    margin-top: 40px;
`;
