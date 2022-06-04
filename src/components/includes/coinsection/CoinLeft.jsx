import { Container } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import Jdenticon from "react-jdenticon";

function CoinLeft() {
    const [item, setItem] = useState([
        {
            id: 1,
            image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/coin.svg",
            heading: "Manage Coins",
            subheading: "9 coins balance",
            arrow: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg",
        },
        {
            id: 2,
            image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/wallet.svg",
            heading: "My Transactions",
            subheading: "44 transactions",
            arrow: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg",
        },
        {
            id: 3,
            image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/transfer.svg",
            heading: "Fund Transfers",
            subheading: "3 fund transfers",
            arrow: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg",
        },
        {
            id: 4,
            image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/add.svg",
            heading: "Coin Purchases",
            subheading: "1 coin purchases",
            arrow: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg",
        },
        {
            id: 5,
            image: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/details.svg",
            subheading: "How coin works",
            arrow: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg",
        },
    ]);
    return (
        <Containers>
            <h4>Coins</h4>
            {item.map((items) => (
                <Div>
                    <Left>
                        <ImgContainer>
                            <img src={items.image} alt="Image" />
                        </ImgContainer>
                        <div>
                            <h5>{items.heading}</h5>
                            <p>{items.subheading}</p>
                        </div>
                    </Left>
                    <Right>
                        <ArrowContainer>
                            <img src={items.arrow} alt="Arrow" />
                        </ArrowContainer>
                    </Right>
                </Div>
            ))}
            <ProfileDiv>
                <h3>Profile</h3>
                <Section>
                    <Content>
                        <ImageContainer>
                            <Jdenticon height="40" width="40" value="Varsha" />
                        </ImageContainer>
                    </Content>
                    <Middle>
                        <Name>
                            <h2>Varsha</h2>
                            <p>View Profile</p>
                        </Name>
                        <Right>
                            <ArrowContainer>
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/menu-arrow.svg"
                                    alt="Arrow"
                                />
                            </ArrowContainer>
                        </Right>
                    </Middle>
                </Section>
            </ProfileDiv>
            <BottomDiv>
                <Privacy>
                    <LeftContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/lock.svg"
                            alt="Privacy"
                        />
                    </LeftContainer>
                    <Heading>Privacy Policy</Heading>
                </Privacy>
                <Privacy>
                    <LeftContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/logout.svg"
                            alt="Logout"
                        />
                    </LeftContainer>
                    <Heading>Log Out</Heading>
                </Privacy>
            </BottomDiv>
        </Containers>
    );
}

export default CoinLeft;
const Containers = styled.div`
    h4 {
        font-family: gordita_medium;
        font-size: 18px;
        padding-left: 21px;
    }
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid rgb(225, 226, 230);
    cursor: pointer;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        h5 {
            font-family: gordita_medium;
            font-size: 16px;
        }
        p {
            font-family: gordita_regular;
            color: rgb(146, 147, 149);
            font-size: 13px;
        }
    }
`;
const ImgContainer = styled.div`
    width: 20px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div``;
const ArrowContainer = styled.div`
    width: 8px;
    img {
        display: block;
        width: 100%;
    }
`;
const ProfileDiv = styled.div`
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid rgb(225, 226, 230);
    h3 {
        font-size: 20px;
        font-family: gordita_medium;
    }
`;
const Name = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-family: gordita_medium;
        font-size: 15px;
    }
    p {
        font-family: gordita_regular;
        color: rgb(146, 147, 149);
        font-size: 13px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
    margin-right: 14px;
`;
const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    align-items: center;
    width: 238px;
`;
const Content = styled.div``;
const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73%;
`;
const BottomDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
const Privacy = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
`;
const Heading = styled.span`
    font-size: 16px;
    font-family: "gordita_medium";
`;
const LeftContainer = styled.div`
    width: 20px;
    margin-right: 25px;
`;
