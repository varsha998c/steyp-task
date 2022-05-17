import React from "react";
import styled from "styled-components";

function Practice() {
    return (
        <Container>
            <Left>
                <TopContainer>
                    <h3>Your Next Practice</h3>
                    <ImgContainer>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/practices/assets/nextemptybg.svg"
                            alt="Image"
                        />
                    </ImgContainer>
                    <SubHeading>There are no practices active</SubHeading>
                    <Description>
                        Currently, you have no practices to attend. Please go to
                        your next activity to unlock more practices.
                    </Description>
                    <Button>Go to Learn dashboard</Button>
                </TopContainer>
                <BottomContainer>
                    <h3>Upcoming Practices</h3>
                    <Div>
                        <ImageContainer>
                            <img
                                src="https://d3mbaugvr53zg5.cloudfront.net/media/learn/practices/practice/01_-_String_operations.jpg"
                                alt="Image"
                            />
                        </ImageContainer>
                        <ContentSection>
                            <Heading>
                                <span>#1</span>
                                <h4>String Operations</h4>
                            </Heading>
                        </ContentSection>
                    </Div>
                </BottomContainer>
            </Left>
            <Right>
                <ContentContainer>
                    <Header>
                        <h2>Attended Practices</h2>
                        <ButtonDiv>View All</ButtonDiv>
                        <Card>
                            <ImgContainer>
                                <img
                                    src="	https://d3mbaugvr53zg5.cloudfront.net/media/learn/…/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <Mark>
                                <img src="" alt="" />
                                <span>10/10</span>
                            </Mark>
                            <Right>
                                <Heading>
                                    #<Span>1</Span>
                                </Heading>
                                <Title>Create a Profile Website</Title>
                            </Right>
                        </Card>
                        <Card>
                            <ImgContainer>
                                <img
                                    src="	https://d3mbaugvr53zg5.cloudfront.net/media/learn/…/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <Mark>
                                <img src="" alt="" />
                                <span>10/10</span>
                            </Mark>
                            <Right>
                                <Heading>
                                    #<Span>1</Span>
                                </Heading>
                                <Title>Create a Profile Website</Title>
                            </Right>
                        </Card>
                        <Card>
                            <ImgContainer>
                                <img
                                    src="	https://d3mbaugvr53zg5.cloudfront.net/media/learn/…/practice/01_-_Create_Profile_Website_2tdILSb.jpg"
                                    alt="Image"
                                />
                            </ImgContainer>
                            <Mark>
                                <img src="" alt="" />
                                <span>10/10</span>
                            </Mark>
                            <Right>
                                <Heading>
                                    #<Span>1</Span>
                                </Heading>
                                <Title>Create a Profile Website</Title>
                            </Right>
                        </Card>
                    </Header>
                </ContentContainer>
            </Right>
        </Container>
    );
}

export default Practice;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`;
const TopContainer = styled.div`
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 30px;
        font-family: gordita_regular;
    }
`;
const ImgContainer = styled.div`
    width: 330px;
    margin: 35px auto 0;
    img {
        display: block;
        width: 100%;
    }
`;
const SubHeading = styled.h4`
    font-size: 20px;
    font-family: gordita_medium;
    margin-bottom: 8px;
    text-align: center;
`;
const Description = styled.p`
    margin: 0px auto 15px;
    max-width: 85%;
    color: rgb(116, 116, 116);
    font-family: gordita_regular;
    font-size: 14px;
    text-align: center;
`;
const Button = styled.div`
    width: 164px;
    background-color: rgb(10, 129, 251);
    font-family: gordita_medium;
    padding: 8px 25px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 14px;
    /* text-align: center; */
    margin: 0 auto;
`;
const BottomContainer = styled.div`
    margin-top: 50px;
    h3 {
        font-size: 20px;
        color: rgb(24, 72, 76);
        margin-top: 30px;
        font-family: gordita_regular;
    }
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ContentSection = styled.div``;
const Heading = styled.div``;
const Right = styled.div`
    width: 45%;
`;
const ContentContainer = styled.div``;
const Header = styled.div``;
const ButtonDiv = styled.div``;
const Card = styled.div``;
const Mark = styled.div``;
const Span = styled.span``;
const Title = styled.h4``;
const ImageContainer = styled.div`
    width: 60px;
`;
