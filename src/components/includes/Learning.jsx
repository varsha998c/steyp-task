import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";
import { learnConfig } from "../../axiosConfig";

function Learning() {
    let access_tocken = "3R0rIAf1BgQfv0M4R1DY7CmULWKkFo";
    useEffect(() => {
        learnConfig
            .get("learn/designations/tech-schooling/", {
                headers: {
                    Authorization: `Bearer ${access_tocken}`,
                },
            })
            .then((res) => {
                // const { StatusCode, data } = res.data;
                // if (StatusCode === 6000) {
                //     setItem(data);
                // }

                if (res.data.StatusCode === 6000) {
                    setItem(res.data.data);
                } else if (res.data.StatusCode === 6001) {
                    console.log("6001");
                }
                console.log(res, "tre");
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const [item, setItem] = useState([]);

    // const [item, setItem] = useState([
    //     {
    //         id: 1,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 2,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 3,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 4,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 5,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 6,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 7,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 8,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 9,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    //     {
    //         id: 10,
    //         img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
    //         heading: "UI Engineer",
    //         skill: "9 skills",
    //         time: "65 hrs, 5 mins",
    //     },
    // ]);
    return (
        <Container>
            <Content>
                <h2>Professions</h2>
                <Items>
                    {item.map((items) => (
                        <Item
                            className={
                                items.status === "completed"
                                    ? "completed"
                                    : "not-completed"
                            }
                        >
                            <Left
                                className={
                                    items.status === "completed"
                                        ? "completed"
                                        : "not-completed"
                                }
                            >
                                <img src={items.image} alt="img" />
                            </Left>
                            <Right>
                                <Heading>
                                    #<Span>{items.order_id}</Span>
                                </Heading>
                                <SubHeading>{items.name}</SubHeading>
                                {items.status === "completed" ? (
                                    <BottomDiv>
                                        <Skill>
                                            <ImgContainer>
                                                <IoLayersOutline />
                                            </ImgContainer>
                                            <span>{items.skills} Skills</span>
                                        </Skill>
                                        <TimeContainer>
                                            <ImgContainer>
                                                <AiOutlineClockCircle />
                                            </ImgContainer>
                                            <span>{items.duration}</span>
                                        </TimeContainer>
                                    </BottomDiv>
                                ) : (
                                    ""
                                )}
                            </Right>
                            <Lock
                                className={
                                    items.status === "completed"
                                        ? "completed"
                                        : "not-completed"
                                }
                            >
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/auth/lock.svg"
                                    alt="lock"
                                />
                            </Lock>
                        </Item>
                    ))}
                    {/* <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/Backend_Developer_ACsVD3G.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>2</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                            <BottomDiv>
                                <Skill>
                                    <ImgContainer>
                                        <IoLayersOutline />
                                    </ImgContainer>
                                    <span>9 Skills</span>
                                </Skill>
                                <TimeContainer>
                                    <ImgContainer>
                                        <AiOutlineClockCircle />
                                    </ImgContainer>
                                    <span>65 hrs, 5 mins</span>
                                </TimeContainer>
                            </BottomDiv>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>3</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>4</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>5</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>6</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>7</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>8</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>9</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>10</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>11</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                # <Span>12</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>13</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>
                                #<Span>14</Span>
                            </Heading>
                            <SubHeading>UI Engineer</SubHeading>
                        </Right>
                    </Item> */}
                </Items>
            </Content>
        </Container>
    );
}

export default Learning;
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    h2 {
        font-size: 22px;
        color: rgb(24, 72, 76);
        margin-bottom: 13px;
        font-family: "gordita_regular";
    }
`;

const Content = styled.div`
    margin-top: 15px;
`;
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;
const Item = styled.div`
    width: 46%;
    background: rgb(249, 249, 249);
    padding: 25px 20px;
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 14px;
    margin-right: 8px;
    &:nth-child(2) {
        margin-right: 0;
    }
    &:nth-child(4) {
        margin-right: 0;
    }
    &:nth-child(6) {
        margin-right: 0;
    }
    &:nth-child(8) {
        margin-right: 0;
    }
    &:nth-child(10) {
        margin-right: 0;
    }
    &.not-completed {
        cursor: not-allowed;
        position: relative;
        overflow: hidden;
        filter: grayscale(1);
    }
`;
const Left = styled.div`
    width: 160px;

    img {
        display: block;
        width: 100%;
        border-radius: 6px;
    }
    &.not-completed {
        cursor: not-allowed;
        position: relative;
        overflow: hidden;
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
`;
const Right = styled.div`
    margin-left: 20px;
`;
const Heading = styled.h3`
    color: rgb(153, 153, 153);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: gordita_regular;
`;
const SubHeading = styled.p`
    color: rgb(66, 66, 66);
    margin: 5px 0px;
    font-family: gordita_regular;
    font-size: 14px;
`;
const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Skill = styled.div`
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        color: rgb(153, 153, 153);
        font-size: 12px;
    }
`;
const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-family: gordita_regular;
    font-size: 18px;
    img {
        display: block;
        width: 100%;
    }
`;
const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        color: rgb(153, 153, 153);
        font-size: 12px;
    }
`;
const Span = styled.span`
    color: rgb(63, 81, 181);
    font-size: 16px;
    margin-left: 4px;
`;
const Lock = styled.div`
    width: 15px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    img {
        width: 100%;
        display: block;
    }
    &.completed {
        display: none;
    }
`;
