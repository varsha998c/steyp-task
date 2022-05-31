import React from "react";
import styled from "styled-components";

function Challeges() {
    return (
        <Container>
            <Top>
                <Div>
                    <h2>Steyp Challenges</h2>
                    <p>
                        Steyp is now providing you with a variety of exciting
                        challenges! Come join us and earn awesome rewards .
                    </p>
                </Div>
            </Top>
            <h2>Active Challenges</h2>
            <Middle>
                <Cover>
                    <ImgContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/challenges/19-08-2021/empty-challenge.svg"
                            alt=""
                        />
                    </ImgContainer>
                    <h3>Woohoo!</h3>
                    <Paragraph>
                        No challenges pending.We will get back with more
                        fulfilled challenges for you
                    </Paragraph>
                </Cover>
            </Middle>
        </Container>
    );
}

export default Challeges;
const Container = styled.div`
    height: 90vh;

    margin-top: 100px;
    width: 92%;
    margin-left: 50px;
    padding: 10px 20px 0 30px;
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 24px;
        font-family: gordita_medium;
        color: rgb(52, 52, 52);
        text-align: left;
        margin-top: 30px;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px;
    background-image: url("https://steyp.com/static/media/back.cccf2adf.png");
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 40px;
`;
const ImgContainer = styled.div`
    width: 230px;
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
    }
`;
const Div = styled.div`
    width: 50%;
    margin-right: 10px;
    padding: 70px 0px 50px;
    h2 {
        font-size: 35px;
        font-family: gordita_medium;
        margin-bottom: 5px;
    }
    p {
        font-family: "gordita_regular";
        color: #000;
        font-size: 14px;
    }
`;
const Middle = styled.div``;
const Cover = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    h3 {
        font-size: 26px;
        font-family: gordita_medium;
        margin-bottom: 5px;
    }
`;
const Paragraph = styled.p`
    font-size: 16px;
    color: rgb(51, 51, 51);
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
`;
