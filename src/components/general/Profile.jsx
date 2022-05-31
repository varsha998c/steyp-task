import React from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import Avatar from "react-avatar";

function Profile({ isClick, setClick }) {
    return (
        <Container isClick={isClick}>
            <Top>
                <Left>
                    <h5>Go to Settings</h5>
                    <ImgContainer>
                        <IoSettingsOutline />
                    </ImgContainer>
                </Left>
                <Right>
                    <h5 onClick={() => setClick((prev) => !prev)}>Log Out</h5>
                    <ImgContainer>
                        <AiOutlineLogout />
                    </ImgContainer>
                </Right>
            </Top>
            <MiddleContainer>
                <ImageContainer>
                    <Avatar name="Varsha" size="150" border-radius="50%" />
                </ImageContainer>
                <h4>#5908</h4>
                <h3>Varsha</h3>
                <Number>
                    <PhoneIcon>
                        <IoCallOutline />
                    </PhoneIcon>
                    <span>8078558954</span>
                </Number>
                <Coins>
                    <Icon>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/talrop-coin.svg"
                            alt="coins"
                        />
                    </Icon>
                    <h5>9 coins</h5>
                </Coins>
                <Button>
                    <View>View my profile</View>
                </Button>
            </MiddleContainer>
        </Container>
    );
}

export default Profile;
const Container = styled.div`
    padding: 30px 10px 30px 30px;
    background: rgb(248, 248, 248);
    transition: all 0.6s ease 0s;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    width: 390px;
    top: 0;
    z-index: 100;
    right: ${({ isClick }) => (isClick ? "0%" : "-50%")};
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    display: flex;
    font-size: 18px;
    width: 50%;
    h5 {
        font-family: "gordita_medium";
        cursor: pointer;
        &:hover {
            color: rgb(3, 153, 244);
        }
    }
`;
const ImgContainer = styled.div`
    width: 15px;
    margin-left: 10px;
`;
const Right = styled.div`
    display: flex;
    width: 50%;
    font-size: 18px;
    justify-content: center;
    h5 {
        font-family: "gordita_medium";
        cursor: pointer;
        &:hover {
            color: rgb(3, 153, 244);
        }
    }
`;
const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    text-align: center;
    h4 {
        font-family: gordita_medium;
        font-size: 20px;
    }
    h3 {
        font-family: gordita_medium;
        font-size: 20px;
    }
`;
const ImageContainer = styled.div`
    width: 150px;
    min-width: 150px;
    height: 150px;
    border-radius: 50%;
    font-size: 14px;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    margin: 0 auto 30px;
`;
const Number = styled.div`
    margin: 10px 0px;
    font-size: 20px;
    color: rgb(109, 109, 109);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-family: gordita_medium;
        font-size: 13px;
    }
`;
const PhoneIcon = styled.div`
    margin-right: 10px;
    font-size: 20px;
`;
const Coins = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h5 {
        font-size: 20px;
        font-family: gordita_medium;
    }
`;
const Icon = styled.div`
    width: 20px;
    margin-right: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
const Button = styled.a`
    cursor: pointer;
`;
const View = styled.span`
    display: inline-block;
    padding: 10px 20px;
    color: rgb(255, 255, 255);
    background-color: rgb(139, 195, 74);
    border-radius: 10px;
    margin-top: 15px;
    font-family: gordita_medium;
    font-size: 15px;
`;
