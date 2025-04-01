import { formatEther } from "ethers";
import { TokenPriceInfo } from "../types";
import * as dotenv from "dotenv";

dotenv.config();

export const getTokenPriceInsidePool = async (
  totalSupply: string,
  marketCap: string,
  basedTokenPriceInUsd: number
) => {
  const totalSupplyBN = BigInt(totalSupply);
  const marketCapBN = BigInt(marketCap);
  const token_price_in_based_token = formatEther(marketCapBN / totalSupplyBN);
  const token_market_cap_in_usd =
    Number(token_price_in_based_token) *
    Number(totalSupply) *
    Number(basedTokenPriceInUsd);

  const token_prices_in_usd =
    Number(token_price_in_based_token) * basedTokenPriceInUsd;
  return {
    token_prices_in_usd: token_prices_in_usd.toString(),
    token_price_in_based_token,
    price_change_24hr: "-",
    token_market_cap_in_usd: token_market_cap_in_usd.toString(),
  } as TokenPriceInfo;
};
