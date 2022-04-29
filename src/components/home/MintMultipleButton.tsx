import { Button, Box, Text } from "@chakra-ui/react";

import { useEthers } from "../../modules/usedapp2/hooks";
import { MintMultipleNFT, } from '../../abi/mtvSharks';

type Props = { amount: any};
export default function MintMultipleButton({ amount }: Props) {
  const { account } = useEthers();

  // function mintFunction() {
  //   const result = MintMultipleNFT(amount);
  //   console.log("mint result: ", result);
  //   console.log(account);
  // }

//   useEffect(() => {
//     if (latestTx != null) {
//         window.web3.eth.getTransactionReceipt(latestTx, function (error, result) {
//           if (error) {
//             $(".Loading").hide();
//             console.error ('Error1::::', error);
//           }
//           console.log(result);
//           if(result != null){
//             latestTx = null;
//             $(".Loading").hide();
//           }
//         });
//       }
//   }, [])

  return account ? (
    <>
      <Box width="142px" background="gray" borderRadius={"6px"} py="0">
        <Button
          onClick={MintMultipleNFT(amount)}
          background="gray"
          height="38px" width="140px"
          margin="1px"
          paddingInlineStart="3px" paddingInlineEnd="3px"
          border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
          _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "blue" }}
        >
          <Box px="3"><Text color="white" fontSize="md"> Mint NFT(s) </Text></Box>
        </Button>
      </Box>
      <br />
      <Text color="green" fontSize="md"> Ready to mint . . . </Text>
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
          <Box px="3"><Text color="white" fontSize="md"> Mint NFT(s) </Text></Box>
        </Button>
      </Box>
      <br />
      <Text color="red" fontSize="md"> Connect MTV wallet to mint . . . </Text>
    </>
  );
}
