import React from "react";
import axios from "axios";
import getStockObject from "./getStockObject";
import getStockObject_KIS from "./getStockObject_KIS";
const getAssetAllocationStrategy = async (allocationStrategy) => {
  switch (allocationStrategy) {
    case "AllWether": {
      await getStockObject_KIS("AMS", "SPY");
      await getStockObject_KIS("NAS", "TLT");
      await getStockObject_KIS("AMS", "GLD");
      await getStockObject_KIS("NAS", "IEF");
      await getStockObject_KIS("AMS", "DBC");
      break;
    }
    default: {
      break;
    }
  }
};

export default getAssetAllocationStrategy;
