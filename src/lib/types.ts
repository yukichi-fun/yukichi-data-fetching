export type TokenData = {
  token: string;
  name: string;
  _name: string;
  ticker: string;
  supply: string;
  price: string;
  marketCap: string;
  liquidity: string;
  volume: string;
  volume24H: string;
  prevPrice: string;
  lastUpdated: string;
};

export type TokenInfo = {
  creator: string;
  token: string;
  pair: string;
  agentToken: string;
  data: TokenData;
  description: string;
  image: string;
  twitter: string;
  telegram: string;
  youtube: string;
  website: string;
  trading: boolean;
  tradingOnUniswap: boolean;
};

export type TokenPriceInfo = {
  token_prices_in_usd: string;
  token_price_in_based_token: string;
  price_change_24hr: string;
  token_market_cap_in_usd: string;
};

export type PoolData = {
  id: string;
  type: string;
  attributes: PoolAttributes;
  relationships: PoolRelationships;
};

export type PoolAttributes = {
  base_token_price_usd: string;
  base_token_price_native_currency: string;
  quote_token_price_usd: string;
  quote_token_price_native_currency: string;
  base_token_price_quote_token: string;
  quote_token_price_base_token: string;
  address: string;
  name: string;
  pool_created_at: string;
  fdv_usd: string;
  market_cap_usd: string | null;
  price_change_percentage: PriceChangePercentage;
  transactions: Transactions;
  volume_usd: VolumeUsd;
  reserve_in_usd: string;
};

export type PriceChangePercentage = {
  m5: string;
  m15: string;
  m30: string;
  h1: string;
  h6: string;
  h24: string;
};

export type Transactions = {
  m5: TransactionDetails;
  m15: TransactionDetails;
  m30: TransactionDetails;
  h1: TransactionDetails;
  h6: TransactionDetails;
  h24: TransactionDetails;
};

export type TransactionDetails = {
  buys: number;
  sells: number;
  buyers: number | null;
  sellers: number | null;
};

export type VolumeUsd = {
  m5: string;
  m15: string;
  m30: string;
  h1: string;
  h6: string;
  h24: string;
};

export type PoolRelationships = {
  base_token: TokenRelationship;
  quote_token: TokenRelationship;
  dex: DexRelationship;
};

export type TokenRelationship = {
  data: {
    id: string;
    type: string;
  };
};

export type DexRelationship = {
  data: {
    id: string;
    type: string;
  };
};

export type PoolResponse = {
  data: PoolData[];
};

export type HolderResponse = {
  items: HolderItem[];
  next_page_params?: HolderNextPageParams | null;
};

export type HolderItem = {
  address: AddressInfo;
  token: HolderTokenInfo;
  token_id: string | null;
  value: string;
};

export type AddressInfo = {
  ens_domain_name: string | null;
  hash: string;
  implementations: any[];
  is_contract: boolean;
  is_scam: boolean;
  is_verified: boolean;
  metadata: any | null;
  name: string | null;
  private_tags: any[];
  proxy_type: string;
  public_tags: any[];
  watchlist_names: any[];
};

export type HolderTokenInfo = {
  address: string;
  circulating_market_cap: string | null;
  decimals: string;
  exchange_rate: string | null;
  holders: string;
  icon_url: string | null;
  name: string;
  symbol: string;
  total_supply: string;
  type: string;
  volume_24h: string | null;
};

export type HolderNextPageParams = {
  address_hash: string;
  items_count: number;
  value: number;
};

export type HolderbyAddress = {
  userAddress: string;
  tokenAmount: string;
};
