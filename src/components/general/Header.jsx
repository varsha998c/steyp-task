import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";
import { Outlet } from "react-router-dom";

function Header({ setClick }) {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <LogoConatiner>
                            <Logo
                                src={
                                    require("../../assets/images/steyp-logo.svg")
                                        .default
                                }
                                alt="logo"
                            />
                        </LogoConatiner>
                    </Left>
                    <Right>
                        <CoinDiv>
                            <CoinContainer>
                                <CoinImg>
                                    <Img
                                        src={
                                            require("../../assets/images/Coin-Header.svg")
                                                .default
                                        }
                                        alt="coins"
                                    />
                                </CoinImg>
                                <h5>9 coins</h5>
                                <PlusContainer>
                                    <Img
                                        src={require("../../assets/images/add.png")}
                                        alt="plus"
                                    />
                                </PlusContainer>
                            </CoinContainer>
                            <MsgContainer>
                                <Img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/messages.svg"
                                    alt="message"
                                />
                            </MsgContainer>
                        </CoinDiv>
                        <ProfileDiv>
                            <Profile>
                                <Avatar name="Varsha" size="60" />
                            </Profile>
                            <h4 onClick={() => setClick((prev) => !prev)}>
                                Varsha
                            </h4>
                            <DropDown onClick={() => setClick((prev) => !prev)}>
                                <Img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/polygon.svg"
                                    alt="dropdown"
                                />
                            </DropDown>
                        </ProfileDiv>
                    </Right>
                </Wrapper>
            </Container>
            <Outlet />
        </>
    );
}

export default Header;
const Container = styled.div`
    padding: 0px 18px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    z-index: 99;
    background: #f9f9fb;
    align-items: inherit;
`;
const Wrapper = styled.div`
    /* width: 99%;
    margin: 0 auto; */
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Left = styled.div`
    width: 30%;
    margin: 20px auto;
`;
const Right = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const LogoConatiner = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Logo = styled.img``;
const CoinDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 23px;
    border-right: 1px solid #000;
`;
const CoinContainer = styled.div`
    display: flex;
    background: linear-gradient(
        90deg,
        rgb(255, 235, 59) 0%,
        rgb(255, 249, 196) 100%
    );
    height: 25px;
    padding: 6px 16px;
    border-radius: 26px 5px 5px 26px;
    margin-right: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(51, 51, 51);
    cursor: pointer;
    width: 100px;
    justify-content: space-between;
    h5 {
        font-family: "gordita_medium";
    }
`;
const CoinImg = styled.div`
    width: 20px;
`;
const PlusContainer = styled.div`
    width: 20px;
`;
const MsgContainer = styled.div`
    width: 20px;
    cursor: pointer;
`;
const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
    h4 {
        margin-right: 5px;
        cursor: pointer;
        font-family: "gordita_medium";
        font-size: 14px;
    }
`;
const Profile = styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 14px;
    overflow: hidden;
    margin-right: 10px;
`;
const DropDown = styled.div`
    width: 10px;
    cursor: pointer;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
