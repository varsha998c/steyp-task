import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { practiceConfig } from "../../axiosConfig";
import { Link } from "react-router-dom";

function Assessments() {
    const [completed, setCompleted] = useState([]);
    const [three, setThree] = useState([]);

    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";

    useEffect(() => {
        practiceConfig
            .get("assessments/completed-assessments/tech-schooling/", {
                headers: {
                    authorization: `Bearer ${access_token}`,
                },
            })
            .then((res) => {
                const { StatusCode, data } = res.data;
                if (StatusCode === 6000) {
                    setCompleted(data);
                    setThree(completed.slice(0, 3));
                } else if (StatusCode === 6001) {
                    console.log("6001");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <Left>
                <TopContainer>
                    <h3>Your Next Assessment</h3>
                    <ImgeContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/nextemptybg.svg"
                            alt="Image"
                        />
                    </ImgeContainer>
                    <SubHeading>There are no assessments active</SubHeading>
                    <Description>
                        Currently, you have no assessments to attend. Please go
                        to your next activity to unlock more assessments.
                    </Description>
                    <Button to="/">Go to Learn dashboard</Button>
                </TopContainer>
                <BottomContainer>
                    <h3>Upcoming Assessments</h3>
                    <Div>
                        <ImageContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/Emptypractices.svg"
                                alt="Image"
                            />
                        </ImageContainer>
                        <Empty>
                            <h4>Empty!</h4>
                            <p>There are no upcoming assessments</p>
                        </Empty>
                    </Div>
                </BottomContainer>
            </Left>
            <Right>
                <ContentContainer>
                    <Header>
                        <Top>
                            <h3>Attended Assessments</h3>
                            <ButtonDiv>View All</ButtonDiv>
                        </Top>
                        {three.map((item) => (
                            <Card>
                                <ImgContainer>
                                    <img src={item.image} alt="Image" />
                                </ImgContainer>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt=""
                                    />
                                    <span>10/10</span>
                                </Mark>
                                <Right>
                                    <Heading className="one">
                                        #{item.auto_id}
                                    </Heading>
                                    <Title>{item.title}</Title>
                                </Right>
                            </Card>
                        ))}
                    </Header>
                </ContentContainer>
            </Right>
        </Container>
    );
}

export default Assessments;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-left: 270px;
`;
const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;
const TopContainer = styled.div`
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 60px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 170px;

    img {
        display: block;
        width: 100%;
        border-radius: 6px;
    }
`;
const SubHeading = styled.h4`
    font-size: 20px;
    font-family: gordita_medium;
    margin-bottom: 8px;
    text-align: center;
`;
const Description = styled.p`
    margin: 0px auto 15px;
    max-width: 85%;
    color: rgb(116, 116, 116);
    font-family: gordita_regular;
    font-size: 14px;
    text-align: center;
`;
const Button = styled(Link)`
    width: 164px;
    display: block;
    background-color: rgb(10, 129, 251);
    font-family: gordita_medium;
    padding: 8px 25px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 14px;
    /* text-align: center; */
    margin: 0 auto;
`;
const BottomContainer = styled.div`
    margin-top: 50px;
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin: 20px 0;
        font-family: gordita_regular;
    }
`;
const Div = styled.div`
    background-color: rgb(245, 251, 255);
    padding: 30px 20px;
    border-radius: 20px;
    width: 100%;
    margin-top: 20px;
    text-align: center;
`;
const Empty = styled.div`
    margin-top: 20px;
    h4 {
        font-size: 20px;
        font-family: gordita_medium;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        margin-bottom: 15px;
        color: rgb(116, 116, 116);
        font-family: gordita_regular;
    }
`;
const Heading = styled.div`
    font-family: gordita_medium;
    font-size: 14px;
    margin-bottom: 5px;
    display: flex;
    &.one {
        color: rgb(65, 174, 118);
    }
    span {
        color: rgb(65, 174, 118);
        font-family: gordita_medium;
        margin-right: 5px;
        border-right: 1px solid #000;
        padding-right: 5px;
    }
    h4 {
        font-family: gordita_medium;
        font-size: 14px;
    }
`;
const Right = styled.div`
    width: 50%;
    margin-left: 10px;
`;
const ContentContainer = styled.div`
    background-color: rgb(250, 250, 250);
    padding: 30px 20px;
    margin-top: 75px;
`;
const Header = styled.div``;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        color: rgb(30, 78, 82);
        font-size: 20px;
        font-family: gordita_regular;
        margin-bottom: 15px;
    }
`;
const ButtonDiv = styled.div`
    color: rgb(33, 150, 243);
    font-family: gordita_medium;
    font-size: 14px;
    cursor: pointer;
`;
const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    padding: 20px 10px 20px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
`;
const Mark = styled.div`
    background-color: rgb(219, 201, 0);
    border-radius: 30px;
    padding: 4px 10px;
    position: absolute;
    top: 27px;
    color: #fff;
    left: 100px;
    img {
        margin-right: 2px;
    }
`;
const Span = styled.span``;
const Title = styled.h4`
    font-family: gordita_medium;
    font-size: 14px;
    max-width: 100%;
    line-height: 20px;
`;
const ImageContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    min-width: 200px;
    border-radius: 5px;
    overflow: hidden;
    img {
        width: 100%;
        display: block;
    }
`;
const ImgeContainer = styled.div`
    width: 280px;
    margin: 30px auto 0;
    img {
        display: block;
        width: 100%;
    }
`;
