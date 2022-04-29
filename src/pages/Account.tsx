import React from "react"
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react"

// List all bids
// List recent transactions
// List all mints
// List all NFTs


import { formatEther, formatUnits } from "@ethersproject/units";
import { useEtherBalance, useTokenBalance, useEthers } from "../modules/usedapp2/hooks";

import { IPFS } from 'ipfs-core'
import type { CID } from 'ipfs-core'
const {ipfsFetch} = require('ipfs-fetch');


const Balance = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 8vh;
  background-color: #00ff00;
`;

async function ReloadData(hash: string) {
    //const data = await ipfsFetch(hash).catch((error: any) => { console.log(error); });;
    //console.log("I tried", data.toString());
    const readFile = async (ipfs: IPFS, cid: CID): Promise<string> => {
      const decoder = new TextDecoder()
      let content = ''
      for await (const chunk of ipfs.cat(cid)) {
        content += decoder.decode(chunk)
      }
    console.log("IPFS content: ", content);
      return content
    }
  }

export default function Account(props: any) {
    const { account } = useEthers();
    const etherBalance = useEtherBalance(account);
    console.log("Account: ", useEtherBalance(account));

    const base = "https://ipfs.infura.io/ipfs/";
    const hash = "bafkreifrkj77qcqcbtdvsbhrq3gibysz64aany7tjgnbvpy63zfgesk3xe";

    console.log("ipfs fetch: ");
    ReloadData(hash);

  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}
