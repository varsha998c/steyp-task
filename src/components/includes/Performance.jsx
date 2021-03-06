import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { performConfig, practiceConfig } from "../../axiosConfig";

function Performance() {
    const [item, setItem] = useState([]);
    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";
    useEffect(() => {
        practiceConfig
            .get("learn/student-performance/tech-schooling/", {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then((res) => {
                const { StatusCode, data } = res.data;
                if (StatusCode === 6000) {
                    setItem(data);
                    console.log("22dddddddd2", res);
                } else if (StatusCode === 6001) {
                    console.log("res");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <Items>
                <Left>Lessons</Left>
                <Right>{item.lessons_count}</Right>
            </Items>
            <Items>
                <Left>Topics</Left>
                <Right>{item.topics_count}</Right>
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
                    <span>{item.designations_count}</span>
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
                    <span>{item.skills_count}</span>
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
                    <span>{item.practices_count}</span>
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
                    <span>{item.assessments_count}</span>
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
                    <span>{item.workshops_count}</span>
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
                    <span>{item.support_chats_count}</span>
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
    width: 380px;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const Left = styled.h5`
    margin: 0;
    font-family: gordita_medium;
    font-size: 16px;
`;
const Right = styled.span`
    font-family: gordita_bold;
    display: block;
    font-size: 20px;
    margin: 6px 0px;
`;
const Proffesions = styled.div`
    background: rgb(232, 243, 253);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 16px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 380px;
    &:last-child {
        margin-bottom: 0;
    }
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
        font-size: 13px;
        margin-bottom: 4px;
        font-family: "gordita_medium";
        color: rgb(125, 132, 141);
    }
    span {
        font-family: "gordita_medium";
        display: block;
        font-size: 20px;
    }
`;
