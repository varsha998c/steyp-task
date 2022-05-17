import React from "react";
import styled from "styled-components";
function Performance() {
    return (
        <Container>
            <Items>
                <Left>Lessons</Left>
                <Right>119</Right>
            </Items>
            <Items>
                <Left>Topics</Left>
                <Right>684</Right>
            </Items>
            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Professions</h5>
                    <span>2</span>
                </Topic>
            </Proffesions>

            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Skills</h5>
                    <span>11</span>
                </Topic>
            </Proffesions>
            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Practices</h5>
                    <span>38</span>
                </Topic>
            </Proffesions>
            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Assessments</h5>
                    <span>20</span>
                </Topic>
            </Proffesions>
            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Workshops</h5>
                    <span>38</span>
                </Topic>
            </Proffesions>
            <Proffesions>
                <ImgContainer>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/calendar.svg"
                        alt="Image"
                    />
                </ImgContainer>
                <Topic>
                    <h5>Premium Assists</h5>
                    <span>0</span>
                </Topic>
            </Proffesions>
        </Container>
    );
}

export default Performance;
const Container = styled.div``;
const Items = styled.div`
    background: rgb(241, 238, 251);
    padding: 16px 17px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 300px;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const Left = styled.h5`
    font-size: 18px;
    margin: 0;
`;
const Right = styled.span`
    font-weight: 900;
    font-size: 20px;
`;
const Proffesions = styled.div`
    background: rgb(232, 243, 253);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 20px;
`;
const ImgContainer = styled.div`
    background: rgb(99, 231, 189);
    height: 44px;
    width: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 11px;
    &:last-child {
        margin-bottom: 0;
    }
    img {
        display: block;
    }
`;
const Topic = styled.div`
    h5 {
        margin: 0;
        color: rgb(125, 132, 141);
    }
    span {
        display: block;
        font-size: 20px;
    }
`;
