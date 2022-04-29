import { Falsy } from "../modules/usedapp2/model/types";
import { useContractCall } from "../modules/usedapp2/hooks";

import interfaceAbi from "./mtvsharksMarketAbi.json";

import { utils } from "ethers";

//TEST:
//export const NFT = "0x822222AB8cC1b0eC78b1733Ec1A10315626ddE31";
//OLD LIVE:
//export const NFT = "0xb00E44FC56400Ba18EACA72885315117a184244f";
//export const NFT = "0xa25f856Fe9CcC1e9A3109aeaf2880B4dD64694A1";

//BSC Test:
//export const NFT = "0x0169FA461F7F782Af511f11e7Cd49502e6c49F4C";
export const Contract = "0x2E28EC4e5f14f157Cd04615a26943A5e015DE747";

// LIVE MTV NFT:
//export const NFT = "0x0b2814839b71FDBd81d4f179A485FEd4e7B25012"; 


export const ABI = new utils.Interface(interfaceAbi);

//-----------------------------------------------------------------------------
// GET FUNCTIONS:
export function GetBid(_tradeId: string | Falsy, _account: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: Contract, method: "getBid", args: [_tradeId, _account] }) ?? []; return result; }
