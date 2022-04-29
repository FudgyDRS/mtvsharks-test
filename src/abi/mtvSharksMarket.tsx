//import { ERC20Interface } from "../modules/usedapp2/constants";
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
export const NFTMarket = "0x228A1c3d279A06EF0Fa875A25DC31847b0C13E1F";

// LIVE MTV NFT:
//export const NFT = "0x0b2814839b71FDBd81d4f179A485FEd4e7B25012"; 


export const ABI = new utils.Interface(interfaceAbi);

//-----------------------------------------------------------------------------
// GET FUNCTIONS:
export function GetBid(_tradeId: string | Falsy, _account: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "getBid", args: [_tradeId, _account] }) ?? []; return result; }
export function GetLength(_id: string | Falsy, _state: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "getLength", args: [_id, _state] }) ?? []; return result; }
export function GetMyLength(_state: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "getMyLength", args: [_state] }) ?? []; return result; }
export function Bids(var1: string | Falsy, var2: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "bids", args: [var1, var2] }) ?? []; return result; }
export function History(var1: string | Falsy, var2: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "history", args: [var1, var2] }) ?? []; return result; }
export function ListVolume() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "listVolume", args: [] }) ?? []; return result; }
export function MyBids(var1: string | Falsy, var2: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "myBids", args: [var1, var2] }) ?? []; return result; }
export function MyListings(var1: string | Falsy, var2: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "myListings", args: [var1, var2] }) ?? []; return result; }
export function TradeId(var1: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "tradeId", args: [var1] }) ?? []; return result; }
export function TradeIdToken(var1: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "tradeIdToken", args: [var1] }) ?? []; return result; }
export function Owner() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "owner", args: [] }) ?? []; return result; }
export function NftContract() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "nftContract", args: [] }) ?? []; return result; }
export function Floor() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "floor", args: [] }) ?? []; return result; }
export function TradeVolume() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "tradeVolume", args: [] }) ?? []; return result; }
export function Volume() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "volume", args: [] }) ?? []; return result; }
//-----------------------------------------------------------------------------
// MAIN FUNCTIONS:
export function ListTrade(_id: string | Falsy, _value: string | Falsy, _duration: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "listTrade", args: [_id, _value, _duration] }) ?? []; return result; }
export function BestOffer(_tradeId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "bestOffer", args: [_tradeId] }) ?? []; return result; }
export function AcceptBestOffer(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "acceptBestOffer", args: [_id] }) ?? []; return result; }
export function ClaimWonAuction(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "claimWonAuction", args: [_id] }) ?? []; return result; }
export function CreateBid(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "createBid", args: [_id] }) ?? []; return result; }
export function UpdateBid(_id: string | Falsy, _add: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "updateBid", args: [_id, _add] }) ?? []; return result; }
export function CancelBid(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "cancelBid", args: [_id] }) ?? []; return result; }
export function BuyTrade(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "buyTrade", args: [_id] }) ?? []; return result; }
//-----------------------------------------------------------------------------
// ADMIN FUNCTIONS:
export function AdminCancelAuction(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "adminCancelAuction", args: [_id] }) ?? []; return result; }
export function AdminRefundBids(_tradeId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "adminRefundBids", args: [_tradeId] }) ?? []; return result; }
export function AdminRefundNft(_tradeId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "adminRefundNft", args: [_tradeId] }) ?? []; return result; }
export function WithdrawAll() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "withdrawAll", args: [] }) ?? []; return result; }
export function BurnRdnmTkn(_token: string | Falsy, _to: string | Falsy, _value: string | Falsy, _NFT: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "burnRdnmTkn", args: [_token, _to, _value, _NFT] }) ?? []; return result; }
export function TransferOwnership(newOwner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "transferOwnership", args: [newOwner] }) ?? []; return result; }
export function RenounceOwnership() {
    const [result]: any = useContractCall({ abi: ABI, address: NFTMarket, method: "renounceOwnership", args: [] }) ?? []; return result; }
