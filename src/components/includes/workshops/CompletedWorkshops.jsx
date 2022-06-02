import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { practiceConfig } from "../../../axiosConfig";
import { IoLayersOutline } from "react-icons/io5";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function CompletedWorkshops() {
    const [items, setitems] = useState([]);
    let access_token = "CZXfKimWIMmsWGFoZilJ4Z85Mna5yk";
    const [loader, setLoader] = useState(false);
    let [color, setColor] = useState("green");

    useEffect(() => {
        const fetchCompletedWorkshops = () => {
            practiceConfig
                .get("workshops/completed-workshops/tech-schooling", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    // console.log(res);
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setitems(data);
                        setLoader(true);
                    } else if (StatusCode === 6001) {
                        console.log("6001");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchCompletedWorkshops();
    }, []);

    return (
        <Container>
            <Heading>Here is your completed workshops </Heading>
            <Section>
                <h3>Workshops done in HTML</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("HTML"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <Top>
                                        <span>#{item.auto_id}</span>
                                        <h4>{item.title}</h4>
                                    </Top>

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
                                </Right>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Workshops done in Cascading Style Sheets</h3>
                <Content>
                    {items
                        .filter((prod) =>
                            prod.skill.includes("Cascading Style Sheets")
                        )
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <Top>
                                        <span>#{item.auto_id}</span>
                                        <h4>{item.title}</h4>
                                    </Top>

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
                                </Right>
                            </Card>
                        ))}
                </Content>
            </Section>
            {loader ? (
                loader
            ) : (
                <HashLoader color={color} css={override} size={100} />
            )}
        </Container>
    );
}

export default CompletedWorkshops;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: green;
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    margin-left: 76px;
`;
const Section = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        font-family: gordita_regular;
    }
`;
const Heading = styled.h2`
    font-size: 25px;
    font-family: "gordita_regular";
    margin-top: 40px;
    margin-bottom: 20px;
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
const Card = styled.div`
    width: 45%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;
const Left = styled.div`
    width: 250px;

    img {
        display: block;
        width: 100%;
        border-radius: 10px;
    }
`;
const Right = styled.div`
    margin-left: 20px;
    max-width: 80%;
    span {
        color: rgb(65, 174, 118);
        font-family: gordita_medium;
        font-size: 14px;
        margin-bottom: 5px;
        display: block;
    }
    h4 {
        font-family: gordita_medium;
        font-size: 14px;

        line-height: 20px;
    }
`;
const Mark = styled.div`
    background-color: rgb(219, 201, 0);
    border-radius: 30px;
    padding: 4px 25px;
    position: absolute;
    top: 27px;
    color: #fff;
    left: 98px;
    img {
        margin-right: 2px;
    }
`;
const Developer = styled.div`
    margin-top: 10px;
    display: flex;
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
const Top = styled.div`
    display: flex;
    span {
        border-right: 2px solid green;
        padding-right: 10px;
    }
    h4 {
        padding-left: 10px;
    }
`;
