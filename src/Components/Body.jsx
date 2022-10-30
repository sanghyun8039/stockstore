import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperContent from "./SwiperContent";
import PieChartComponent from "./PieChartComponent";
import TableComponent from "./TableComponent";
import LineChartComponent from "./LineChartComponent";
import AllWehter from "../Data/AllWether";
import getStockObject from "../Utils/getStockObject";
function Body() {
  const [SPYDailyValue, setSPYDailyValue] = useState(null);
  const [XLEDailyValue, setXLEDailyValue] = useState(null);
  const [TotalStockValue, setTotalStockValue] = useState(null);
  const [error, setError] = useState(null);
  const [isStockValue, setIsStockValue] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const responseXLE = await axios.get(
        //   "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=XLE&outputsize=full&apikey=H65SRD1M6KH9R56U"
        // );
        let tStockValue = [];
        tStockValue.push(await getStockObject("SPY"));
        tStockValue.push(await getStockObject("TQQQ"));
        tStockValue.push(await getStockObject("XLE"));
        setTotalStockValue(tStockValue);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
    setIsStockValue(true);
  }, []);

  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperContent stockTicker="SPY" stockPrice="1000" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent stockTicker="KOSPI" stockPrice="800" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <SwiperContent stockTicker="NASDAQ" stockPrice="1200" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>

      <PieChartComponent data={AllWehter}></PieChartComponent>
      {TotalStockValue ? (
        <LineChartComponent data={TotalStockValue}></LineChartComponent>
      ) : (
        <p>Loading...</p>
      )}
      <TableComponent data={AllWehter}></TableComponent>
      {/* <TableComponent data={languageData}></TableComponent>
      <TableComponent data={languageData}></TableComponent> */}
    </Container>
  );
}

export default Body;

const Container = styled.div`
  max-width: 100%;
  background-color: white !important;
`;
