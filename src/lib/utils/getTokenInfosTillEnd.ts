import { Contract } from "ethers";
import { TokenInfo } from "../types";
import * as dotenv from "dotenv";

dotenv.config();

export const getTokenInfosTillEnd = async (contractToCall: Contract) => {
  const tokenAddressArray: string[] = [];
  const tokenInfoArray: TokenInfo[] = [];
  for (let i = 0; ; i++) {
    const batchAddress = await Promise.all(
      new Array(100)
        .fill(0)
        .map((_, j) => contractToCall.tokenInfos(i * 100 + j).catch((_) => 0))
    );
    tokenAddressArray.push(...batchAddress.filter((address) => address !== 0));
    if (batchAddress[batchAddress.length - 1] === 0) {
      console.error(`Stop fetching at index: ${tokenAddressArray.length}`);
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
