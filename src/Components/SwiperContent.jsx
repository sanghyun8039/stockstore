import React from "react";
import styled from "styled-components";
function SwiperContent(props) {
  return (
    <Container>
      <StockTicker>
        <p>{props.stockTicker}</p>
      </StockTicker>
      <StockPrice>
        <p>{props.stockPrice}</p>
      </StockPrice>
    </Container>
  );
}

export default SwiperContent;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 33%;
  overflow: hidden !important;
  margin-right: 4px !important;
  padding: 0;
`;

const StockTicker = styled.div`
  p {
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #717182;
    margin: 0;
    padding: 0;
  }
`;

const StockPrice = styled.div`
  p {
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #ff4f60 !important;
    margin: 0;
    padding: 0;
  }
`;
