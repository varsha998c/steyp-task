import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { learnConfig, practiceConfig } from "../../axiosConfig";
import { Link } from "react-router-dom";

function Workshop() {
    const [item, setItem] = useState([]);
    const [isData, setData] = useState([]);
    const [three, setThree] = useState([]);

    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";
    useEffect(() => {
        const fetchCompletedWorkshop = () => {
            practiceConfig
                .get("workshops/completed-workshops/tech-schooling", {
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setItem(data);
                        setThree(item.slice(0, 3));
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchCompletedWorkshop();
    }, []);
    useEffect(() => {
        const fetchUpcomingWorkshop = () => {
            learnConfig
                .get("workshops/upcoming-workshops/tech-schooling/", {
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setData(data);
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchUpcomingWorkshop();
    }, []);

    return (
        <Container>
            <Left>
                <TopContainer>
                    <h3>Your Next Workshop</h3>
                    <ImgeContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/nextemptybg.svg"
                            alt="Image"
                        />
                    </ImgeContainer>
                    <SubHeading>There are no workshops active</SubHeading>
                    <Description>
                        Currently, you have no workshops to attend. Please go to
                        your next activity to unlock more workshops.
                    </Description>
                    <Button to="/tech-schooling">Go to Learn dashboard</Button>
                </TopContainer>
                <BottomContainer>
                    <h3>Upcoming Workshops</h3>
                    <Div>
                        <ImageContainer>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/learn/workshop/workshop/caching_post_page.png"
                                alt="Image"
                            />
                        </ImageContainer>
                        <ContentSection>
                            <Heading>
                                <span>#1</span>
                                <h4>Caching Post Page </h4>
                            </Heading>
                            <Developer>
                                <Icon>
                                    <IoLayersOutline />
                                    <h6>Backend Developer</h6>
                                </Icon>
                                <Icon>
                                    <AiOutlinePlayCircle />
                                    <h6>1 Topic</h6>
                                </Icon>
                                <Icon>
                                    <AiOutlinePlayCircle />
                                    <h6>4 mins</h6>
                                </Icon>
                            </Developer>
                        </ContentSection>
                    </Div>
                </BottomContainer>
            </Left>
            <Right>
                <ContentContainer>
                    <Header>
                        <Top>
                            <h2>Completed Workshops</h2>
                            <ButtonDiv to="completed-workshops/">
                                View All
                            </ButtonDiv>
                        </Top>
                        {three.map((items) => (
                            <Card>
                                <ImgContainer>
                                    <img src={items.image} alt="Image" />
                                </ImgContainer>

                                <Right>
                                    <Heading className="one">
                                        #{items.auto_id}
                                        <h6>{items.title}</h6>
                                    </Heading>
                                    <Developer className="one">
                                        <Icon>
                                            <IoLayersOutline />
                                            <h6>{items.designation}</h6>
                                        </Icon>
                                        <Icon>
                                            <AiOutlinePlayCircle />
                                            <h6>{items.topic_count} Topic</h6>
                                        </Icon>
                                        <Icon>
                                            <AiOutlinePlayCircle />
                                            <h6>{items.duration}</h6>
                                        </Icon>
                                    </Developer>
                                </Right>
                            </Card>
                        ))}
                    </Header>
                </ContentContainer>
            </Right>
        </Container>
    );
}

export default Workshop;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin: 0px 20px 0 76px;
`;
const Left = styled.div`
    width: 41%;
    display: flex;
    flex-direction: column;
`;
const TopContainer = styled.div`
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 50px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 250px;

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
    background-color: rgb(10, 129, 251);
    font-family: gordita_medium;
    padding: 8px 25px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
`;
const BottomContainer = styled.div`
    margin-top: 50px;
    opacity: 0.6;

    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin: 20px 0;
        font-family: gordita_regular;
    }
`;
const Div = styled.div`
    background-color: rgb(247, 247, 247);
    padding: 20px 10px 20px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #f0f0f0;
`;
const ContentSection = styled.div``;
const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.one {
        color: rgb(65, 174, 118);
        font-family: gordita_medium;
        font-size: 18px;
        width: 250px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h6 {
            margin-left: 5px;
            color: rgb(30, 78, 82);
            border-left: 2px solid #000;
            font-size: 16px;
            padding-left: 4px;
        }
    }
    span {
        color: rgb(65, 174, 118);
        font-family: gordita_medium;
        margin-right: 5px;
    }
    h4 {
        font-family: gordita_medium;
        font-size: 14px;
        border-left: 3px solid #000;
        padding-left: 4px;
    }
`;
const Right = styled.div`
    width: 56%;
    margin-left: 20px;
`;
const ContentContainer = styled.div`
    background-color: rgb(250, 250, 250);
    padding: 30px 20px;
    margin-top: 20px;
`;
const Header = styled.div``;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    h2 {
        color: rgb(30, 78, 82);
        font-size: 20px;
        font-family: gordita_regular;
        margin-bottom: 20px;
    }
`;
const ButtonDiv = styled(Link)`
    color: rgb(33, 150, 243);
    font-family: gordita_medium;
    font-size: 16px;
    cursor: pointer;
`;
const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 20px 10px 20px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
`;
const Mark = styled.div`
    background-color: rgb(219, 201, 0);
    border-radius: 30px;
    padding: 4px 15px;
    position: absolute;
    top: 27px;
    color: #fff;
    left: 71px;
    img {
        margin-right: 2px;
    }
`;
const Span = styled.span``;
const Title = styled.h4`
    font-family: gordita_medium;
    font-size: 14px;
    max-width: 80%;
    line-height: 20px;
`;
const ImageContainer = styled.div`
    margin-right: 20px;
    width: 30%;
    min-width: 100px;
    border-radius: 5px;
    overflow: hidden;
    img {
        width: 100%;
        display: block;
    }
`;
const Developer = styled.div`
    margin-top: 10px;
    &.one {
        display: flex;
        align-items: center;
        margin-top: 25px;
    }
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: unset;
    margin-right: 10px;
    h6 {
        color: rgb(168, 168, 168);
        font-family: gordita_regular;
        font-size: 13px;
        margin-left: 5px;
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
