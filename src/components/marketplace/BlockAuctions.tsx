import React from 'react';
import { FC } from 'react';

import { useEthers } from "../../modules/usedapp2/hooks";
import { Contract as auctionContract, ABI} from '../../abi/mtvsharksAuctions';
import { ethers } from "ethers";

const BlockAuctions: FC = () => {
    const { account } = useEthers();

    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    //const signer = provider.getSigner();
    //const token = auctionContract;
    //const abi = ABI; 
    const contract = new ethers.Contract(auctionContract, ABI, provider.getSigner());

    return(<></>);
}

/*
Demo (features):
- list auction (need to add option for min bid)     - button with fields
- complete auction                                  - button
- cancel auction                                    - button
- create bid                                        - button with fields
- update bid                                        - button with fields
- cancel bid                                        - button
- admin cancel auction                              - button
- admin cancel bid                                  - button
- my bids list                                      - view
- my custodial quantity                             - box
- my listings list                                  - view
- trade volume                                      - box
- escrow volume?                                    - box
- nft's trading history                             - view
- all active listings                               - view
- all inactive listings                             - view
- my claim waiting listings                         - view and list





Do later:
Ongoing Auctions tab:
get all ongoing auctions, need to get events
auction card need [time], if 0 -> "awaiting claim"
button to list an auction
 */
