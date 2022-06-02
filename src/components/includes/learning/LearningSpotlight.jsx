import React from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { FaStream } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

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
                    <AiOutlinePlayCircle />
                </span>
            </Right>
        </Container>
    );
}

export default LearningSpotlight;
const Container = styled.div``;
const Left = styled.div`
    h4 {
        color: red;
    }
`;
const Div = styled.div``;
const Span = styled.span``;
const ImgContainer = styled.div``;
const Description = styled.p``;
const Right = styled.div`
    span {
    }
`;
const VideoContainer = styled.div`
    img {
    }
`;
