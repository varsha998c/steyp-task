import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { practiceConfig } from "../../../axiosConfig";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Card() {
    let access_token = "ZgFHzMlH6fij7lh8J6B8pHeaBtzoMA";
    const { id } = useParams();
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        const fetchSkill = () => {
            practiceConfig
                .get(`learn/skills/${id}`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    if (res.data.StatusCode === 6000) {
                        setSkill(res.data.data);
                        console.log(res, "============================");
                    } else if (res.data.StatusCode === 6001) {
                        console.log("6001");
                    }
                    console.log(res, "true");
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchSkill();
    }, []);

    return (
        <>
            {skill.map((item) => (
                <Cards>
                    <ImageContainer>
                        <img src={item.image} alt="Image" />
                    </ImageContainer>
                    <Right>
                        <h5>skill {item.order_id}</h5>
                        <h3>{item.name}</h3>
                        <Div>
                            <Span>
                                <ImgContainer>
                                    <IoLayersOutline />
                                </ImgContainer>
                                {item.lessons} Lessons
                            </Span>
                            <Span>
                                <ImgContainer>
                                    <AiOutlineClockCircle />
                                </ImgContainer>
                                {item.duration}
                            </Span>
                        </Div>
                    </Right>
                </Cards>
            ))}
        </>
    );
}

export default Card;
const Cards = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 19px;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    position: relative;
`;
const Left = styled.div``;
const ImageContainer = styled.div`
    width: 180px;
    display: block;
    margin-right: 20px;
    img {
        width: 100%;
        border-radius: 10px;
    }
`;
const Right = styled.div`
    h5 {
        font-size: 12px;
        font-family: gordita_regular;
        color: rgb(158, 158, 158);
    }
    h3 {
        font-family: "gordita_medium";
        font-size: 16px;
        margin: 15px 0;
    }
`;
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Span = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
`;
const ImgContainer = styled.div`
    margin-right: 5px;
    color: rgb(76, 175, 80);
    font-size: 18px;
`;
