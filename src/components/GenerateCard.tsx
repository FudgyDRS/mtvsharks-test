import { SharkObject as NFTObject } from "../models/MTV Sharks/SharkObject";
import { Card, } from "react-bootstrap";
import { Box, Button, useDisclosure } from '@chakra-ui/react';

import { OwnerOf, } from "../abi/mtvSharks";
import { useEthers } from "../modules/usedapp2/hooks";

import StatusCircle from "./StatusCircle";
// import market functions

import NftModal from "./NftModal";
import "@fontsource/inter";

interface Props { nftObject?: NFTObject; } 
function GenerateCard({nftObject}: Props) { 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { account } = useEthers();
  let ownerOf;
  ownerOf = account ? OwnerOf(String(nftObject!["custom_fields"].edition-1)) : undefined;
  ownerOf = ownerOf ? ownerOf.slice(0, 6) + "..." + ownerOf.slice(ownerOf.length - 4, ownerOf.length) : "";
  let fileExtension = nftObject!["custom_fields"].edition == "3333" ? ".jpg" : ".png";
  // style={{ width: '200px' }}
  return nftObject ? (
    <>
      <Button onClick={onOpen}>
        <Card className="generic-card">
          <Card.Text className="card-status"><StatusCircle input={3}/></Card.Text>
          <Card.Img variant="top" src={"https://fudgy.mypinata.cloud/ipfs/QmWHBp5ogVWWugkCpBqLT8MygNr9ZJCXJfQi4oYWMqRR3W/" + nftObject["custom_fields"].edition + fileExtension} />
          <Card.Body>
            <Card.Title>{nftObject.name}</Card.Title>
            <Card.Text color="black" >Owner:<br/>{ownerOf}</Card.Text>
          </Card.Body>
        </Card> 
      </Button>
      <NftModal isOpen={isOpen} onClose={onClose} nftObject={nftObject}/>
      </>
  ) : (<Box>{`${console.log("GenerateCard failed: ", nftObject)}`}</Box>);
}

export default GenerateCard;
