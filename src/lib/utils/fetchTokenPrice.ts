import * as dotenv from "dotenv";

dotenv.config();

export const fetchTokenPrice = async (tokenAddress: string) => {
  const url = `https://pro-api.coingecko.com/api/v3/simple/token_price/oasys?contract_addresses=${tokenAddress}&vs_currencies=usd`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": process.env.COIN_GECKO_API_KEY || "",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const lowerCaseTokenAddress = tokenAddress.toLowerCase();

    const token_prices = data[`${lowerCaseTokenAddress}`].usd;
    return Number(token_prices);
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
};
