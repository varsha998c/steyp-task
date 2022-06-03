import styled from "styled-components";
import React from "react";
import Card from "./Card";

function ExploreSkill() {
    return (
        <Container>
            <Card />
        </Container>
    );
}

export default ExploreSkill;
const Container = styled.div`
    margin-top: 19px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    width: 99%;
`;
