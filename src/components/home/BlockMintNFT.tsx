import { FC, useEffect } from "react";
import { formatUnits } from "@ethersproject/units";
import { Box, Text } from '@chakra-ui/react';

import { useEthers } from "../../modules/usedapp2/hooks";
import { TotalSupply, CalculatePrice, MaxSupply } from '../../abi/mtvSharks';
import MintButton from "./MintButton";

import "../../styles/mintBlock.scss";

const BlockMintNFT: FC = () => {

    const { account } = useEthers(); 
    const totalSupply = TotalSupply();
    const maxSupply = MaxSupply();
    const singlePrice = CalculatePrice(); 

    useEffect(() => { 
    }, [singlePrice, totalSupply, maxSupply])
    

  return account ? (
    <Box>
      <div className="mint-box">
        <div className="price-box">
          <Text>{totalSupply && formatUnits(totalSupply, 0)} / {maxSupply && formatUnits(maxSupply, 0)} Minted</Text>
          <Text>Cost to mint: </Text>
          <Text>~{singlePrice && formatUnits(singlePrice, 18)} MTV</Text>
        </div>
        <div className="mint-button-box"><MintButton /></div>
      </div>
    </Box>
  ) : (
    <Box><Text>Connect your wallet to mint...</Text></Box>
  )
}

export default BlockMintNFT;
