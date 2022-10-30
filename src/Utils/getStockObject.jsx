import axios from "axios";

const getStockObject = async (Ticker) => {
  const responseTicker = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${Ticker}&outputsize=full&apikey=H65SRD1M6KH9R56U`
  );

  let timeSeriesData = responseTicker.data["Monthly Time Series"];
  let TickerGraphValue = [];
  let TickerStockGraphValue = [];
  TickerGraphValue["id"] = Ticker;

  Object.keys(timeSeriesData).forEach((key) => {
    let GrpahObjectValue = [];
    GrpahObjectValue["x"] = key;
    GrpahObjectValue["y"] = timeSeriesData[key]["1. open"];
    TickerStockGraphValue.push(GrpahObjectValue);
  });
  let reversedSPY = TickerStockGraphValue.reverse();
  TickerGraphValue["data"] = reversedSPY;

  return TickerGraphValue;
};

export default getStockObject;
