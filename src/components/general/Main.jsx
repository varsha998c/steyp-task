import React from "react";
import styled from "styled-components";
import Tech from "../includes/Tech";

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
