import { Contract } from "ethers";
import { TokenInfo } from "../types";
import * as dotenv from "dotenv";

dotenv.config();

export const getTokenInfosTillEnd = async (contractToCall: Contract) => {
  let index = 0;
  const tokenAddressArray: string[] = [];
  const tokenInfoArray: TokenInfo[] = [];
  while (true) {
    try {
      const tokenInfoAddress = await contractToCall.tokenInfos(index);
      tokenAddressArray.push(tokenInfoAddress);
      index++;
    } catch (error) {
      console.error(`Stop fetching at index: ${index}`);
      break;
    }
  }

  const tokenInfos = await Promise.all(
    tokenAddressArray.map(async (tokenInfoAddress) => {
      const tokenInfo = await contractToCall.tokenInfo(tokenInfoAddress);
      return {
        creator: tokenInfo.creator,
        token: tokenInfo.token,
        pair: tokenInfo.pair,
        agentToken: tokenInfo.agentToken,
        data: {
          token: tokenInfo.data.token,
          name: tokenInfo.data.name,
          _name: tokenInfo.data._name,
          ticker: tokenInfo.data.ticker,
          supply: tokenInfo.data.supply.toString(),
          price: tokenInfo.data.price.toString(),
          marketCap: tokenInfo.data.marketCap.toString(),
          liquidity: tokenInfo.data.liquidity.toString(),
          volume: tokenInfo.data.volume.toString(),
          volume24H: tokenInfo.data.volume24H.toString(),
          prevPrice: tokenInfo.data.prevPrice.toString(),
          lastUpdated: tokenInfo.data.lastUpdated.toString(),
        },
        description: tokenInfo.description,
        image: tokenInfo.image,
        twitter: tokenInfo.twitter,
        telegram: tokenInfo.telegram,
        youtube: tokenInfo.youtube,
        website: tokenInfo.website,
        trading: tokenInfo.trading,
        tradingOnUniswap: tokenInfo.tradingOnUniswap,
      };
    })
  );

  tokenInfoArray.push(...tokenInfos);

  return tokenInfoArray;
};
