import { SharkObject as NFTObject } from "../../models/MTV Sharks/SharkObject";
import { Card, } from "react-bootstrap";
import { Box, Button, useDisclosure } from '@chakra-ui/react';

import NftModal from "../NftModal";
import "@fontsource/inter";

interface Props { nftObject?: NFTObject; }
export function GenerateCard({nftObject}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let fileExtension = nftObject!["custom_fields"].edition == "3333" ? ".jpg" : ".png";

  return nftObject ? (
    <>
      <Button onClick={onOpen} background="transparent" isActive={false}>
        <Card className="modal-card">
          <Card.Img variant="top" src={"https://mtvsharks.s3.us-west-1.amazonaws.com/" + nftObject["custom_fields"].edition + fileExtension} />
          <div className="overlay"># {nftObject["custom_fields"].edition}</div>
        </Card>
      </Button>
      <NftModal isOpen={isOpen} onClose={onClose} nftObject={nftObject}/>
      </>
  ) : (<Box>{`${console.log("GenerateCard failed: ", nftObject)}`}</Box>);
}

