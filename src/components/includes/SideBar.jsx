import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../screens/Home";

function SideBar() {
    return (
        <Section>
            <Wrapper>
                <Content className="one">
                    <TopContainer activeclassName="active">
                        <ImgContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/dashboard.svg"
                                alt="Image"
                            />
                        </ImgContainer>
                        <H4 to="/">Dashboard</H4>
                    </TopContainer>
                    <MiddleContainer>
                        <One activeclassName="active">
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/free.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <H4 to="/free-ground">Free Ground</H4>
                        </One>
                        <Two activeclassName="active">
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/challenges/19-08-2021/challenge.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <H4 to="/challenges">Challeges</H4>
                        </Two>
                        <Three activeclassName="active">
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/talk.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <H4 to="/s">Chat with RM</H4>
                        </Three>
                    </MiddleContainer>
                </Content>
                <Div>
                    <BottomContainer className="socialmedia">
                        <Image>
                            <ImageContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/linkedin.svg"
                                    alt="Image"
                                />
                            </ImageContainer>
                        </Image>
                        <Image>
                            <ImageContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/twitter.svg"
                                    alt="Image"
                                />
                            </ImageContainer>
                        </Image>
                        <Image>
                            <ImageContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/facebook.svg"
                                    alt="Image"
                                />
                            </ImageContainer>
                        </Image>
                        <Image>
                            <ImageContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/instagram.svg"
                                    alt="Image"
                                />
                            </ImageContainer>
                        </Image>
                        <Image>
                            <ImageContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/youtube.svg"
                                    alt="Image"
                                />
                            </ImageContainer>
                        </Image>
                    </BottomContainer>
                    <ButtonDiv>
                        <H4 to="/" className="explore">
                            Explore Talrop
                        </H4>
                        <Arrow>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/explore-white-arrow.svg"
                                alt="Image"
                            />
                        </Arrow>
                    </ButtonDiv>
                </Div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Wrapper>
        </Section>
    );
}

export default SideBar;
const Section = styled.div`
    background: rgb(249, 249, 251);
    width: 60px;
    border-top: 1px solid rgb(239, 239, 239);
    position: fixed;
    z-index: 100;
    top: 70px;
    left: 0px;
    transition: all 0.2s ease-in-out 0s;
    min-height: 720px;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    cursor: pointer;
    ::-webkit-scrollbar {
        display: none;
    }
    &:hover {
        width: 238px;
    }
    &:hover .socialmedia {
        display: flex;
    }
    &:hover .one {
        height: 430px;
    }
    &:hover a {
        display: block;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: unset;
`;
const TopContainer = styled.div`
    border-bottom: 1px solid #efefef;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    margin-bottom: 20px;
    border-left: none;
    &:hover {
        background-color: #e1f6ff;
        border-left: 5px solid rgb(95, 209, 138);
    }
    h4 {
        margin-left: 20px;
        font-family: "gordita_medium";
        font-size: 14px;
        color: #333;
        &:hover {
            color: #5dc66a;
        }
    }
`;
const ImgContainer = styled.div`
    width: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const H4 = styled(Link)`
    margin-left: 20px;
    font-family: "gordita_medium";
    font-size: 14px;
    color: #333;
    display: none;
    &:hover {
        color: #5dc66a;
        display: block;
    }
    &.explore {
        color: #fff;
        margin-right: 3px;
    }
`;
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 20px;
`;
const One = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 0px;
    margin-bottom: 15px;
    border-left: none;
    h4 {
        margin-left: 20px;
        font-family: "gordita_medium";
        font-size: 14px;
        color: #333;
        &:hover {
            color: #5dc66a;
        }
    }
    &:hover {
        background-color: #e1f6ff;
        border-left: 5px solid rgb(95, 209, 138);
    }
`;
const Two = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 0px;
    margin-bottom: 15px;

    h4 {
        margin-left: 20px;
        font-family: "gordita_medium";
        font-size: 14px;
        color: #333;
        &:hover {
            color: #5dc66a;
        }
    }
`;
const Three = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 0px;
    h4 {
        margin-left: 20px;
        font-family: "gordita_medium";
        font-size: 14px;
        color: #333;
        &:hover {
            color: #5dc66a;
        }
    }
`;
const BottomContainer = styled.div`
    padding: 18px 20px;
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`;
const Image = styled.div`
    width: 35px;
    min-width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
    width: 25px;
    height: 25px;
    min-width: 25px;
    justify-content: center;
    display: flex;
    cursor: pointer;
    img {
        width: 20px;
        display: block;
    }
`;
const ButtonDiv = styled.div`
    background: #56c082;
    max-height: 46px;
    display: flex;
    align-items: center;
    min-width: 60px;
    justify-content: center;
    cursor: pointer;
    padding: 13px;
`;
const Arrow = styled.div`
    width: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
const Div = styled.div`
    margin-top: 79px;
`;
