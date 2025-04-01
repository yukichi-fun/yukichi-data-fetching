import { EXPLORE_API_URL } from "../constants";

import * as dotenv from "dotenv";

dotenv.config();

const getTokenCreatedTransaction = async (address: string) => {
  const url: string = `${EXPLORE_API_URL}/addresses/${address}`;
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

    const data = await response.json();
    return data.creation_transaction_hash;
  } catch (error) {
    console.error("Error fetching token holders:", error);
    throw error;
  }
};

export const getTokenCreatedTime = async (address: string) => {
  const creationTransactionHash = await getTokenCreatedTransaction(address);
  const url: string = `${EXPLORE_API_URL}/transactions/${creationTransactionHash}`;
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

    const data = await response.json();
    const timestamp = data.timestamp;
    return timestamp;
  } catch (error) {
    console.error("Error fetching token holders:", error);
    throw error;
  }
};
