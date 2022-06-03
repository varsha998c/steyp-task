import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { practiceConfig } from "../../axiosConfig";

function FreeGround() {
    let access_token = "CZXfKimWIMmsWGFoZilJ4Z85Mna5yk";
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        const fetchFreeground = () => {
            practiceConfig
                .get("learn/free-ground/", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    // console.log(res);
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setLessons(data);
                        console.log("#############", data);
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchFreeground();
    }, []);

    return (
        <Container>
            <Top>
                <Left>
                    <h2>Free Ground</h2>
                    <p>
                        Free access for fundamental lessons to make your journey
                        filled with quality pieces of information!{" "}
                    </p>
                </Left>
                <Right>
                    <Button>
                        <IoIosSearch />
                        <input
                            type="text"
                            placeholder="Search in free ground..."
                        />
                    </Button>
                </Right>
            </Top>
            <BottomContainer>
                {lessons.map((lesson) => (
                    <Item>
                        <Heading>{lesson.name}</Heading>
                        <Cards>
                            {lesson.topics.map((topic) => (
                                <Card>
                                    <ImgContainer>
                                        <img src={topic.image} alt="" />
                                    </ImgContainer>
                                    <Title>{topic.name}</Title>
                                    <Time>{topic.duration}</Time>
                                </Card>
                            ))}
                        </Cards>
                    </Item>
                ))}
            </BottomContainer>
        </Container>
    );
}

export default FreeGround;
const Container = styled.div`
    height: 90vh;
    margin-top: 61px;
    padding: 10px 20px 0 83px;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 93%;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    margin-top: 20px;
    h2 {
        font-family: gordita_medium;
        font-size: 23px;
        margin-bottom: 3px;
    }
    p {
        font-size: 14px;
        color: #afafae;
        font-family: gordita_regular;
    }
`;
const Right = styled.div`
    padding: 0px 16px;
    display: flex;
    align-items: center;
    background: rgb(243, 243, 243);
    height: 39px;
    border-radius: 25px;
    width: 250px;
`;
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    }
    input {
        font-family: gordita_regular;
        font-size: 12px;
        width: 100%;
        border: none;
        margin-left: 5px;
    }
`;
const BottomContainer = styled.div`
    margin-top: 50px;
`;
const Item = styled.div`
    margin-bottom: 20px;
`;
const Heading = styled.h5`
    font-family: gordita_medium;
    font-size: 18px;
    color: rgb(115, 115, 115);
    margin-bottom: 20px;
`;
const Card = styled.div`
    margin-bottom: 30px;
    &:nth-child(4) {
        margin-right: 0;
    }
    &:nth-child(8) {
        margin-right: 0;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
`;
const ImgContainer = styled.div`
    width: 320px;
    img {
        display: block;
        width: 100%;
    }
`;
const Title = styled.h5`
    color: rgb(70, 70, 70);
    font-family: gordita_regular;
    font-size: 14px;
    margin-top: 15px;
`;
const Time = styled.p`
    color: rgb(119, 119, 119);
    margin-top: 2px;
    font-family: gordita_regular;
    font-size: 13px;
    width: 100px;
`;
