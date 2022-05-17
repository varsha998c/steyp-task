import React from "react";
import styled from "styled-components";
function SideBar() {
    return (
        <Section>
            <Wrapper>
                <Content>
                    <TopContainer>
                        <ImgContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/dashboard.svg"
                                alt="Image"
                            />
                        </ImgContainer>
                        <h4>Dashboard</h4>
                    </TopContainer>
                    <MiddleContainer>
                        <One>
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/free.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <h4>Free Ground</h4>
                        </One>
                        <Two>
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/challenges/19-08-2021/challenge.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <h4>Challeges</h4>
                        </Two>
                        <Three>
                            <ImgContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu/talk.svg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <h4>Chat with RM</h4>
                        </Three>
                    </MiddleContainer>
                </Content>
                <Div>
                    <BottomContainer>
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
                                    src="	https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/social/instagram.svg"
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
                        <h4>Explore Talrop</h4>
                        <Arrow>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/explore-white-arrow.svg"
                                alt="Image"
                            />
                        </Arrow>
                    </ButtonDiv>
                </Div>
            </Wrapper>
        </Section>
    );
}

export default SideBar;
const Section = styled.div`
    background: rgb(249, 249, 251);
    width: 238px;
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
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    height: 430px;
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
const Two = styled.div`
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
    display: flex;
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
    h4 {
        color: #fff;
        margin-right: 10px;
        text-align: center;
        font-size: 14px;
        font-family: "gordita_medium";
    }
`;
const Arrow = styled.div`
    width: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
const Div = styled.div`
    margin-top: 72px;
`;