import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperContent from "./SwiperContent";
import PieChartComponent from "./PieChartComponent";
import TableComponent from "./TableComponent";
function Body() {
  const languageData = [
    {
      id: "python",
      label: "python",
      value: 285,
      color: "hsl(170, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 401,
      color: "hsl(243, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 541,
      color: "hsl(173, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 563,
      color: "hsl(194, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 27,
      color: "hsl(132, 70%, 50%)",
    },
  ];
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

      <PieChartComponent data={languageData}></PieChartComponent>
      <TableComponent data={languageData}></TableComponent>
      <TableComponent data={languageData}></TableComponent>
      <TableComponent data={languageData}></TableComponent>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  max-width: 100%;
  background-color: white !important;
`;
