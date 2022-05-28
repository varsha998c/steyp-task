import React from "react";
import styled from "styled-components";

function Certification() {
    return (
        <Container>
            <Item>
                <ImgContainer>
                    <img
                        src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                        alt=""
                    />
                </ImgContainer>
                <Right>
                    <Containers>
                        <Div>
                            <h3>UI Engineer Certification</h3>
                            <p>
                                You have completed your course. Now you can
                                apply for a certificate
                            </p>
                            <DateContainer>
                                <Start>
                                    <h2 className="start">
                                        started <span>29 sept 2020 </span>
                                    </h2>
                                </Start>
                                <End>
                                    <h2 className="start">
                                        completed
                                        <span> 27 oct 2021</span>
                                    </h2>
                                </End>
                            </DateContainer>
                        </Div>
                        <Stars>
                            <Score>
                                <div>
                                    <Star>8</Star>
                                    <Img
                                        className="star"
                                        src="https://steyp.com/static/media/star.ef254f4e.svg"
                                        alt=""
                                    />
                                </div>
                                <Total className="total">Total Score</Total>
                            </Score>
                            <View>View Certificate</View>
                        </Stars>
                    </Containers>
                </Right>
            </Item>
            <Item>
                <ImgContainer>
                    <img
                        src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/Backend_Developer_ACsVD3G.jpg"
                        alt=""
                    />
                </ImgContainer>
                <Right>
                    <Containers>
                        <Div>
                            <h3>Backend Developer Certification</h3>
                            <p>
                                You have completed your course. Now you can
                                apply for a certificate
                            </p>
                            <DateContainer>
                                <Start>
                                    <h2 className="start">
                                        started <span>2 nov 2021 </span>
                                    </h2>
                                </Start>
                                <End>
                                    <h2 className="start">
                                        completed
                                        <span> 14 dec 2021</span>
                                    </h2>
                                </End>
                            </DateContainer>
                        </Div>
                        <Stars>
                            <View className="verification">
                                Verification on process
                                <Imgs
                                    className="clock"
                                    src="https://steyp.com/static/media/clock.7f18d8bc.svg"
                                    alt=""
                                />
                            </View>
                        </Stars>
                    </Containers>
                </Right>
            </Item>
        </Container>
    );
}

export default Certification;
const Container = styled.div`
    height: 100%;
    background-color: rgb(249, 249, 251);
    padding: 25px;
    margin-top: 30px;
    width: 77%;
    margin-left: 270px;
`;
const Item = styled.div`
    display: flex;
    border: 1px solid #f0f0f0;
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    height: 220px;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const ImgContainer = styled.div`
    width: 300px;
    margin-right: 25px;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;

    img {
        width: 100%;
        display: block;
        border-radius: 6px;
        height: 100%;
    }
`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 300px);
    height: 100%;
`;
const Containers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 78%;
    background-color: rgb(249, 249, 251);
    border: 1px solid rgb(224, 224, 224);
    padding: 25px;
    border-radius: 6px;
    position: relative;
`;
const DateContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    min-height: 18px;
    width: 312px;
    border: 2px dashed rgb(16, 167, 112);
    background-color: rgb(231, 255, 246);
    border-radius: 5px;
    margin-top: 45px;
`;
const Start = styled.div`
    width: 50%;
    h2.start {
        font-size: 12px;
        color: rgb(106, 106, 106);
        font-family: "gordita_bold";
        margin-right: 5px;
        margin: 0;
    }
    span {
        font-size: 12px;
        font-family: "gordita_bold";
        color: rgb(16, 167, 112);
        font-style: italic;
    }
`;
const End = styled.div`
    width: 50%;

    h2.start {
        font-size: 12px;
        color: rgb(106, 106, 106);
        font-family: "gordita_bold";
        margin-right: 5px;
        margin: 0;
    }
    span {
        font-size: 12px;
        font-family: "gordita_bold";
        color: rgb(16, 167, 112);
        font-style: italic;
    }
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    h3 {
        font-size: 18px;
        color: rgb(57, 56, 56);
        font-family: "gordita_medium";
        margin-bottom: 5px;
    }
    p {
        color: rgb(106, 106, 106);
        font-size: 15px;
        font-family: "gordita_regular";
        width: 85%;
    }
`;
const Stars = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;
const Score = styled.div`
    text-align: center;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: flex;
    }
`;
const Star = styled.div`
    font-size: 35px;
    font-family: "gordita_medium";
    color: rgb(248, 193, 70);
    margin-right: 5px;
    display: inline-block;
`;
const Img = styled.img`
    width: 30px;
    display: block;
`;
const Total = styled.p`
    font-family: "gordita_bold";
    color: rgb(106, 106, 106);
    &.total {
        width: 100%;
        font-size: 12px;
    }
`;
const View = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: "gordita_medium";
    color: rgb(255, 255, 255);
    background-color: rgb(15, 167, 111);
    border-radius: 5px;
    width: 230px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    &.verification {
        color: rgb(245, 173, 8);
        background-color: rgb(255, 250, 239);
        border: 2px dashed rgb(245, 173, 8);
        transform: translate(-2px, -50px);
    }
`;
const Imgs = styled.img`
    width: 15px;
    display: block;
    margin-left: 5px;
`;
