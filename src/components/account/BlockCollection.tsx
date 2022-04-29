import React from 'react';
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";

import { useEthers } from "../../modules/usedapp2/hooks";
import { SharkObject } from "../../models/MTV Sharks/SharkObject";
//import { BalanceOf, OwnerOf, TokenOfOwnerByIndex, TokenURI, TotalSupply } from "../../abi/NFT"
import { TotalSupply } from '../../abi/mtvSharks';
import { Card, Row, Col } from "react-bootstrap";

// Show last 5 NFTs
// Include owner
// Include price
// Include name
// Include image
// paginate to next 5(start with totalSupply())

// recent mint:
// int(TotalSuuply) to build array of 5 with pagination index
// index = int(TotalSuuply) - 5*n

// My tokens:
// BalnceOf(owner) ~ total number of tokens of owner
// for(token of BalnceOf(owner)) { TokenURI(TokenOfOwnerByIndex(owner, token)) } ~ return uri of token element
// then with uri fetch image data from ipfs-json



const TempText = styled.text`
  align-items: center;
  color: black;
  margin-bottom: 1.5em;
  font-size: 1.5em;
  font-weight: 400;
`;

const BlockCollection: FC = () => {
  var SharkObjects: SharkObject[];

  const [collection, setCollection] = useState<SharkObject[]>([]);
  const [mints, setMints] = useState<SharkObject[]>([]);
  const [bids, setBids] = useState<SharkObject[]>([]);
  const [auctions, setAuctions] = useState<SharkObject[]>([]);

  const totalSupply = TotalSupply();

  //const tokenURI = TokenURI()

  const [data, setData] = useState<SharkObject[]>([]);
  const { account } = useEthers();

  useEffect(() => {

    fetch("https://fudgy.mypinata.cloud/ipfs/QmXsHcHvrBWoRLb3jcqyuEUuxEaD8RumpFMxBsdNSnK3MW/1.json")
      .then(response2 => {
        //console.log("inside NFT response: ", response2.json());
        //let myData = response.json();
        response2.json()
          .then(response => {
            setData([...data, {
              attributes: {
                Background: response.attributes["Background"],
                Color:      response.attributes["Color"],
                Spots:      response.attributes["Spots"],
                Base:       response.attributes["Base"],
                Eyes:       response.attributes["Eyes"],
                Eyebrow:    response.attributes["Eyebrow"],
                Mouth:      response.attributes["Mouth"],
                Nose:       response.attributes["Nose Area"],
                Head:       response.attributes["Head"],
                Wrist:      response.attributes["Wrist"]
              },
              custom_fields: { 
                compiler:   response["custom_fields"]["compiler"], 
                date:       response["custom_fields"]["date"], 
                dna:        response["custom_fields"]["dna"], 
                edition:    response["custom_fields"]["edition"]
              },
              description:  response["description"],
              external_url: response["external_url"],
              file_url:     response["file_url"],
              name:         response["name"]
            }]);
          }).catch(error => { console.log(error); });
      })
      .catch(error => { console.log(error); });
  }, [])

  if(account) {
    console.log("Current state data: ", data);
  }
  
  return account
  ? (<>
      <Box>
        {/* <TempText>Paginated objects appear here...</TempText>
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text color="black">
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}<Text>{totalSupply}</Text>
      </Box>  
    </>)
  : (<>
    <Box>
      <TempText>You need to connect you wallet to view recent mints...</TempText>
    </Box>
  </>);
}

export default BlockCollection;
