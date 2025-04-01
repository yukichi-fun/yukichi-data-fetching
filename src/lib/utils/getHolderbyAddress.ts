import { EXPLORE_API_URL } from "../constants";
import {
  HolderbyAddress,
  HolderNextPageParams,
  HolderResponse,
} from "../types";
import * as dotenv from "dotenv";

dotenv.config();

export const getHolderbyAddress = async (address: string) => {
  const allHolders: HolderbyAddress[] = [];
  let nextPageParams: HolderNextPageParams | null = null;

  do {
    const url: string = nextPageParams
      ? `${EXPLORE_API_URL}/tokens/${address}/holders?address_hash=${
          nextPageParams.address_hash
        }&items_count=${nextPageParams.items_count}&value=${BigInt(
          nextPageParams.value
        )}`
      : `${EXPLORE_API_URL}/tokens/${address}/holders`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: HolderResponse = await response.json();
      const holders = data.items.map((item) => ({
        userAddress: item.address.hash,
        tokenAmount: item.value,
      }));

      allHolders.push(...holders);

      nextPageParams = data.next_page_params || null;
    } catch (error) {
      console.error("Error fetching token holders:", error);
      throw error;
    }
  } while (nextPageParams);
  return allHolders;
};
