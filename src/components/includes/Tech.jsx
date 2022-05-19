import React, { useState } from "react";
import styled from "styled-components";
import Performance from "./Performance";
import "../../assets/css/style.css";

function Tech() {
    const [items, setItems] = useState([
        {
            id: 1,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 2,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "Backend Developer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 3,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "DevOps Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 4,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "Web Application Developer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 5,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "Mobile Application Developer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 6,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "Data Scientist",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 7,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "Machine Learning Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 8,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "AI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 9,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 10,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 11,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 12,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 13,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
        {
            id: 14,
            img: "https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg",
            name: "UI Engineer",
            date: "Completed on 27 Oct 2021",
            star: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg",
        },
    ]);
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
                            <Item>
                                <Left>
                                    <img src={item.img} alt="img" />
                                </Left>
                                <Right>
                                    <Heading>{item.name}</Heading>
                                    <Paragraph>{item.date}</Paragraph>
                                    <Stars>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
                                        </Star>
                                        <Star>
                                            <img src={item.star} alt="star" />
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
    margin-top: 20px;
`;
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 68%;
    max-height: 70vh;
`;
const Item = styled.div`
    width: 43%;
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
`;
const Left = styled.div`
    width: 84px;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div`
    margin-left: 15px;
    width: 240px;
`;
const Heading = styled.h4`
    margin: 0;
    font-size: 15px;
    font-family: "gordita_medium";
`;

const Paragraph = styled.span`
    margin: 0;
    color: rgb(127, 127, 127);
    font-size: 13px;
    font-family: "gordita_regular";
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
