import { ethers } from "ethers";
import { TokenInfo } from "../types";
import { BONDING_CONTRACT_ABI, bondingContractInfos } from "../constants";
import { provider } from "../account";
import { getTokenInfosTillEnd } from "../utils/getTokenInfosTillEnd";
import * as fs from "fs";
import { fetchTokenPrice } from "../utils/fetchTokenPrice";
import { getTokenPriceOutsidePool } from "../utils/getTokenPriceOutsidePool";
import { getTokenPriceInsidePool } from "../utils/getTokenPriceInsidePool";
import { getHolderbyAddress } from "../utils/getHolderbyAddress";
import { getTokenCreatedTime } from "../utils/getTokenCreatedTime";

const BATCH_SIZE = 30; // 50 times/sec limit of oasys api

export async function fetchAllTokenInfos() {
  const bondingContracts = bondingContractInfos;
  const tokenInfosMap: Record<string, TokenInfo[]> = {};

  for (const contract of bondingContracts) {
    const baseTokenPriceInUsd = await fetchTokenPrice(
      contract.baseTokenAddress
    );
    const bongingCall = new ethers.Contract(
      contract.bondingAddress,
      BONDING_CONTRACT_ABI,
      provider
    );

    console.log(`1. Fetching ${contract.basedChain} token infos...`);
    const tokenInfosArray = await getTokenInfosTillEnd(bongingCall);

    console.log(`2. Fetching ${contract.basedChain} token prices...`);
    const updatedTokenInfosArray = await processInBatches(
      tokenInfosArray,
      contract,
      baseTokenPriceInUsd
    );

    console.log(
      `##### Finished fetching ${contract.basedChain} token infos #####`
    );

    tokenInfosMap[contract.basedChain] = updatedTokenInfosArray;
  }

  const replacer = (key: string, value: any) => {
    return typeof value === "bigint" ? value.toString() : value;
  };
  const today = new Date().toISOString().split("T")[0];

  fs.writeFileSync(
    `./allTokenInfos_${today}_V2.json`,
    JSON.stringify(tokenInfosMap, replacer, 2)
  );

  return tokenInfosMap;
}

const processInBatches = async (
  tokenInfosArray: any[],
  contract: any,
  baseTokenPriceInUsd: number
) => {
  const result: any[] = [];

  for (let i = 0; i < tokenInfosArray.length; i += BATCH_SIZE) {
    const batch = tokenInfosArray.slice(i, i + BATCH_SIZE);
    const processedBatch = await Promise.all(
      batch.map((tokenInfo) =>
        processTokenInfo(tokenInfo, contract, baseTokenPriceInUsd)
      )
    );
    result.push(...processedBatch);
  }

  return result;
};

const processTokenInfo = async (
  tokenInfo: any,
  contract: any,
  baseTokenPriceInUsd: number
) => {
  const isGraduated = tokenInfo.tradingOnUniswap;

  const {
    token_prices_in_usd,
    token_price_in_based_token,
    price_change_24hr,
    token_market_cap_in_usd,
  } = isGraduated
    ? await getTokenPriceOutsidePool(
        tokenInfo.agentToken,
        contract.baseTokenAddress,
        tokenInfo.data.supply
      )
    : await getTokenPriceInsidePool(
        tokenInfo.data.supply,
        tokenInfo.data.marketCap,
        baseTokenPriceInUsd
      );

  const holders = isGraduated
    ? await getHolderbyAddress(tokenInfo.agentToken)
    : await getHolderbyAddress(tokenInfo.token);

  const tokenCreatedTime = await getTokenCreatedTime(tokenInfo.token);

  return {
    ...tokenInfo,
    isGraduated,
    tokenPriceInBasedToken: token_price_in_based_token,
    tokenPriceInUsd: token_prices_in_usd,
    tokenMarketCapInUsd: token_market_cap_in_usd,
    priceChange24hr: price_change_24hr,
    holders,
    tokenCreatedTime,
  };
};
