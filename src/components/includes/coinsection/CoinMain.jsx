import React from "react";
import styled from "styled-components";
import CoinLeft from "./CoinLeft";
import PurchaseCoin from "./PurchaseCoin";
import Referal from "./Referal";

function CoinMain() {
    return (
        <Container id="coin">
            <Left>
                <CoinLeft />
            </Left>
            <Right>
                <Top>
                    <PurchaseCoin />
                </Top>
                <Bottom>
                    <Referal />
                </Bottom>
            </Right>
        </Container>
    );
}

export default CoinMain;
const Container = styled.div`
    width: 93%;
    margin: 103px 0 0 78px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    padding: 20px 0px;
    background: rgb(248, 249, 253);
    margin-right: 8px;
    height: calc(100vh - 143px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Right = styled.div`
    width: 78%;
`;
const Top = styled.div``;
const Bottom = styled.div``;
