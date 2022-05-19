import React from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

function NewContent() {
    return (
        <Content>
            <h2>UI Engineer</h2>
            <Items>
                <Item>
                    <Left>
                        <img
                            src="	https://d3mbaugvr53zg5.cloudfront.net/media/elearning/skill/gitlab.png"
                            alt="img"
                        />
                    </Left>
                    <Right>
                        <Heading>Skill 3</Heading>
                        <SubHeading>Git & GitLab</SubHeading>
                        <BottomDiv>
                            <Skill>
                                <ImgContainer>
                                    <IoLayersOutline />
                                </ImgContainer>
                                <span>1 Lesson</span>
                            </Skill>
                            <TimeContainer>
                                <ImgContainer>
                                    <AiOutlineClockCircle />
                                </ImgContainer>
                                <span>7 mins</span>
                            </TimeContainer>
                        </BottomDiv>
                    </Right>
                </Item>
                <Item>
                    <Left>
                        <img
                            src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/skill/Web_1920__14_7iYzsrg.jpg"
                            alt="img"
                        />
                    </Left>
                    <Right>
                        <Heading>Skill 8</Heading>
                        <SubHeading>React</SubHeading>
                        <BottomDiv>
                            <Skill>
                                <ImgContainer>
                                    <IoLayersOutline />
                                </ImgContainer>
                                <span>1 Lesson</span>
                            </Skill>
                            <TimeContainer>
                                <ImgContainer>
                                    <AiOutlineClockCircle />
                                </ImgContainer>
                                <span>7 mins</span>
                            </TimeContainer>
                        </BottomDiv>
                    </Right>
                </Item>
                <Item>
                    <Left>
                        <img
                            src="	https://d3mbaugvr53zg5.cloudfront.net/media/elearning/skill/gitlab.png"
                            alt="img"
                        />
                    </Left>
                    <Right>
                        <Heading>Skill 3</Heading>
                        <SubHeading>Git & GitLab</SubHeading>
                        <BottomDiv>
                            <Skill>
                                <ImgContainer>
                                    <IoLayersOutline />
                                </ImgContainer>
                                <span>1 Lesson</span>
                            </Skill>
                            <TimeContainer>
                                <ImgContainer>
                                    <AiOutlineClockCircle />
                                </ImgContainer>
                                <span>7 mins</span>
                            </TimeContainer>
                        </BottomDiv>
                    </Right>
                </Item>
            </Items>
        </Content>
    );
}

export default NewContent;
const Content = styled.div`
    h2 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 30px;
        font-family: gordita_regular;
    }
`;
const Items = styled.div`
    display: flex;
    width: 100%;
    max-height: 70vh;
`;
const Item = styled.div`
    width: 29%;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    padding: 20px 18px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    margin-right: 25px;
    &:last-child {
        margin-right: 0;
    }
`;
const Left = styled.div`
    width: 180px;
    img {
        width: 100%;
        display: block;
        border-radius: 6px;
    }
`;

const Right = styled.div`
    margin-left: 15px;
    width: 240px;
`;
const Heading = styled.h6`
    font-size: 13px;
    font-family: gordita_regular;
    color: rgb(158, 158, 158);
`;
const SubHeading = styled.h3`
    font-family: gordita_medium;
    font-size: 16px;
`;
const BottomDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
`;
const Skill = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    span {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 10px;
    margin-right: 8px;
`;
const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
