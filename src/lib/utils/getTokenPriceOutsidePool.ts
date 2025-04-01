import { PoolData, TokenPriceInfo } from "../types";
import * as dotenv from "dotenv";

dotenv.config();

export const getTokenPriceOutsidePool = async (
  agentTokenAddress: string,
  basedTokenAddress: string,
  marketCap: string
) => {
  const url = `https://pro-api.coingecko.com/api/v3/onchain/search/pools?query=${agentTokenAddress}&network=oasys`;

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

    // to get the correct pool index
    const correctIndex = getTheCorrectPoolIndex(
      data.data,
      agentTokenAddress,
      basedTokenAddress
    );

    if (correctIndex === -1) {
      console.log(`##### cannot find the correct pool index of this token:`);
      console.log(`##### pool agnet token address: ${agentTokenAddress}`);
      console.log(`##### poo based token address: ${basedTokenAddress}`);
      console.log(`##### pool not found`);
      return {
        token_prices_in_usd: "-",
        token_price_in_based_token: "-",
        price_change_24hr: "-",
        token_market_cap_in_usd: "-",
      } as TokenPriceInfo;
    }

    const poolData = data.data[correctIndex].attributes;

    const token_prices_in_usd = poolData.base_token_price_usd; // meme token price in usd
    const token_price_in_based_token = poolData.base_token_price_quote_token; // meme token price in based token
    const price_change_24hr = poolData.price_change_percentage.h24.toString(); // meme token price change in 24hr
    const token_market_cap_in_usd = (
      Number(token_prices_in_usd) * Number(marketCap)
    ).toString(); // meme token market cap in usd

    return {
      token_prices_in_usd,
      token_price_in_based_token,
      price_change_24hr,
      token_market_cap_in_usd,
    } as TokenPriceInfo;
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
};

const getTheCorrectPoolIndex = (
  poolData: PoolData[],
  agentTokenAddress: string,
  baseTokenAddress: string
): number => {
  for (let i = 0; i < poolData.length; i++) {
    if (
      poolData[i].relationships.base_token.data.id ===
        `oasys_${agentTokenAddress.toLowerCase()}` &&
      poolData[i].relationships.quote_token.data.id ===
        `oasys_${baseTokenAddress.toLowerCase()}`
    ) {
      return i;
    }
  }
  return -1;
};
