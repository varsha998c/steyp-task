import React from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { FaStream } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LearningSpotlight() {
    return (
        <Container>
            <Left>
                <h4>
                    What you need to know before you get started with UI
                    Engineer
                </h4>
                <Div>
                    <Span>
                        <ImgContainer>
                            <IoLayersOutline />
                        </ImgContainer>
                        10 Skills
                    </Span>
                    <Span>
                        <ImgContainer>
                            <FaStream />
                        </ImgContainer>
                        97 Lessons
                    </Span>
                    <Span>
                        <ImgContainer>
                            <AiOutlinePlayCircle />
                        </ImgContainer>
                        552 Videos
                    </Span>
                    <Span>
                        <ImgContainer>
                            <AiOutlineClockCircle />
                        </ImgContainer>
                        56 hrs, 55 mins
                    </Span>
                </Div>
                <Description>
                    UI Engineer is also known as User Interface Engineer whose
                    job is to think from the user perspective and to design
                    websites and web applications that are attractive and
                    extremely functional.
                </Description>
            </Left>
            <Right>
                <VideoContainer>
                    <img
                        src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                        alt="video"
                    />
                </VideoContainer>

                <span>
                    <FontAwesomeIcon icon="fa-light fa-circle-play" />
                </span>
            </Right>
        </Container>
    );
}

export default LearningSpotlight;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;
const Left = styled.div`
    width: 60%;
    h4 {
        font-size: 24px;
        max-width: 500px;
        font-family: "gordita_medium";
    }
`;
const Div = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
`;
const Span = styled.span`
    font-size: 18px;
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: flex-start;
    margin-right: 20px;
    color: rgb(176, 190, 197);
`;
const ImgContainer = styled.div`
    margin-right: 10px;
`;
const Description = styled.p`
    font-family: "gordita_regular";
    font-size: 18px;
    width: 93%;
    color: rgb(73, 86, 92);
    margin-bottom: 20px;
`;
const Right = styled.div`
    width: 40%;
    margin-bottom: 25px;

    span {
        width: 100px;
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
    }
`;
const VideoContainer = styled.div`
    width: 92%;
    margin-left: 26px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        display: block;
    }
`;
