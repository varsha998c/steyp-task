import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Performance from "./Performance";
import "../../assets/css/style.css";
import { learnConfig, practiceConfig } from "../../axiosConfig";
import { logDOM } from "@testing-library/react";
import axios from "axios";
import MenusContainer from "./MenusContainer";

function Tech() {
    const [items, setItems] = useState([]);
    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";

    useEffect(() => {
        const fetchAchievements = () => {
            practiceConfig
                .get("learn/achievements/tech-schooling/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setItems(data);
                    } else if (StatusCode === 6001) {
                        console.log("res");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchAchievements();
    }, []);

    return (
        <Container>
            <Content>
                <Headings>
                    <h3>Achievements</h3>
                    <h3 className="performance">Overall Performance</h3>
                </Headings>
                <Section>
                    <Items>
                        {items.map((item) => (
                            <Item
                                key={item.id}
                                className={
                                    item.is_completed
                                        ? "completed"
                                        : "not-completed"
                                }
                            >
                                <Left
                                    className={
                                        item.is_completed === "true"
                                            ? "completed"
                                            : "not-completed"
                                    }
                                >
                                    <img src={item.image} alt="img" />
                                </Left>
                                <Right>
                                    <Heading>{item.name}</Heading>
                                    {item.is_completed ? (
                                        <Paragraph>
                                            {item.date_updated}
                                        </Paragraph>
                                    ) : (
                                        ""
                                    )}

                                    <Stars>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                        <Star>
                                            <img
                                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                                alt="star"
                                            />
                                        </Star>
                                    </Stars>
                                </Right>
                                <Steyp>
                                    <Img>
                                        <img
                                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/steyp/steyp-log.png"
                                            alt="logo"
                                        />
                                    </Img>
                                </Steyp>
                            </Item>
                        ))}
                    </Items>
                    <Marks>
                        <Performance />
                    </Marks>
                </Section>
            </Content>
        </Container>
    );
}

export default Tech;
const Container = styled.div`
    h2 {
        text-transform: capitalize;
        font-family: "gordita_medium";
        font-size: 23px;
        margin-bottom: 19px;
    }
`;
const Div = styled.div`
    width: 100%;
    height: 50px;
    box-shadow: 14px 8px 36px -6px #c2bdbb;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Ul = styled.div`
    display: flex;
    width: 74%;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
`;
const Li = styled.div`
    min-width: fit-content;
    display: inline-block;
    color: rgb(113, 113, 113);
    font-size: 15px;
    margin-right: 55px;
    cursor: pointer;
    font-family: "gordita_regular";
    &:hover {
        color: rgb(95, 209, 138);
    }
    &:last-child {
        margin-right: 0;
    }
`;
const Content = styled.div`
    width: 95%;
    margin-left: 76px;
`;
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 69%;
    max-height: 70vh;
`;
const Item = styled.div`
    width: 44%;
    cursor: pointer;
    background: rgb(232, 243, 253);
    padding: 8px 18px;
    border-radius: 5px;
    display: flex;
    height: 80px;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    margin-right: 20px;
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
    &:nth-child(9) {
        margin-bottom: 20px;
    }
    &:nth-child(10) {
        margin-right: 0;
        margin-bottom: 20px;
    }
    &.not-completed {
        cursor: not-allowed;
        position: relative;
        overflow: hidden;
        filter: grayscale(1);
    }
    &.completed {
        background: rgb(232, 243, 253);
    }
`;
const Left = styled.div`
    width: 84px;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div`
    width: 290px;
`;
const Heading = styled.h4`
    margin: 0;
    font-size: 15px;
    font-family: "gordita_medium";
`;

const Paragraph = styled.span`
    color: rgb(127, 127, 127);
    font-size: 13px;
    font-family: "gordita_regular";
    margin: 10px 0;
    &.not-completed {
        display: none;
    }
`;
const Stars = styled.div`
    display: flex;
    justify-content: space-between;
    width: 130px;
`;
const Star = styled.div``;
const Steyp = styled.div`
    padding-top: 58px;
`;
const Img = styled.div`
    width: 35px;
    img {
        width: 100%;
        display: block;
    }
`;
const Marks = styled.div``;
const Section = styled.div`
    display: flex;
`;
const Headings = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        font-family: gordita_medium;
        display: block;
        font-size: 20px;
        margin-bottom: 8px;
        margin-top: 25px;
    }
`;
