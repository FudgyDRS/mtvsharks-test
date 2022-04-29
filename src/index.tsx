import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";

//import { ChainId } from "./modules/usedapp2/constants/chainId";
import { DAppProvider } from "./modules/usedapp2/providers";

//import "./vendor/all.min.css";
import "./vendor/animate.min.css";
import "./vendor/bootstrap.min.css";
//import "./vendor/icons.min.css";
import "./vendor/slider.min.css";


import Header from "./components/Header";
import Footer from "./components/Footer";

/*
 * ChainIds:
 *  BSC:         56
 *  URL:         https://dataseed1.binance.org/
 *  BSC Testnet: 97
 *  URL:         https://testnet.bscscan.com
 *  FTM:         250
 *  URL:         https://ftmscan.com/
 *  FTM Testnet: 0xfa2 === 4002
 *  URL:         https://rpc.testnet.fantom.network/
 *
 *  Need to deploy multicall contract on BSC Testnet and FTM Mainnet
 */

//const config = {
//  readOnlyChainId: 56
//readOnlyUrls: {
//  [ChainId.FTM_Testnet]: "https://rpc.testnet.fantom.network/"
//}
//};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <Header />
      <App />
      <Footer />
    </DAppProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
); 

export * from "./modules/usedapp2/constants";
export * from "./modules/usedapp2/providers";
export * from "./modules/usedapp2/hooks";
export * from "./modules/usedapp2/model";
export * from "./modules/usedapp2/helpers";
