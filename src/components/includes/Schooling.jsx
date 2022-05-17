import React from "react";
import styled from "styled-components";

function Schooling() {
    return (
        <Container>
            <h2>Tech Schooling</h2>
            <Div>
                <Ul>
                    <Li>Dashboard</Li>
                    <Li>Learning</Li>
                    <Li>Practices</Li>
                    <Li>Workshops</Li>
                    <Li>Assessments</Li>
                    <Li>New Content</Li>
                    <Li>Certification</Li>
                </Ul>
            </Div>
            <Content>
                <h3>Achievements</h3>
                <Items>
                    <Item>
                        <Left>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/elearning/designation/UI_Engineer.jpg"
                                alt="img"
                            />
                        </Left>
                        <Right>
                            <Heading>UI Engineer</Heading>
                            <Paragraph>Completed on 27 Oct 2021</Paragraph>
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
                </Items>
            </Content>
        </Container>
    );
}

export default Schooling;
const Container = styled.div`
    width: 95%;
    margin: 50px auto 0;
`;
const Div = styled.div`
    width: 500px;
    height: 50px;
    background-color: red;
`;
const Ul = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`;
const Li = styled.div`
    width: 50px;
`;
const Content = styled.div``;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    width: 45%;
`;

const Left = styled.div``;

const Right = styled.div``;

const Heading = styled.h3``;

const Paragraph = styled.p``;
const Star = styled.div``;
const Steyp = styled.div``;
const Img = styled.img``;
