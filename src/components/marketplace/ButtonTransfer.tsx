//import { FC, useState, useEffect }
import { Button, Box, Text } from "@chakra-ui/react";

import { useEthers } from "../../modules/usedapp2/hooks";
import { SafeTransferFrom, OwnerOf, NFT, ABI} from '../../abi/mtvSharks';
import { ethers } from "ethers";

type Props = { _from: any, _to: any, _id: any};
export default function TransferButton({ _from, _to, _id }: Props) {
  const { account } = useEthers();

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const token = NFT;
  const abi = ABI; 
  const contract = new ethers.Contract(token, abi, signer);
  
  const owner = OwnerOf(_id);
  const isOwner = owner == account;

  function Transfer() {
    contract["safeTransferFrom(address,address,uint256)"](_from, _to, _id)
  }

  // function SetBaseURI() {
  //   contract["setBaseURI(string)"]("https://ipfs.infura.io/ipfs/QmPUjwxJZVfUGyRwQpknz9tkCpuJnnprtHvHbExdSSU9rc/")
  // }

  return account ? isOwner ? (
    <>
      <Box width="142px" background="gray" borderRadius={"6px"} py="0">
        <Button
          onClick={Transfer}
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "blue" }}
        >
          <Box px="3"><Text color="white" fontSize="1em"> Transfer </Text></Box>
        </Button>
      </Box>
      {/* <Box width="142px" background="gray" borderRadius={"6px"} py="0">
        <Button
          onClick={SetBaseURI}
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "blue" }}
        >
          <Box px="3"><Text color="white" fontSize="1em"> SetBaseURI </Text></Box>
        </Button>
      </Box> */}
      <br />
      <Text color="green" fontSize="1em"> Ready to transfer . . . </Text>
    </>
  ) : (
    <>
      <Box width="142px" background="red" borderRadius={"6px"} py="0">
        <Button
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "red" }}
        >
          <Box px="3"><Text color="white" fontSize="1em"> Transfer </Text></Box>
        </Button>
      </Box>
      <br />
      <Text color="red" fontSize="1em"> Error: you must be token owner </Text>
    </>
  ) : (
    <>
      <Box width="142px" background="red" borderRadius={"6px"} py="0">
        <Button
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "red" }}
        >
          <Box px="3"><Text color="white" fontSize="1em"> Transfer </Text></Box>
        </Button>
      </Box>
      <br />
      <Text color="red" fontSize="1em"> Connect MTV wallet to transfer . . . </Text>
    </>
  );
}
