import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { practiceConfig } from "../../../axiosConfig";

function CompletedPractice() {
    let access_token = "CZXfKimWIMmsWGFoZilJ4Z85Mna5yk";
    const [items, setitems] = useState([]);
    useEffect(() => {
        const fetchCompletedPractices = () => {
            practiceConfig
                .get("/practices/completed-practices/tech-schooling", {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                .then((res) => {
                    // console.log(res);
                    const { StatusCode, data } = res.data;
                    if (StatusCode === 6000) {
                        setitems(data);
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
            <Heading>Here is your completed practices </Heading>
            <Section>
                <h3>Practices done in HTML</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("HTML"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Practices done in Cascading Style Sheets</h3>
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
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Practices done in JavaScript</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("JavaScript"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Practices done in React</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("React"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Practices done in Python</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("Python"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>

            <Section>
                <h3>Practices done in Django</h3>
                <Content>
                    {items
                        .filter((prod) => prod.skill.includes("Django"))
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
            <Section>
                <h3>Practices done in Progressive Web Apps</h3>
                <Content>
                    {items
                        .filter((prod) =>
                            prod.skill.includes("Progressive Web Apps")
                        )
                        .map((item) => (
                            <Card>
                                <Left>
                                    <img src={item.image} alt="image" />
                                </Left>
                                <Right>
                                    <span>#{item.auto_id}</span>
                                    <h4>{item.title}</h4>
                                </Right>
                                <Mark>
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/star.svg"
                                        alt="Image"
                                    />
                                    <span>{item.practice_score}/10</span>
                                </Mark>
                            </Card>
                        ))}
                </Content>
            </Section>
        </Container>
    );
}

export default CompletedPractice;
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
    width: 200px;

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
