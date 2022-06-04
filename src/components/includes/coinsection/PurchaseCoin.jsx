import React from "react";
import styled from "styled-components";

function PurchaseCoin() {
    return (
        <Section>
            <Container>
                <Div>
                    <h2>Purchase coins</h2>
                    <p>Price per coin - 50.00</p>
                    <Top>
                        <ImgsContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/coin.svg"
                                alt="Coin"
                            />
                        </ImgsContainer>
                        <Form>
                            <input type="text" placeholder="Enter Coin" />
                        </Form>
                    </Top>
                </Div>
                <Bottom>
                    <h5>Grand total</h5>
                    <span>-</span>
                </Bottom>
                <PurchaseButton>
                    Purchase{" "}
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/right-arrow.svg"
                        alt="arrow"
                    />
                </PurchaseButton>
            </Container>
            <Right>
                <One>
                    <Contents>
                        <CoinContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/coin.svg"
                                alt="coins"
                            />
                        </CoinContainer>

                        <h2>6</h2>
                        <span>Total points</span>
                    </Contents>
                </One>
                <Coins>
                    <div className="coins">
                        <h4>9</h4>
                        <h6>Gifted</h6>
                    </div>
                    <div className="yellow">
                        <h4>0</h4>
                        <h6>Purchased</h6>
                    </div>
                    <div className="blue">
                        <h4>0</h4>
                        <h6>Earned</h6>
                    </div>
                </Coins>
            </Right>
        </Section>
    );
}

export default PurchaseCoin;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Container = styled.div`
    width: 44%;
    background-color: rgb(247, 252, 255);
    padding: 32px 30px;
    border-radius: 10px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/wave-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
`;
const Div = styled.div`
    margin-bottom: 80px;
    h2 {
        font-family: gordita_medium;
        font-size: 20px;
    }
    p {
        font-family: gordita_regular;
        font-size: 14px;
        color: rgb(86, 86, 86);
    }
`;
const Contents = styled.div`
    padding: 24px 20px;
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/asset.svg");
    background-repeat: no-repeat;
    background-position: 16px 168px;
    span {
        color: rgb(86, 86, 86);
        font-family: gordita_medium;
        margin-top: 11px;
        font-size: 14px;
        width: 94%;
    }
    h2 {
        display: block;
        font-size: 35px;
        font-family: "gordita-medium";
    }
`;
const Top = styled.div`
    margin-top: 25px;
    border: 1px solid rgb(90, 164, 139);
    font-family: gordita_medium;
    font-size: 22px;
    width: 88%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    border-radius: 6px;
`;
const ImgsContainer = styled.div`
    width: 25px;
    margin-right: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const Form = styled.form`
    width: 86%;
    input {
        border: none;
        font-size: 20px;
        font-family: "gordita_medium";
    }
`;
const Bottom = styled.div`
    border-top: 2px solid #000;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    h5 {
        font-family: "gordita_regular";
        font-size: 15px;
    }
    span {
        font-family: "gordita_medium";
        font-size: 20px;
    }
`;
const PurchaseButton = styled.div`
    cursor: pointer;
    margin-left: auto;
    margin-top: 18px;
    color: #fff;
    align-items: center;
    border-radius: 5px;
    font-family: gordita_medium;
    font-size: 15px;
    background: rgb(93, 211, 167);
    padding: 0px 34px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    img {
        margin-left: 5px;
    }
`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    width: 48%;
`;
const One = styled.div`
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/add-coin-bg.svg");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(247, 252, 255);
    border-radius: 10px;
    background-position: right top;
    width: 44%;
`;
const CoinContainer = styled.div`
    width: 60px;
    margin-bottom: 45px;
    img {
        width: 100%;
        display: block;
    }
`;
const Coins = styled.div`
    width: 53%;

    h4 {
        font-size: 25px;
        font-family: "gordita_medium";
    }
    h6 {
        font-family: gordita_medium;
        font-size: 14px;
        margin-top: 7px;
        color: rgb(125, 124, 124);
    }
`;
