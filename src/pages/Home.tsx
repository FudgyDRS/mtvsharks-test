import { FC, useEffect } from "react";
//import Countdown from "../components/Countdown/Countdown";
import BlockMintNFT from "../components/home/BlockMintNFT";
import BlockRecentMints from "../components/home/BlockRecentMints";

//import { useEthers } from "../modules/usedapp2/hooks";
//import { IsSaleEnabled, } from '../abi/mtvSharks';

const Home: FC = () => {

  //1648224000000
  //1647933422936
  console.log("Date: ", Date.now());
  console.log("Countdown: ", 1648224000000 - Date.now());

  //const { account } = useEthers(); 
  //const isSaleEnabled = IsSaleEnabled();
  useEffect(() => {}, []);
  //console.log("Contract status: ", isSaleEnabled);

  
    return ( 
      <div>
        <BlockMintNFT />
        <BlockRecentMints />
      </div>
    );

  //   return 1648224000000 - Date.now() <=0 && isSaleEnabled ? ( 
  //     <div>
  //       <BlockMintNFT /> 
  //       <BlockRecentMints />
  //     </div>
  //   ) :
  //   (<div className="default-dark">
  //     <Countdown />
  //   </div>);
  };
  
  export default Home;
