import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Card, CardGroup } from "react-bootstrap";
import styled from "styled-components";

import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  extendTheme,
  ChakraProvider,
  Image
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";

import { SharkObject as NFTObject } from "../models/MTV Sharks/SharkObject";
import { useEthers } from "../modules/usedapp2/hooks";
import StatusCircle from "./StatusCircle";
import { OwnerOf, } from "../abi/mtvSharks";

import MetadataBox from "./MetadataBox";

// image
// status block
// tabs: Image (option goes away on desktop) / Data / History
// Data Block / History Block
// Buttons Block: disable buttons that aren't useable (all disabled by default)

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props: any) => ({
        dialog: { 
          maxWidth: ["80%", "80%", "80%"],
          minWidth: "95%",
          maxHeight: ["80%", "80%", "80%"],
          minHeight: "95%",
          bg: "#00ff00"
        }
      })
    }
  }
});

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

type Props = { isOpen: any; onClose: any; nftObject: NFTObject; };
export default function NftModal({ isOpen, onClose, nftObject }: Props) {
  console.log("modal did something");
  const [, setValue] = useState("");

  const { account} = useEthers();
  let ownerOf;
  ownerOf = account ? OwnerOf(String(nftObject!["custom_fields"].edition-1)) : undefined;
  ownerOf = ownerOf ? ownerOf.slice(0, 6) + "..." + ownerOf.slice(ownerOf.length - 4, ownerOf.length) : "";
  let fileExtension = nftObject!["custom_fields"].edition == "3333" ? ".jpg" : ".png";
  return (
    <ChakraProvider theme={theme}>
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent background="gray.900" border="1px" borderStyle="solid" borderColor="gray.700" borderRadius="3xl" >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium"> {nftObject.name} </ModalHeader>
        <Header>
          <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">Status: <StatusCircle input={4} /></ModalHeader>
        </Header>
        <ModalCloseButton
          color="white" fontSize="sm"
          _hover={{ color: "whiteAlpha.700" }}
        />
        <Header>
        <ModalBody pt={0} px={4}>
          <Box borderRadius="2.2em" border="5px" borderStyle="solid" borderColor="gray.600" width={"400px"} 
          borderStartColor={"blue"} borderEndColor={"blue"} borderTopColor={"blue"} borderBottomColor={"blue"}>
            <Image src={"https://fudgy.mypinata.cloud/ipfs/QmWHBp5ogVWWugkCpBqLT8MygNr9ZJCXJfQi4oYWMqRR3W/" + String(nftObject!["custom_fields"].edition) + fileExtension} alt="MTV Sharks Club" 
            borderRadius={"2em"} width={"400px"}/>
          </Box>
          </ModalBody>
        <ModalBody pt={0} px={4}>
          <Box borderRadius="3xl" border="1px" borderStyle="solid" borderColor="gray.600" px={5} pt={4} pb={2} width={"400px"} >
            
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
            <Text color="white">Owner: {ownerOf}</Text>
              <Link
                display="flex" alignItems="center" color="gray.400" ml={6}
                href={`https://e.mtv.ac/account.html?address=${account}`} isExternal
                _hover={{ color: "whiteAlpha.800", textDecoration: "underline" }}
              >
                <ExternalLinkIcon mr={1} />
              </Link>
            </Flex>
            <Text color="white" fontSize="xl" fontWeight="semibold" ml="2" lineHeight="1.1">Metadata:</Text>
            <Text color="white" fontSize="xl" fontWeight="semibold" ml="2" lineHeight="1.1">Coming soon!</Text>
            {/* <MetadataBox index={nftObject!["custom_fields"].edition-1}/> */}
            </Box>
            
        </ModalBody>
          </Header>
          <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium"> Transaction History: </ModalHeader>
        {/* <ModalFooter justifyContent="end" background="gray.700" borderBottomLeftRadius="3xl" borderBottomRightRadius="3xl" p={6} ><Text></Text></ModalFooter> */}
      </ModalContent>
    </Modal>
    </ChakraProvider>
  );
}
