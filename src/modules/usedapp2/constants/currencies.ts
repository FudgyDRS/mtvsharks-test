import { NativeCurrency, Token } from "../model";
import { ChainId } from "./chainId";

export const Ether = new NativeCurrency("Ether", "ETH", ChainId.Mainnet);
export const Dai = new Token(
  "Dai",
  "DAI",
  ChainId.Mainnet,
  "0x6B175474E89094C44Da98b954EedeAC495271d0F"
);

export const KovanEther = new NativeCurrency("Kovan Ether", "KETH", ChainId.Kovan);
export const KovanDai = new Token(
  "Dai",
  "DAI",
  ChainId.Kovan,
  "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"
);

export const BSC = new NativeCurrency("BSC", "BNB", ChainId.BSC);
export const BSC_Testnet = new Token(
  "BSC Testnet",
  "tBNB",
  ChainId.BSC_Testnet,
  "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"
);

export const FTM = new NativeCurrency("Fantom", "FTM", ChainId.FTM);
export const FTM_Testnet = new Token(
  "FTM Testnet",
  "tFTM",
  ChainId.FTM_Testnet,
  "0x23aDdd9b36ae4E5B83a70bbBF93709C44299A565"
);

export const MTV = new NativeCurrency("MultiVAC", "MTV", ChainId.MultiVAC);

export const Findora = new NativeCurrency("Findora", "FRA", ChainId.Findora);
export const Findora_Testnet = new Token("FRA Testnet","tFRA",ChainId.Findora_Testnet,"0x8924755a7FB45bF0A37A6A773795CFa878114A26");

export const NATIVE_CURRENCY = {
  [ChainId.Mainnet]: Ether,
  [ChainId.Kovan]: KovanEther,
  [ChainId.BSC]: BSC,
  [ChainId.BSC_Testnet]: BSC_Testnet,
  [ChainId.FTM]: FTM,
  [ChainId.FTM_Testnet]: FTM_Testnet,
  [ChainId.MultiVAC]: MTV,
  [ChainId.Findora]: Findora,
  [ChainId.Findora_Testnet]: Findora_Testnet
};
