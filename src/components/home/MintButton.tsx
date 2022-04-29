import { FC, useEffect, useState, useRef, useCallback } from 'react';
import { Button, Box, Text, Input } from "@chakra-ui/react";
import { useEthers } from "../../modules/usedapp2/hooks";

import { CalculatePrice, ABI, NFT } from '../../abi/mtvSharks';
import { ethers } from 'ethers';
import { formatUnits } from '@ethersproject/units';

const MintButton: FC = () => {

  const { account } = useEthers();

  const temp = CalculatePrice();
  const price = temp && formatUnits(temp, 0);
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const token = NFT;
  const abi = ABI; 
  const contract = new ethers.Contract(token, abi, signer);
  //const option = {value: ethers.utils.parseEther(String(price*10**18))};
  

  useEffect(() => {}, [price])

  return account ? (
    <>
        <Button
          onClick={() => {contract.mintNFT( {value: temp})}}
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "blue" }}
        >
          <Text color={"white"} fontSize="1em"> Mint NFT </Text>
        </Button>
      <br />
      <Text color="green" fontSize="1em"> Ready to mint . . . </Text>
    </>
  ) : (
    <>
      <Box>
        <Button
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "red" }}
        >
          <Text color="white" fontSize="1em"> Mint NFT </Text>
        </Button>
      </Box>
      <br />
      <Text color="red" fontSize="1em"> Connect MTV wallet to mint . . . </Text>
    </>
  );
}

export default MintButton;
