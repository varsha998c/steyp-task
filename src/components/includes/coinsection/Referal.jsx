import React from "react";
import styled from "styled-components";

function Referal() {
    return (
        <Container>
            <img
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/gift.svg"
                alt="Image"
            />
            <Div>
                <div>
                    <h4>Apply referral code</h4>
                    <p>Please enter a referral code provided by your friend</p>
                </div>
                <EnterCode>
                    <EnterCodeDiv>
                        <input
                            type="text"
                            placeholder="Enter a referral code"
                        />
                        <ApplyButton>
                            Apply{" "}
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/right-arrow.svg"
                                alt="image"
                            />
                        </ApplyButton>
                    </EnterCodeDiv>
                </EnterCode>
            </Div>
        </Container>
    );
}

export default Referal;
const Container = styled.div`
    justify-content: center;
    align-items: center;
    background-color: rgb(247, 252, 255);
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/my-coins/gift-card-bg.svg");
    background-repeat: no-repeat;
    display: flex;
    border-radius: 10px;
    margin-top: 24px;
    padding: 24px 40px;
    img {
        width: 100px;
        display: block;
        margin-right: 50px;
    }
`;
const Div = styled.div`
    width: 58%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
        h4 {
            font-family: gordita_medium;
            font-size: 18px;
        }
        p {
            font-family: gordita_regular;
            color: rgb(86, 86, 86);
            font-size: 12px;
        }
    }
`;
const EnterCodeDiv = styled.div`
    display: flex;
    margin-top: 30px;
    input {
        background: rgb(255, 255, 255);
        height: 35px;
        display: block;
        border: 1px solid rgb(92, 211, 167);
        text-align: center;
        font-family: gordita_medium;
        border-radius: 5px;
        margin-right: 12px;
        min-width: 360px;
        padding: 0px 20px;
        font-size: 15px;
    }
`;
const ApplyButton = styled.div`
    background: rgb(93, 211, 167);
    cursor: pointer;
    border-radius: 6px;
    width: 120px;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    font-family: "gordita_medium";
    img {
        width: 20px;
        display: block;
        margin: 0 0 0 10px;
    }
`;
const EnterCode = styled.div``;
