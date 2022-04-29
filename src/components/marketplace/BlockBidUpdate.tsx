import { FC, useState, useEffect } from 'react';
import { Input, Text, Box, Radio, RadioGroup, Flex, Spacer } from "@chakra-ui/react";

import { useEthers } from "../../modules/usedapp2/hooks";
import TransferButton from './ButtonTransfer';
const BlockBidUpdate: FC = () => {
    const { account } = useEthers();

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState(1);
    const [inputValue3, setInputValue3] = useState("true");
    //const [isOwner, setIsOwner] = useState(true);

    //const { account } = useEthers();
    //const handleChange1 = (e: any) => setInputValue1(e.target.value);
    const handleChange1 = (e: any) => setInputValue1(e.target.value);
    const handleChange2 = (e: any) => setInputValue2(e.target.value);
    const handleChange3 = (e: any) => setInputValue3(e.target.value);



    useEffect(() => {  }, [handleChange1, handleChange3])

    return(<Box width="400px" backgroundColor={"#282c34"} borderRadius={"0.6em"} padding={"0.8em"} margin={"1em"} textColor={"#ffffff"}>
    <Text fontWeight={"1em"}>Update Bid</Text>
    <Text>Token ID: </Text>
    <Input paddingEnd="-0.1em" backgroundColor={"#7e7e7e"} value={inputValue1} onChange={handleChange1}/>
    <Text>Difference: </Text>
    <Input className="quantity" backgroundColor={"#7e7e7e"} value={inputValue2} onChange={handleChange2}/>
    <Text>Add or Sub: </Text>
    <RadioGroup onChange={setInputValue3} value={inputValue3} marginBottom={"0.5em"}>
        <Flex marginX={"40px"}>
            <Radio value='true'>Add</Radio>
            <Spacer/>
            <Radio value='false'>Sub</Radio>
        </Flex>
    </RadioGroup>
    <TransferButton _from={account} _to={inputValue1} _id={Number(inputValue2)-1}/>
    </Box>);
}
 
export default BlockBidUpdate;
