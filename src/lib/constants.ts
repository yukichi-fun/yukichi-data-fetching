export const bondingContractInfos = [
  {
    basedChain: "WOAS",
    bondingAddress: "0x07FA26A83194B08Bf8cAea2b38D6EE1Bc24AA1fB",
    baseTokenAddress: "0x5200000000000000000000000000000000000001",
  },
  {
    basedChain: "MSM",
    bondingAddress: "0x635b838862b24cd4C1e91453f9c42D69b56Fa644",
    baseTokenAddress: "0xd11E0F63B04868567c297A3119e491707DB19E4e",
  },
  {
    basedChain: "MCHC",
    bondingAddress: "0x88ca06b9872df70A68f4E0432D398d5d486f4792",
    baseTokenAddress: "0x5b1cc635e524cabb63a581c050c895534755f297",
  },
  {
    basedChain: "Z",
    bondingAddress: "0x47e170c53Be98BDDC6DdE11D39D447f7E94fD6dB",
    baseTokenAddress: "0xC683DA627fF9fD56740C72A703528861c33d3B3a",
  },
];

export const OASYS_MAINNET_VAULT_ADDRESS =
  "0xfb6f8FEdE0Cb63674Ab964affB93D65a4a7D55eA";

export const OASYS_MAINNET_POOL_FACTORY_ADDRESS =
  "0x4EF0b4827cE3D5FEcBc2C6ab80Ee81dBF9631D37";

export const OASYS_MAINNET_RPC_URL = "https://rpc.mainnet.oasys.games";

export const EXPLORE_API_URL = "https://explorer.oasys.games/api/v2";

export const BONDING_CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPairAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "agentToken",
        type: "address",
      },
    ],
    name: "Graduated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Launched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "K",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "agentFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "buy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract FFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gradThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "address",
        name: "router_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feeTo_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialSupply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetRate_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTx_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "agentFactory_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gradThreshold_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ticker",
        type: "string",
      },
      {
        internalType: "uint8[]",
        name: "cores",
        type: "uint8[]",
      },
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "string[4]",
        name: "urls",
        type: "string[4]",
      },
      {
        internalType: "uint256",
        name: "purchaseAmount",
        type: "uint256",
      },
    ],
    name: "launch",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "profile",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "profiles",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract FRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "sell",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "setAssetRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "tbaSalt",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "tbaImplementation",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "daoVotingPeriod",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "daoThreshold",
            type: "uint256",
          },
        ],
        internalType: "struct Bonding.DeployParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "setDeployParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newFeeTo",
        type: "address",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newThreshold",
        type: "uint256",
      },
    ],
    name: "setGradThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSupply",
        type: "uint256",
      },
    ],
    name: "setInitialSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxTx_",
        type: "uint256",
      },
    ],
    name: "setMaxTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "agentToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "ticker",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "supply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "marketCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volume24H",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prevPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdated",
            type: "uint256",
          },
        ],
        internalType: "struct Bonding.Data",
        name: "data",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        internalType: "string",
        name: "twitter",
        type: "string",
      },
      {
        internalType: "string",
        name: "telegram",
        type: "string",
      },
      {
        internalType: "string",
        name: "youtube",
        type: "string",
      },
      {
        internalType: "string",
        name: "website",
        type: "string",
      },
      {
        internalType: "bool",
        name: "trading",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "tradingOnUniswap",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenInfos",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "srcTokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "unwrapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
