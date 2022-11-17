import axios from "axios";

const getStockObject = async (Market, Ticker) => {
  const responseTicker = await axios.get(
    // "/uapi/overseas-price/v1/quotations/price?AUTH=&EXCD=AMS&SYMB=XLE",
    `/uapi/overseas-price/v1/quotations/dailyprice?AUTH=&EXCD=${Market}&SYMB=${Ticker}&GUBN=2&BYMD=&MODP=0`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2tlbiIsImF1ZCI6ImE5OTY3ZWIwLWQyMDUtNGM2My1iNDVlLTczZTA3NmY0ZmNmOSIsImlzcyI6InVub2d3IiwiZXhwIjoxNjY4MzgzNjQ0LCJpYXQiOjE2NjgyOTcyNDQsImp0aSI6IlBTbVdiN3JnMWticzBndmZZMmdaS2VaM2k5RDhnNzlkVzBaYiJ9.C5VISKO1c2g6Rpx1vWYSiY6SnlBPxTkuSNi9tzUAhdW-W4kg2IcYfs_NWvDios2CiRqdNj_lhGHJ20tbwdfZ9w",
        appKey: "PSmWb7rg1kbs0gvfY2gZKeZ3i9D8g79dW0Zb",
        appSecret:
          "egQcDWTtEfB+/DCltjgb665tqxcEILgQeRT05eLcT44W4+4gONJGcJCEMq5XptpQFAq/wLuhcDLmNegze5vLvR0zYxz/zYnOnkTwAyVxDnx0L8DGEr3b3wZViD29BYxjdEn2ihrb2tn7hC0eP3hQiVU5uGlFmZ70I3q7zppsJj0yazW73QE=",
        tr_id: "HHDFS76240000",
      },
    }
  );

  let timeSeriesData = responseTicker.data["output2"];
  let TickerGraphValue = {};
  let TickerStockGraphValue = [];
  TickerGraphValue["id"] = Ticker;

  Object.keys(timeSeriesData).forEach((key) => {
    let GrpahObjectValue = {};
    GrpahObjectValue["x"] = timeSeriesData[key]["xymd"];
    GrpahObjectValue["y"] = timeSeriesData[key]["clos"];
    TickerStockGraphValue.push(GrpahObjectValue);
  });
  let reversedSPY = TickerStockGraphValue.reverse();
  TickerGraphValue["data"] = reversedSPY;

  return TickerGraphValue;
};

export default getStockObject;

// axios.get("https://kauth.kakao.com/v2/user/me", {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
