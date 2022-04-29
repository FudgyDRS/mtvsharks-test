import { FC, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { formatUnits } from "@ethersproject/units";
import { Box, Heading, Text, } from '@chakra-ui/react';

import { useEthers } from "../../modules/usedapp2/hooks";
import { SharkObject as NFTObject } from "../../models/MTV Sharks/SharkObject";
import { TotalSupply } from '../../abi/mtvSharks';
import metadata from '../../abi/metadata.json';
import PaginationComponent from '../PaginationComponent';

const BlockRecentMints: FC = () => {
 
  const totalSupply = TotalSupply(); 
  const [data, setData] = useState<NFTObject[]>([]);
  const { account } = useEthers();
  
  
  // order is fine: indecies start ates
  function MakeArray(data: NFTObject[], totalMinted: any) {
    let newArray: NFTObject[] = [];
    for(let index=0; index<totalMinted; index++) { newArray = [data[index]].concat(newArray)}
    return newArray;
  }
  
  function RecentMints(totalSupply: any) {
    const sharkList: any = metadata;
    const objects: NFTObject[] = sharkList;
    const totalMinted = totalSupply && formatUnits(totalSupply, 0);
    setData(MakeArray(objects, totalMinted));
  };
  
  useEffect(() => { RecentMints(totalSupply); }, [totalSupply])
  
  if(account) {
    if(data.length!=0) { 
      return(<>
        <Heading>Recent Mints: </Heading>
        <PaginationComponent nftObjects = {data}/>
      </>)
    } else{ return (<><Text>Error: Data could not be loaded...</Text></>)}
  } else {
    return(<><Box>
      <Heading>Recent Mints (nope): </Heading>
      <Text>You need to connect you wallet to view recent mints...</Text>
    </Box></>)}
}

export default BlockRecentMints;



/*
//fetch("https://fudgy.mypinata.cloud/ipfs/QmXsHcHvrBWoRLb3jcqyuEUuxEaD8RumpFMxBsdNSnK3MW/_metadata.json")
      //.then(response2 => {
        //console.log("inside NFT response: ", response2.json()+"]");
        //let myData = response.json();
        
        /*response2.json()
          .then(response => {
            console.log("inside of all");
            console.log("newObject: ", response);
          }).catch(error => { console.log(error); });*/
        /*
        response2.json()
          .then(response => {
            for(var object of response) {
              
            
            setData([...data, {
              attributes: {
                Background: object["attributes"]["Background"],
                Color:      object["attributes"]["Color"],
                Spots:      object["attributes"]["Spots"],
                Base:       object["attributes"]["Base"],
                Eyes:       object["attributes"]["Eyes"],
                Eyebrow:    object["attributes"]["Eyebrow"],
                Mouth:      object["attributes"]["Mouth"],
                Nose:       object["attributes"]["Nose Area"],
                Head:       object["attributes"]["Head"],
                Wrist:      object["attributes"]["Wrist"]
              },
              custom_fields: { 
                compiler:   object["custom_fields"]["compiler"], 
                date:       object["custom_fields"]["date"], 
                dna:        object["custom_fields"]["dna"], 
                edition:    object["custom_fields"]["edition"]
              },
              description:  object["description"],
              external_url: object["external_url"],
              file_url:     object["file_url"],
              name:         object["name"]
            }]);
          }
          }).catch(error => { console.log(error); });*/
      //}).catch(error => { console.log(error); });*/
