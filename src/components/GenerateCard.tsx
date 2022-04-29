import { SharkObject } from "../models/MTV Sharks/SharkObject";
import { Card, } from "react-bootstrap";
import { Box, Button, useDisclosure } from '@chakra-ui/react';

import { OwnerOf, } from "../abi/mtvSharks";
import { useEthers } from "../modules/usedapp2/hooks";

import StatusCircle from "./StatusCircle";
// import market functions

import NftModal from "./NftModal";
import "@fontsource/inter";

interface Props { sharkObject?: SharkObject; } 
function GenerateCard({sharkObject}: Props) { 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { account } = useEthers();
  let ownerOf;
  ownerOf = account ? OwnerOf(String(sharkObject!["custom_fields"].edition-1)) : undefined;
  ownerOf = ownerOf ? ownerOf.slice(0, 6) + "..." + ownerOf.slice(ownerOf.length - 4, ownerOf.length) : "";
  let fileExtension = sharkObject!["custom_fields"].edition == "3333" ? ".jpg" : ".png";
  // style={{ width: '200px' }}
  return sharkObject ? (
    <>
      <Button onClick={onOpen}>
        <Card className="generic-card">
          <Card.Text className="card-status"><StatusCircle input={3}/></Card.Text>
          <Card.Img variant="top" src={"https://mtvsharks.s3.us-west-1.amazonaws.com/" + sharkObject["custom_fields"].edition + fileExtension} />
          <Card.Body>
            <Card.Title>{sharkObject.name}</Card.Title>
            <Card.Text color="black" >Owner:<br/>{ownerOf}</Card.Text>
          </Card.Body>
        </Card> 
      </Button>
      <NftModal isOpen={isOpen} onClose={onClose} sharkObject={sharkObject}/>
      </>
  ) : (<Box>{`${console.log("GenerateCard failed: ", sharkObject)}`}</Box>);
}

export default GenerateCard;
