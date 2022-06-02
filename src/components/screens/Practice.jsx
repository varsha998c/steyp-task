import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { practiceConfig } from "../../axiosConfig";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function Practice() {
    const [loader, setLoader] = useState(false);
    const [card, setCard] = useState([]);
    const [item, setItem] = useState([]);
    const [currentPractice, setCurrentPracice] = useState([]);
    const [three, setThree] = useState([]);
    let [color, setColor] = useState("green");

    // const [isView, setView] = useState(false);
    let access_token = "CZXfKimWIMmsWGFoZilJ4Z85Mna5yk";
    console.log("###############################", three);
    useEffect(() => {
        const fetchUpcomingPractices = () => {
            practiceConfig
                .get("practices/upcoming-practices/tech-schooling/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    // console.log(res);
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setCard(data[0]);
                        console.log(
                            data[0],
                            "------------------------------------------"
                        );
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchUpcomingPractices();
    }, []);

    useEffect(() => {
        const fetchCurrentPractices = () => {
            practiceConfig
                .get("practices/current-practice/tech-schooling/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6001) {
                        setCurrentPracice(data);
                        console.log(
                            data,
                            "-------------------------------------"
                        );
                    } else if (StatusCode === 6000) {
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchCurrentPractices();
    }, []);
    useEffect(() => {
        const fetchCompletedPractices = () => {
            practiceConfig
                .get("practices/completed-practices/tech-schooling/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setItem(data);
                        setLoader(true);
                        console.log(
                            item,
                            "=============================items========================"
                        );
                        setThree(item.slice(0, 3));
                        console.log(
                            three,
                            "============================three =items========================"
                        );
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchCompletedPractices();
    }, []);

    return (
        <Container>
            <Left>
                {currentPractice.length === 0 ? (
                    <TopContainer>
                        <h3>Your Next Practice</h3>
                        <ImgeContainer>
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/nextemptybg.svg"
                                alt="Image"
                            />
                        </ImgeContainer>
                        <SubHeading>There are no practices active</SubHeading>
                        <Description>
                            Currently, you have no practices to attend. Please
                            go to your next activity to unlock more practices.
                        </Description>
                        <Button to="/tech-schooling">
                            Go to Learn dashboard
                        </Button>
                    </TopContainer>
                ) : (
                    ""
                )}
                <BottomContainer>
                    <h3>Upcoming Practices</h3>
                    {/* {card.map((cards) => ( */}
                    <Div>
                        <ImageContainer>
                            <img src={card.image} alt="Image" />
                        </ImageContainer>
                        <ContentSection>
                            <Heading>
                                <span>#{card.order_id}</span>
                                <h4>{card.title}</h4>
                            </Heading>
                            <Developer>
                                <Icon>
                                    <IoLayersOutline />
                                </Icon>
                                <h6>{card.designation}</h6>
                            </Developer>
                        </ContentSection>
                    </Div>
                    {/* ))} */}
                </BottomContainer>
            </Left>
            <Right>
                <ContentContainer>
                    <Header>
                        <Top>
                            <h2>Attended Practices</h2>
                            <ButtonDiv to="completed-practices/">
                                View All
                            </ButtonDiv>
                        </Top>
                        {three.map((items) => (
                            <Card>
                                <ImgContainer>
                                    <img src={items.image} alt="Image" />
                                </ImgContainer>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{items.practice_score}/10</span>
                                </Mark>
                                <Right>
                                    <Heading className="one">
                                        #{items.auto_id}
                                    </Heading>
                                    <Title>{items.title}</Title>
                                </Right>
                            </Card>
                        ))}
                    </Header>
                </ContentContainer>
            </Right>
            {loader ? (
                loader
            ) : (
                <HashLoader color={color} css={override} size={100} />
            )}
        </Container>
    );
}

export default Practice;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: green;
    position: absolute;
    right: 0;
    left: 50%;
    top: 60%;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-left: 76px;
`;
const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
const TopContainer = styled.div`
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 30px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 150px;

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
    margin: 0 auto;
    display: block;
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
    background-color: rgb(247, 247, 247);
    padding: 20px 10px 20px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #f0f0f0;
    opacity: 0.5;
    cursor: not-allowed;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const ContentSection = styled.div``;
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
    width: 48%;
    margin-left: 10px;
`;
const ContentContainer = styled.div`
    background-color: rgb(250, 250, 250);
    padding: 30px 20px;
    margin-top: 60px;
    width: 90%;
`;
const Header = styled.div``;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    h2 {
        color: rgb(30, 78, 82);
        font-size: 20px;
        font-family: gordita_regular;
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
    flex-wrap: wrap;
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
    width: 40%;
    min-width: 200px;
    border-radius: 5px;
    overflow: hidden;
    img {
        width: 100%;
        display: block;
    }
`;
const Developer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    h6 {
        color: rgb(168, 168, 168);
        font-family: gordita_regular;
        font-size: 13px;
    }
`;
const Icon = styled.div`
    width: 15px;
    margin-right: 10px;
`;
const ImgeContainer = styled.div`
    width: 280px;
    margin: 30px auto 0;
    img {
        display: block;
        width: 100%;
    }
`;
