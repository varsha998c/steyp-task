import React from "react";
import styled from "styled-components";

function CongratsBanner() {
    return (
        <Container>
            <div className="image">
                <img
                    className="left"
                    src="https://steyp.com/static/media/man.7dc613b2.svg"
                    alt="Image"
                />
            </div>
            <div className="middle">
                <h3>Congratulations!</h3>
                <p>
                    You have completed your course. Now you can apply for a
                    certificate.
                </p>
                <Button>Get certificate</Button>
            </div>
            <div className="right">
                <img
                    className="card"
                    src="https://steyp.com/static/media/right.f30827c9.svg"
                    alt="Image"
                />
            </div>
        </Container>
    );
}

export default CongratsBanner;
const Container = styled.div`
    margin-top: 80px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url("https://steyp.com/static/media/bg-image.9bcd4f0f.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 240px;
    padding: 0px 4%;
    margin: 20px 0px 40px;
    border-radius: 5px;
    div.image {
        height: 354px;
    }
    div.middle {
        text-align: center;
        width: 29%;
        display: flex;
        flex-direction: column;
    }
    div.right {
        width: 225px;
    }
    img.left {
        width: 100%;
        display: block;
    }
    img.card {
        width: 100%;
        display: block;
    }
    h3 {
        color: rgb(74, 122, 238);
        font-size: 26px;
        font-family: "gordita_medium";
        margin-bottom: 20px;
    }
    p {
        color: rgb(57, 56, 56);
        margin: 5px 0px 20px;
        font-size: 16px;
        line-height: 2.3;
    }
`;
const Button = styled.div`
    color: rgb(255, 255, 255);
    padding: 10px 50px;
    background-color: rgb(74, 122, 238);
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    width: 130px;
    margin: 0 auto;
    font-family: "gordita_medium";
    font-size: 16px;
`;
