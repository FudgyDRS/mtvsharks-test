//import { ERC20Interface } from "../modules/usedapp2/constants";
import { Falsy } from "../modules/usedapp2/model/types";
import { useContractCall } from "../modules/usedapp2/hooks";

import interfaceAbi from "./multivacuumAbi.json";

import { utils } from "ethers";

const NFT = "0x11860736901dE2Ea6E45E74Bdf9d0737655a78E8";
const ABI = new utils.Interface(interfaceAbi);

//const tokenNFT = "0x56536c54abB2d2d2512965Af01C98550EDB15EF9";
//const interfaceNFT = new utils.Interface(NFTAbi);

export function Approve(to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "approve", args: [to, tokenId] }) ?? []; return result; }
export function BalanceOf(owner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "balanceOf", args: [owner] }) ?? []; return result; }
export function BaseURI() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "baseURI", args: [] }) ?? []; return result; }
export function Burn(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "burn", args: [tokenId] }) ?? []; return result; }
export function BuyVacuum(amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "buyVacuum", args: [amount] }) ?? []; return result; }
export function GetApproved(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "getApproved", args: [tokenId] }) ?? []; return result; }
export function GiftVacuum(to: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "giftVacuum", args: [to] }) ?? []; return result; }
export function IsApprovedForAll(owner: string | Falsy, operator: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "isApprovedForAll", args: [owner, operator] }) ?? []; return result; }
export function MaxBuy() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "maxBuy", args: [] }) ?? []; return result; }
export function MaxSupply() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "maxSupply", args: [] }) ?? []; return result; }
export function Name() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "name", args: [] }) ?? []; return result; }
export function Owner() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "owner", args: [] }) ?? []; return result; }
export function OwnerOf(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "getApproved", args: [tokenId] }) ?? []; return result; }
export function Pause() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "pause", args: [] }) ?? []; return result; }
export function Paused() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "paused", args: [] }) ?? []; return result; }
export function Price() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "price", args: [] }) ?? []; return result; }
export function RenounceOwnership() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "renounceOwnership", args: [] }) ?? []; return result; }
export function ReserveVacuum(amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "reserveVacuum", args: [amount] }) ?? []; return result; }
export function Royalty() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "royalty", args: [] }) ?? []; return result; }
export function RoyaltyInfo(none: string | Falsy, _salePrice: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "royaltyInfo", args: [none, _salePrice] }) ?? []; return result; }
export function SafeTransferFrom(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "safeTransferFrom", args: [from, to, tokenId] }) ?? []; return result; }
export function SafeTransferFrom2(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy, _data: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "safeTransferFrom", args: [from, to, tokenId] }) ?? []; return result; }
export function SetApprovalForAll(operator: string | Falsy, to: string | Falsy, approved: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setApprovalForAll", args: [operator, approved] }) ?? []; return result; }
export function SetBaseURI(newBaseURI: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setBaseURI", args: [newBaseURI] }) ?? []; return result; }
export function SetMaxBuy(newMaxBuy: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setMaxBuy", args: [newMaxBuy] }) ?? []; return result; }
export function SetPrice(newPrice: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setPrice", args: [newPrice] }) ?? []; return result; }
export function SetRoyalty(_royalty: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setRoyalty", args: [_royalty] }) ?? []; return result; }
export function SetRoyaltyAddress(_royaltyAddress: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setRoyaltyAddress", args: [_royaltyAddress] }) ?? []; return result; }
export function SetURI(tokenId: string | Falsy, uri: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "setURI", args: [tokenId, uri] }) ?? []; return result; }
export function SupportsInterface(interfaceId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "supportsInterface", args: [interfaceId] }) ?? []; return result; }
export function Symbol() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "symbol", args: [] }) ?? []; return result; }
export function TokenByIndex(index: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenByIndex", args: [index] }) ?? []; return result; }
export function TokenExists(_id: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenExists", args: [_id] }) ?? []; return result; }
export function TokenOfOwnerByIndex(owner: string | Falsy, index: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenOfOwnerByIndex", args: [owner, index] }) ?? []; return result; }
export function TokenURI(tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "tokenURI", args: [tokenId] }) ?? []; return result; }
export function TotalSupply() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "totalSupply", args: [] }) ?? []; return result; }
export function TransferFrom(from: string | Falsy, to: string | Falsy, tokenId: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "transferFrom", args: [from, to, tokenId] }) ?? []; return result; }
export function TransferOwnership(newOwner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "transferOwnership", args: [newOwner] }) ?? []; return result; }
export function Unpause() {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "unpause", args: [] }) ?? []; return result; }
export function VacuumsOwned(_owner: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "vacuumsOwned", args: [_owner] }) ?? []; return result; }
export function WithdrawMTV(amount: string | Falsy) {
    const [result]: any = useContractCall({ abi: ABI, address: NFT, method: "vacuumsOwned", args: [amount] }) ?? []; return result; }
