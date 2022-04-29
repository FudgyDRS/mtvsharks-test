import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ethers } from "ethers";

import { SharkObject } from "../../models/MTV Sharks/SharkObject";
import { Bid } from "../../models/marketplace/bid";
import { Listing } from "../../models/marketplace/listing";
import { useEthers } from "../../modules/usedapp2/hooks";
import { NFTMarket, ABI as NFTABI } from "../../abi/mtvSharksMarket";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
import BlockTransfer from "./BlockTransfer";

import BlockAuctionList from "./BlockAuctionList";
import BlockAuctionComplete from "./BlockAuctionComplete";
import BlockAuctionCancel from "./BlockAuctionCancel";

import BlockBidCreate from "./BlockBidCreate";
import BlockBidUpdate from "./BlockBidUpdate";
import BlockBidCancel from "./BlockBidCancel";

import BlockAdminAuctionCancel from "./BlockAdminAuctionCancel";
import BlockAdminBidCancel from "./BlockAdminBidCancel";

// Coming Soon
const Answer = styled.text`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: yellow;
  font-weight: 800;
  font-size: 2.5em;
`;
// struct listing { uint256 tradeId; address account; uint256 value; uint256 start; uint256 stop; address to; } // id == tradeId, not nftId
//     mapping(uint256 => listing[]) history;  // specific NFT's history, also indicates current status
//     mapping(uint256 => listing) tradeId;     // iterator for ALL trades
//     mapping(uint256 => uint256) sent;       // iterator for ALL sends

async function StartSale      (token: String, tokenId: String, price: any) {}
async function StartAuction   (token: String, tokenId: String, price: any) {}

async function CancelSale     (token: String, tokenId: String) {}
async function CancelAuction  (token: String, tokenId: String) {}
async function CancelOffer    (token: String, tokenId: String) {}

async function BuyToken       (token: String, tokenId: String, object: Listing) {}
async function CreateListing  () {}
async function CreateBid      (token: String, tokenId: String, object: Bid) {}
async function CreateCounter  (token: String, tokenId: String, object: Bid) {}

// Tabs: Ongoing / Complete / All
const BlockMarketplace: FC = () => {
  const [ listings,  setListings ] = useState<Listing[]>  ([]);
  const [ trades,    setTrades   ] = useState<Listing[]>  ([]);
  const [ history,   setHistory  ] = useState<Listing[]>  ([]);
  const [ bids,      setBids     ] = useState<Bid[]>      ([]);

  const { account } = useEthers();
  const listTotal = 0;      // ListVolume();
  const tradeTotal = 0;     // Volume();
  const bidsTotal = 0;      // Bids();
  const myBidsTotal = 0;    // MyBids();
  const totalSupply = 0;    // NFT: MyBids();

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(NFTMarket, NFTABI, signer);
  //console.log(getListings)

  // notice log:
  // Sale Complete (Complete tx), Auction results, Offer accepted, Outbid, New Offer

  // sort filters (check box):
  // Auctions, Sales, Accepting Offers, Completed Trades

  // maybe seperate contracts for account history and completed trades notices
  // Modifiable:
  //  Listings
  //  Bids
  // Pushable + Readable:
  //  History
  //  Tx history

  useEffect(() => {}, [])
  let gg = true;
  return account && gg
    ? (<Box marginTop={"80px"}><ChakraProvider>
      <Flex maxW='xlg' borderWidth='1px' borderRadius='lg' flexDirection={"row"} flexWrap={"wrap"}>
        <BlockTransfer/>
        <BlockAuctionList/>
        <BlockAuctionComplete/>
        <BlockAuctionCancel/>
        <BlockBidCreate/>
        <BlockBidUpdate/>
        <BlockBidCancel/>
        <BlockAdminAuctionCancel/>
        <BlockAdminBidCancel/>
      </Flex>
      <Tabs variant='enclosed' colorScheme='green' paddingTop="80px">
        <TabList>
          <Tab>Active Auctions</Tab>
          <Tab>Active Sales</Tab>
          <Tab>All NFTs</Tab>
          <Tab>Unavalible</Tab>
          <Tab>History</Tab>
        </TabList>
      
        <TabPanels>
          <TabPanel><p>Coming soon!</p></TabPanel>
          <TabPanel><p>Coming soon!</p></TabPanel>
          <TabPanel><p>Coming soon!</p></TabPanel>
          <TabPanel><p>Coming soon!</p></TabPanel>
          <TabPanel><p>Coming soon!</p></TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider></Box>) 
    : (<ChakraProvider><Answer >Coming very soon!</Answer></ChakraProvider>)
}

export default BlockMarketplace;

// method to start auction
// method to start sale
// method to buy art
// method to offer buy art
// method to cancel auction
// method to cancel sale
// method to cancel offer
// method to see all current offers
// method to order auctions by ending soonest
// method to order sales by type, recent listed, price
// method to see all trade logs
// method to see all trade logs for specific NFT
// method to see all listing logs
