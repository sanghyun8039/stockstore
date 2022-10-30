import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [SPYDailyValue, setSPYDailyValue] = useState(null);
  const [XLEDailyValue, setXLEDailyValue] = useState(null);
  const [error, setError] = useState(null);
  const [isStockValue, setIsStockValue] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSPY = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&outputsize=full&apikey=H65SRD1M6KH9R56U"
        );

        const responseXLE = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=XLE&outputsize=full&apikey=H65SRD1M6KH9R56U"
        );
        let timeSeriesSPY = responseSPY.data["Monthly Time Series"];
        let timeSeriesXLE = responseXLE.data["Monthly Time Series"];
        let SPYDailyValueArray = [];
        let XLEDailyValueArray = [];
        for (let key in timeSeriesSPY) {
          let GraphValue = [];
          GraphValue["id"] = "SPY";
          GraphValue["data"]["x"] = key;
          GraphValue["data"]["y"] = timeSeriesSPY[key]["1. open"];
          SPYDailyValueArray.push(GraphValue);
        }

        for (let key in timeSeriesXLE) {
          let GraphValue = [];
          GraphValue["id"] = "XLE";
          GraphValue["data"]["x"] = key;
          GraphValue["data"]["y"] = timeSeriesXLE[key]["1. open"];
          XLEDailyValueArray.push(GraphValue);
        }
        setSPYDailyValue(SPYDailyValueArray);
        setXLEDailyValue(XLEDailyValueArray);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
    setIsStockValue(true);
  }, []);
  return (
    <div className="App">
      {/* <p>{spyStock['Meta Data']['1. Information']}</p>
      <p>{spyStock['Meta Data']['2. Symbol']}</p>
      <p>{spyStock['Time Series (Daily)']['2. Symbol']}</p> */}
      {isStockValue ? (
        <ul>
          {SPYDailyValue?.map((stock) => (
            <li>
              SPY -- 0. Date : {stock["x"]} / 1.Open Price : {stock["y"]}
            </li>
          ))}
          {XLEDailyValue?.map((stock) => (
            <li>
              XLE -- 0. Date : {stock["x"]} / 1.Open Price : {stock["y"]}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
