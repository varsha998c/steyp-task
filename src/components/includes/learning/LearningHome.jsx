import React from "react";
import CongratsBanner from "./CongratsBanner";
import styled from "styled-components";
import LearningSpotlight from "./LearningSpotlight";
import ExploreSkill from "./ExploreSkill";

function LearningHome() {
    console.log("in learning home");
    return (
        <Container>
            <Top>
                <LearningSpotlight />
            </Top>
            <Middle>
                <CongratsBanner />
            </Middle>
            <Bottom>
                <Heading>Explore skills - UI Engineer</Heading>
                <ExploreSkill />
            </Bottom>
        </Container>
    );
}

export default LearningHome;
const Container = styled.div`
    width: 95%;
    margin-left: 74px;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Middle = styled.div`
    width: 99%;
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`;
const Heading = styled.h3`
    font-family: "gordita_medium";
    font-size: 22px;
`;
