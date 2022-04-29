import { ChainId } from "../../constants";
import { FullConfig } from "./Config";

export const DEFAULT_CONFIG: FullConfig = {
  pollingInterval: 15000,
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Goerli,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.xDai,
    ChainId.Localhost,
    ChainId.Hardhat,
    ChainId.Polygon,
    ChainId.Mumbai,
    ChainId.Harmony,
    ChainId.Moonriver,
    ChainId.BSC,
    ChainId.BSC_Testnet,
    ChainId.FTM,
    ChainId.FTM_Testnet,
    ChainId.MultiVAC
  ],
  notifications: {
    checkInterval: 500,
    expirationPeriod: 5000
  }
};
