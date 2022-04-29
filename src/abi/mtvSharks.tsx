//import { ERC20Interface } from "../modules/usedapp2/constants";
import { Falsy } from "../modules/usedapp2/model/types";
import { useContractCall } from "../modules/usedapp2/hooks";

import interfaceAbi from "./mtvsharksAbi.json";

import { utils } from "ethers";

//TEST:
//export const NFT = "0x822222AB8cC1b0eC78b1733Ec1A10315626ddE31";
//OLD LIVE:
//export const NFT = "0xb00E44FC56400Ba18EACA72885315117a184244f";
//export const NFT = "0xa25f856Fe9CcC1e9A3109aeaf2880B4dD64694A1";

//BSC Test:
//export const NFT = "0x328B697bb7a660B3a3fEC1c0913F1A1DD3fC7Bd9";

// LIVE MTV NFT:
export const NFT = "0x0b2814839b71FDBd81d4f179A485FEd4e7B25012"; 


export const ABI = new utils.Interface(interfaceAbi);

export function Approve(to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "approve", args: [to, tokenId] }) ?? []; return result; }
export function Burn(_amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "burn", args: [_amount] }) ?? []; return result; }
export function BurnRdnmTkn(_token: string | Falsy, _to: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "burnRdnmTkn", args: [_token, _to] }) ?? []; return result; }
export function MintMultipleNFT(_amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "mintMultipleNFT", args: [_amount] }) ?? []; return result; }
export function MintNFT() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "mintNFT", args: [] }) ?? []; return result; }
export function OwnershipTransferred(previousOwner: string | Falsy, newOwner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "OwnershipTransferred", args: [previousOwner, newOwner] }) ?? []; return result; }
export function RenounceOwnership() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "renounceOwnership", args: [] }) ?? []; return result; }
export function ReserveGiveaway(_amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "reserveGiveaway", args: [_amount] }) ?? []; return result; }
export function SafeTransferFrom(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "safeTransferFrom", args: [from, to, tokenId] }) ?? []; return result; }
export function SafeTransferFrom2(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy, _data: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "safeTransferFrom", args: [from, to, tokenId, _data] }) ?? []; return result; }
export function SetApprovalForAll(operator: string | Falsy, approved: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setApprovalForAll", args: [operator, approved] }) ?? []; return result; }
export function SetBaseURI(baseURI: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setBaseURI", args: [baseURI] }) ?? []; return result; }
export function SetTokenReceiver(_new: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setTokenReceiver", args: [_new] }) ?? []; return result; }
export function ToggleSale() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "toggleSale", args: [] }) ?? []; return result; }
export function Transfer(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "Transfer", args: [from, to, tokenId] }) ?? []; return result; }
export function TransferFrom(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "transferFrom", args: [from, to, tokenId] }) ?? []; return result; }
export function TransferOwnership(newOwner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "transferOwnership", args: [newOwner] }) ?? []; return result; }
export function WithdrawAll() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "withdrawAll", args: [] }) ?? []; return result; }
export function BalanceOf(owner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "balanceOf", args: [owner] }) ?? []; return result; }
export function BaseURI() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "baseURI", args: [] }) ?? []; return result; }
export function CalculatePrice() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "calculatePrice", args: [] }) ?? []; return result; }
export function CalculatePriceMultiple(_amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "calculatePriceMultiple", args: [_amount] }) ?? []; return result; }
export function CurrentSupply() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "currentSupply", args: [] }) ?? []; return result; }
export function GetApproved(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "getApproved", args: [tokenId] }) ?? []; return result; }
export function IsApprovedForAll(owner: string | Falsy, operator: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "isApprovedForAll", args: [owner, operator] }) ?? []; return result; }
export function IsSaleEnabled() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "isSaleEnabled", args: [] }) ?? []; return result; }
export function MaxSupply() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "maxSupply", args: [] }) ?? []; return result; }
export function Name() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "name", args: [] }) ?? []; return result; }
export function Owner() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "owner", args: [] }) ?? []; return result; }
export function OwnerOf(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "ownerOf", args: [tokenId] }) ?? []; return result; }
export function Receiver() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "receiver", args: [] }) ?? []; return result; }
export function SupportsInterface(interfaceId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "supportsInterface", args: [interfaceId] }) ?? []; return result; }
export function Symbol() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "symbol", args: [] }) ?? []; return result; }
export function TokenByIndex(index: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenByIndex", args: [index] }) ?? []; return result; }
export function TokenOfOwnerByIndex(owner: string | Falsy, index: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenOfOwnerByIndex", args: [owner, index] }) ?? []; return result; }
export function TokensOfOwner(_owner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokensOfOwner", args: [_owner] }) ?? []; return result; }
export function TokenURI(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenURI", args: [tokenId] }) ?? []; return result; }
export function TotalSupply() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "totalSupply", args: [] }) ?? []; return result; }
