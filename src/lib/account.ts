import { JsonRpcProvider } from "ethers";
import { OASYS_MAINNET_RPC_URL } from "./constants";

export const provider = new JsonRpcProvider(OASYS_MAINNET_RPC_URL);
