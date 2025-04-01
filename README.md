
# START

1. run yarn install
2. set up `.env` 
   - check the NOTE below to apply a coin gecko api key
3. run `yarn start` to fetch the all tokens data json 
   - you can fecth the data directly from the generated json
   - or store the fetched data in your database and call this function at regular intervals in your server to update infos

# NOTE: 

Please at least use Analyst plan of coin gecko api

*pro plan of coin gecko api: https://www.coingecko.com/en/api/pricing*

# Data Structure:

example of the data structure:

```
{
  "WOAS": [
    {
      "creator": "0x569b559553eF7a8B31eafb5fD011786989184eaf",
      "token": "0x276FbA33366F928a1F470403E0F2A1D064A3a290",
      "pair": "0x8B9ed4b8cb3956f9b6c5605eeec6A9c472034b30",
      "agentToken": "0x0000000000000000000000000000000000000000",
      "data": {
        "token": "0x276FbA33366F928a1F470403E0F2A1D064A3a290",
        "name": "fun Mascot Token",
        "_name": "Mascot Token",
        "ticker": "Mascout",
        "supply": "1000000",
        "price": "0",
        "marketCap": "9859047259375953891083",
        "liquidity": "10876974170812002378430",
        "volume": "4598432914593998810785",
        "volume24H": "994273969338654619",
        "prevPrice": "0",
        "lastUpdated": "1741238993"
      },
      "description": "This is a mascot",
      "image": "https://yukichi.fun/i/31354ee18941fa140eb71c1a538c6f066d021e1c3194106fea958e86fcdbd14a.webp",
      "twitter": "",
      "telegram": "",
      "youtube": "",
      "website": "",
      "trading": true,
      "tradingOnUniswap": false,
      "isGraduated": false,
      "tokenPriceInBasedToken": "0.009859047259375953",
      "tokenPriceInUsd": "0.00018086086989718364",
      "tokenMarketCapInUsd": "180.86086989718362",
      "priceChange24hr": "-",
      "holders": [
        {
          "userAddress": "0x8B9ed4b8cb3956f9b6c5605eeec6A9c472034b30",
          "tokenAmount": "551624"
        },
        {
          "userAddress": "0x9531ccf002B531F91ec632dEcf8af08756cf9694",
          "tokenAmount": "236630"
        },
        {
          "userAddress": "0x78f6c2458b53d0735208992c693bB2b2dAfEbb52",
          "tokenAmount": "211211"
        },
        {
          "userAddress": "0x0799e73df13e06B42e8259b8507f4bF3f71Ed098",
          "tokenAmount": "218"
        },
        {
          "userAddress": "0x6f4519523404E0b1e9db75EAD8D595792A8237B1",
          "tokenAmount": "217"
        },
        {
          "userAddress": "0x569b559553eF7a8B31eafb5fD011786989184eaf",
          "tokenAmount": "100"
        }
      ],
      "tokenCreatedTime": "2025-02-24T09:24:27.000000Z"
    },
   ],

   MSM:[ ... ],

   MCHC:[ ... ],

   Z:[ ... ],

}
```

- "isGraduated": if this token is graduated from the iside pool

- "tokenPriceInBasedToken": the meme token price in the based token, for example, 1 memeToken = 0.1 WOAS
  
- "tokenPriceInUsd": the meme token price in USD, for example, 1 memeToken = 0.1 USD
  
- "tokenMarketCapInUsd": the meme token market cap in USD
  
- "priceChange24hr": the price change in the last 24 hours, if the token is not graduated (isGraduated = false), it will be "-"
  
- "holders": the holders of the token, the `userAddress` is the holder address, the `tokenAmount` is the amount of the token the holder has
  
- "tokenCreatedTime": the time when the token created (the time inside pool created)