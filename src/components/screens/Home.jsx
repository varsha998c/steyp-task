import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Challeges from "./Challeges";
import FreeGround from "./FreeGround";

function Home({ setDash }) {
    console.log("in home");
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Top>
                    <One>
                        <span>Hi, </span>
                        Varsha {""}
                    </One>
                    <Img>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/30-04-2022/decor.svg"
                            alt="img"
                        />
                    </Img>
                </Top>
                <Bottom>
                    <Div onClick={() => navigate("tech-schooling")}>
                        <h3>Subjects</h3>
                        <Item>
                            <Items>
                                <Imgs>
                                    <img
                                        src="https://d3mbaugvr53zg5.cloudfront.net/media/e-learning/photos/subject-images/1_6x8IJAf.svg"
                                        alt="img"
                                    />
                                </Imgs>
                                <Round>
                                    <img
                                        src="https://d3mbaugvr53zg5.cloudfront.net/media/e-learning/photos/subject-images/techschooling_qZi8bG4.svg"
                                        alt="img"
                                    />
                                </Round>
                                <Heading>Tech Schooling</Heading>
                                <Arrow>
                                    <img
                                        src="https://d3mbaugvr53zg5.cloudfront.net/media/e-learning/photos/subject-images/greenarrow_KMnh8MC.svg"
                                        alt="img"
                                    />
                                </Arrow>
                                <Dots>
                                    <img
                                        src="https://d3mbaugvr53zg5.cloudfront.net/media/e-learning/photos/subject-images/1_znke34i.svg"
                                        alt="img"
                                    />
                                </Dots>
                            </Items>
                        </Item>
                    </Div>
                </Bottom>
            </Container>

            {/* <FreeGround />
            <Challeges /> */}
        </>
    );
}

export default Home;
const Container = styled.div`
    height: 90vh;
    overflow-y: scroll;
    margin-top: 80px;
    margin-left: 55px;
    padding: 10px 0 0 20px;
`;
const Top = styled.div`
    padding: 5px 20px;
    background-color: rgb(228, 242, 229);
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
`;
const Bottom = styled.div``;
const One = styled.h3`
    font-family: gordita_medium;
    font-size: 24px;
    span {
        color: rgb(80, 178, 120);
    }
`;
const Img = styled.div`
    width: 70px;
    img {
        display: block;
        width: 100%;
    }
`;
const Div = styled.div`
    padding-top: 25px;
    h3 {
        font-size: 20px;
        color: rgb(0, 0, 0);
        font-family: gordita_medium;
    }
`;
const Item = styled.div`
    display: flex;
    padding-top: 10px;
    border-radius: 5px;
`;
const Items = styled.div`
    border-radius: 7px;
    padding: 40px 30px;
    width: 280px;
    height: 200px;
    background-color: rgb(236, 253, 237);
    position: relative;
    cursor: pointer;
`;
const Imgs = styled.div`
    width: 60px;
    position: absolute;
    top: 4px;
    right: 1px;
    img {
        width: 100%;
        display: block;
    }
`;
const Round = styled.div`
    box-shadow: rgb(0 0 0 / 16%) 4px 3px 19px;
    border-radius: 50%;
    width: 50px;
    img {
        width: 100%;
        display: block;
    }
`;
const Heading = styled.h3`
    margin-top: 20px;
    font-size: 21px;
    color: rgb(0, 0, 0);
    font-family: gordita_medium;
    width: 40%;
`;
const Arrow = styled.div`
    width: 25px;
    margin-top: 70px;
    cursor: pointer;

    img {
        width: 100%;
        display: block;
    }
`;
const Dots = styled.div`
    width: 60px;
    position: absolute;
    bottom: 5px;
    left: 0;
    img {
        width: 100%;
        display: block;
    }
`;
