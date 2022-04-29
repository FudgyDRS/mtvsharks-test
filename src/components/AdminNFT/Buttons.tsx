import { FC } from 'react';
import { Button, Text } from "@chakra-ui/react";

import { ABI, NFT } from '../../abi/mtvSharks';
import { ethers } from 'ethers';

type Burn = { _amount: any};
export const ButtonBurn: FC<Burn> = ({_amount}: Burn) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["burn(uint256)"](_amount)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type BurnRdnmTkn = { _token: any, _to: any};
export const ButtonBurnRdnmTkn: FC<BurnRdnmTkn> = ({_token, _to}: BurnRdnmTkn) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["burnRdnmTkn(address,address)"](_token, _to)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type MintMultipleNFT = { _amount: any, _value: any};
export const ButtonMintMultipleNFT: FC<MintMultipleNFT> = ({_amount, _value}: MintMultipleNFT) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["mintMultipleNFT(uint256)"](_amount, {value: _value})}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type MintNFT = { _value: any};
export const ButtonMintNFT: FC<MintNFT> = ({_value}: MintNFT) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["mintNFT(uint256)"]({value: _value})}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type Approve = { _to: any, _tokenId: any};
export const ButtonApprove: FC<Approve> = ({_to, _tokenId}: Approve) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["approve(address,uint256)"](_to, _tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonRenounceOwnership: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["renounceOwnership()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type ReserveGiveaway = { _amount: any};
export const ButtonReserveGiveaway: FC<ReserveGiveaway> = ({_amount}: ReserveGiveaway) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["reserveGiveaway(uint256)"](_amount)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SafeTransferFrom1 = { _from: any, _to: any, _tokenId: any};
export const ButtonSafeTransferFrom1: FC<SafeTransferFrom1> = ({_from, _to, _tokenId}: SafeTransferFrom1) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["safeTransferFrom(address,address,uint256)"](_from, _to, _tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SafeTransferFrom2 = { _from: any, _to: any, _tokenId: any, _data: any};
export const ButtonSafeTransferFrom2: FC<SafeTransferFrom2> = ({_from, _to, _tokenId, _data}: SafeTransferFrom2) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["safeTransferFrom(address,address,uint256,bytes)"](_from, _to, _tokenId, _data)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SetApprovalForAll = { _operator: any, _approved: any};
export const ButtonSetApprovalForAll: FC<SetApprovalForAll> = ({_operator, _approved}: SetApprovalForAll) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["setApprovalForAll(address,bool)"](_operator, _approved)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SetBaseURI = { _baseURI: any};
export const ButtonSetBaseURI: FC<SetBaseURI> = ({_baseURI}: SetBaseURI) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["setBaseURI(string)"](_baseURI)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SetTokenReceiver = { _new: any};
export const ButtonSetTokenReceiver: FC<SetTokenReceiver> = ({_new}: SetTokenReceiver) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["setTokenReceiver(address)"](_new)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonToggleSale: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["toggleSale()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type Transfer = { _from: any, _to: any, _tokenId: any };
export const ButtonTransfer: FC<Transfer> = ({_from, _to, _tokenId}: Transfer) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["Transfer(address,address,uint256)"](_from, _to, _tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TransferFrom = { _from: any, _to: any, _tokenId: any };
export const ButtonTransferFrom: FC<TransferFrom> = ({_from, _to, _tokenId}: TransferFrom) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["transferFrom(address,address,uint256)"](_from, _to, _tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TransferOwnership = { _newOwner: any };
export const ButtonTransferOwnership: FC<TransferOwnership> = ({_newOwner}: TransferOwnership) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["transferOwnership(address)"](_newOwner)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonWithdrawAll: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["withdrawAll()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type BalanceOf = { _owner: any };
export const ButtonBalanceOf: FC<BalanceOf> = ({_owner}: BalanceOf) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["balanceOf(address)"](_owner)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonBaseURI: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["baseURI()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonCalculatePrice: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["calculatePrice()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type CalculateMultiple = { _amount: any };
export const ButtonCalculateMultiple: FC<CalculateMultiple> = ({_amount}: CalculateMultiple) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["calculateMultiple(uint256)"](_amount)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonCurrentSupply: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["currentSupply()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type GetApproved = { _tokenId: any };
export const ButtonGetApproved: FC<GetApproved> = ({_tokenId}: GetApproved) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["getApproved(unit256)"](_tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type IsApprovedForAll = { _owner: any, _operator: any };
export const ButtonIsApprovedForAll: FC<IsApprovedForAll> = ({_owner, _operator}: IsApprovedForAll) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["isApprovedForAll(address,address)"](_owner, _operator)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonIsSaleEnabled: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["isSaleEnabled()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonMaxSupply: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["maxSupply()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonName: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["name()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonOwner: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["owner()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type OwnerOf = { _tokenId: any };
export const ButtonOwnerOf: FC<OwnerOf> = ({_tokenId}: OwnerOf) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["ownerOf(uint256)"](_tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonReceiver: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["receiver()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type SupportsInterface = { _value: any };
export const ButtonSupportsInterface: FC<SupportsInterface> = ({_value}: SupportsInterface) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["supportsInterface(bytes4)"](_value)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonSymbol: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["symbol()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TokenByIndex = { _index: any };
export const ButtonTokenByIndex: FC<TokenByIndex> = ({_index}: TokenByIndex) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["tokenByIndex(uint256)"](_index)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TokenOfOwnerByIndex = { _owner: any, _index: any };
export const ButtonTokenOfOwnerByIndex: FC<TokenOfOwnerByIndex> = ({_owner, _index}: TokenOfOwnerByIndex) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["tokenOfOwnerByIndex(address,uint256)"](_owner, _index)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TokensOfOwner = { _name: any };
export const ButtonTokensOfOwner: FC<TokensOfOwner> = ({_name}: TokensOfOwner) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["tokensOfOwner(address)"](_name)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

type TokenURI = { _tokenId: any };
export const ButtonTokenURI: FC<TokenURI> = ({_tokenId}: TokenURI) => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["tokenURI(uint256)"](_tokenId)}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}

export const ButtonTotalSupply: FC = () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const token = NFT;
    const abi = ABI; 
    const contract = new ethers.Contract(token, abi, signer);

    return (
    <>
        <Button
            onClick={() => {contract["totalSupply()"]()}}
            background="gray.600"
            height="38px" width="140px"
            margin="1px"
            paddingInlineStart="3px" paddingInlineEnd="3px"
            border="1px" borderRadius="6px" borderStyle="solid" borderColor="transparent"
            _hover={{ border: "1px", borderRadius: "6px", borderStyle: "solid", backgroundColor: "gray.200" }}
        >
            <Text color={"white"} fontSize="1em"> Enter </Text>
        </Button>
        <br />
    </>
    );
}
