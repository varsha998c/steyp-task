import React, { startTransition, useEffect, useState } from "react";
import styled from "styled-components";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { practiceConfig } from "../../axiosConfig";

function NewContent() {
    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";
    const [item, setItem] = useState([]);

    useEffect(() => {
        practiceConfig
            .get("learn/new-content/skills/tech-schooling/", {
                headers: {
                    authorization: `Bearer ${access_token}`,
                },
            })
            .then((res) => {
                const { StatusCode, data } = res.data;
                if (StatusCode === 6000) {
                    setItem(data);
                } else if (StatusCode === 6001) {
                    console.log("6001");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Content>
            <h2>UI Engineer</h2>
            <Items>
                {item.map((items) => (
                    <Item>
                        <Left>
                            <img src={items.image} alt="image" />
                        </Left>
                        <Right>
                            <Heading>Skill {items.order_id}</Heading>
                            <SubHeading>{items.name}</SubHeading>
                            <BottomDiv>
                                <Skill>
                                    <ImgContainer>
                                        <IoLayersOutline />
                                    </ImgContainer>
                                    <span>{items.lessons} Lessons</span>
                                </Skill>
                                <TimeContainer>
                                    <ImgContainer>
                                        <AiOutlineClockCircle />
                                    </ImgContainer>
                                    <span>{items.duration}</span>
                                </TimeContainer>
                            </BottomDiv>
                        </Right>
                    </Item>
                ))}
            </Items>
        </Content>
    );
}

export default NewContent;
const Content = styled.div`
    h2 {
        font-size: 20px;
        color: #000;
        margin-top: 30px;
        font-family: gordita_medium;
    }
`;
const Items = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-height: 70vh;
    justify-content: space-between;
`;
const Item = styled.div`
    width: 29%;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    padding: 20px 18px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    margin-right: 15px;
    &:nth-child(3) {
        margin-right: 0;
    }
`;
const Left = styled.div`
    width: 180px;
    img {
        width: 100%;
        display: block;
        border-radius: 6px;
    }
`;

const Right = styled.div`
    margin-left: 15px;
    width: 240px;
`;
const Heading = styled.h6`
    font-size: 13px;
    font-family: gordita_regular;
    color: rgb(158, 158, 158);
`;
const SubHeading = styled.h3`
    font-family: gordita_medium;
    font-size: 16px;
`;
const BottomDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
`;
const Skill = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
    span {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 10px;
    margin-right: 8px;
`;
const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
