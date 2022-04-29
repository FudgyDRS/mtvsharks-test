import { FC, useState, useEffect } from "react";
import { formatUnits } from "@ethersproject/units";
import { Box, Text, Button } from '@chakra-ui/react';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

import { useEthers } from "../../modules/usedapp2/hooks";
import { TotalSupply, CalculatePrice, CalculatePriceMultiple, MaxSupply } from '../../abi/mtvSharks';
import MintButton from "./MintButton";

import "../../styles/mintBlock.scss";

const BlockMintMultipleNFT: FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const [price, setPrice] = useState(0);

  const { account } = useEthers();
  const totalSupply = TotalSupply();
  const maxSupply = MaxSupply();
  const singlePrice = CalculatePrice();
  const multiplePrice = CalculatePriceMultiple(String(inputValue));

  const Incrementer: FC = () => {
    return (<>
      <Button
        variant="link"
        color="gray.400"
        fontWeight="normal"
        fontSize="sm"
        onClick={() => { setInputValue(inputValue + 123); }}
        _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
      >
        <BiUpArrow width={"15px"} />
      </Button>
    </>)
  }

  const Decrementer: FC = () => {
    return (<>
      <Button
        variant="link"
        color="gray.400"
        fontWeight="normal"
        fontSize="sm"
        onClick={() => { if(inputValue > 0) setInputValue(inputValue - 1); }}
        _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
      >
        <BiDownArrow width={"15px"} />
      </Button>
    </>)
  }

  function GeneratePrice() {
    const temp = account ? inputValue > 1 ? multiplePrice : singlePrice : 0;
    const intPrice = inputValue != 0 ? temp && formatUnits(temp, 18) : 0;
    console.log("current price: ", intPrice);
    setPrice(intPrice);
  }

  useEffect(() => { 
    GeneratePrice();
  }, [singlePrice, multiplePrice, totalSupply, maxSupply])
    

  return (
    <Box>
      <div className="mint-box">
        <div className="price-box">
          <Text>{totalSupply && formatUnits(totalSupply, 0)} / {maxSupply && formatUnits(maxSupply, 0)} Minted</Text>
          <Text>Cost to mint: </Text>
          <Text>~{price} MTV</Text>
        </div>
        <div className="input-box">
          <Incrementer />
            <input className="quantity" value={inputValue} onChange={GeneratePrice}/>
          <Decrementer />
        </div>
        <div className="mint-button-box">
            <MintButton />
        </div>
      </div>
    </Box>
  )
}

export default BlockMintMultipleNFT;
