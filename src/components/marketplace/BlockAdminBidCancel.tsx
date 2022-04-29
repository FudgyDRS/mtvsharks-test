import { FC, useState, useEffect } from 'react';
import { Input, Text, Box } from "@chakra-ui/react";

import { useEthers } from "../../modules/usedapp2/hooks";
import TransferButton from './ButtonTransfer';
const BlockAdminBidCancel: FC = () => {
    const { account } = useEthers();

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState(1);
    const [inputValue3, setInputValue3] = useState("");
    //const [isOwner, setIsOwner] = useState(true);

    //const { account } = useEthers();
    //const handleChange1 = (e: any) => setInputValue1(e.target.value);
    const handleChange1 = (e: any) => setInputValue1(e.target.value);
    const handleChange2 = (e: any) => setInputValue2(e.target.value);
    const handleChange3 = (e: any) => setInputValue3(e.target.value);



    useEffect(() => {  }, [handleChange1, handleChange3])

    return(<Box width="400px" backgroundColor={"#282c34"} borderRadius={"0.6em"} padding={"0.8em"} margin={"1em"} textColor={"#ffffff"}>
    <Text fontWeight={"1em"}>Admin Cancel Bid</Text>
    <Text>Token ID: </Text>
    <Input paddingEnd="-0.1em" backgroundColor={"#7e7e7e"} value={inputValue1} onChange={handleChange1} marginBottom={"0.5em"}/>
    <TransferButton _from={account} _to={inputValue1} _id={Number(inputValue2)-1}/>
    </Box>);
}
 
export default BlockAdminBidCancel;
