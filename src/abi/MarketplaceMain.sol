// SPDX-License-Identifier: MIT

pragma solidity >=0.8.12;

abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) { return payable(msg.sender); }
    function _msgData() internal view virtual returns (bytes memory) {
        this;
        return msg.data;
        }
    }
abstract contract Ownable is Context {
    address private _owner;

    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }
    function owner() public view virtual returns (address) { return _owner; }
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
        }
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
        }
    }
library SafeMath {
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        uint256 c = a + b;
        if (c < a) return (false, 0);
        return (true, c);
        }
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        if (b > a) return (false, 0);
        return (true, a - b);
        }
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        if (a == 0) return (true, 0);
        uint256 c = a * b;
        if (c / a != b) return (false, 0);
        return (true, c);
        }
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        if (b == 0) return (false, 0);
        return (true, a / b);
        }
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        if (b == 0) return (false, 0);
        return (true, a % b);
        }
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
        }
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        return a - b;
        }
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) return 0;
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
        }
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        return a / b;
        }
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: modulo by zero");
        return a % b;
        }
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        return a - b;
        }
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        return a / b;
        }
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        return a % b;
        }
    }
interface IERC165 {
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
    }
interface IERC721 is IERC165 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function setApprovalForAll(address operator, bool _approved) external;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
    }
interface IERC721_2 is IERC721 {
    function name() external view returns (string memory name);
    function symbol() external view returns (string memory symbol);
    function tokenURI(uint256 tokenId) external view returns (string memory tokenURI);
    function baseURI() external view returns (string memory baseURI);
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);
    function totalSupply() external view returns (uint256 totalSupply);
    function tokenByIndex(uint256 index) external view returns (uint256 tokenId);
    function transferFrom(address from, address to, uint256 tokenId) external;
    }
contract TestContract is Ownable {
    using SafeMath for uint256;

    IERC721_2 public nftContract;
    constructor(address targetContract) { nftContract = IERC721_2(targetContract); }

    bool internal locked;
    bool public isPaused;
    modifier noreentry() {
        require(!locked, "No re-entrance");
        locked = true;
        _;
        locked = false;
        }
    modifier admin() { require(msg.sender == owner(), "Admin only"); _; }
    modifier tradingEnabled() { require(!isPaused, "Trading disabled"); _; }

    uint256 public volume;              // num of successfully traded
    uint256 public tradeVolume;         // value of successfully traded
    uint256 public floor;               // added by the most recent listing
    uint256 public listVolume;
    uint256 private escrow;
    uint256 public fee = 50; // of 1000

    bool public MarketOnline        = true;
    bool public isCurrentContract   = true;
    address public upgradeContract  = address(0);
    address public feeReceiver      = 0x8c6c5C7e3b6F544A8B0c4540aF3DB339789626Fc;

    // accepting offers:    stop == 0
    // ongoing:             stop == 1 
    // canceled:            stop == 2
    // autioning:           stop > start
    struct listing { uint256 tradeId; address account; uint256 value; uint256 start; uint256 stop; address to; }
    mapping(uint256 => listing[]) history;          // specific NFT's history, also indicates current status
    mapping(uint256 => listing) tradeId;            // iterator for ALL trades
    mapping(uint256 => uint256) tradeIdToken;       // tradeId -> tokenId
    mapping(uint256 => uint256) sent;               // iterator for ALL sends

    struct bid { address account; uint256 amount; }
    mapping(uint256 => bid[]) bids;                 // bids for tradeId
    mapping(address => uint256[]) myListings;       // address -> tradeId
    mapping(address => uint256[]) myBids;           // address -> tradeId

//-----------------------------------------------------------------------------
// GET FUNCTIONS:
    function getStatus(uint256 _id) public view returns(uint256, address, uint256, uint256, uint256, address) {
        require(_id < nftContract.totalSupply(), "Index has not been minted");
        listing memory _listing = history[_id].length > 0 ? history[_id][history[_id].length-1] : listing(0,address(0),0,0,0,address(0));
        return (_listing.tradeId, _listing.account, _listing.value, _listing.start, _listing.stop, _listing.to);
        }
    function getHistory(uint256 _id, uint256 min, uint256 max) public view returns (
        uint256[] memory _tradeId, 
        address[] memory _account, 
        uint256[] memory _value, 
        uint256[] memory _start, 
        uint256[] memory _stop, 
        address[] memory _to
        ) {
        require(_id < nftContract.totalSupply(), "Index has not been minted");
        uint256 historyLength = history[_id].length;
        require(min < historyLength, "Min out of range");
        uint256 size = max > historyLength ? historyLength - min : max - min;
        _tradeId    = new uint256[](size);
        _account    = new address[](size);
        _value      = new uint256[](size);
        _start      = new uint256[](size);
        _stop       = new uint256[](size);
        _to         = new address[](size);

        for(min; min < max; min++) {
            _tradeId[min]   = history[_id][min].tradeId;
            _account[min]   = history[_id][min].account;
            _value[min]     = history[_id][min].value;
            _start[min]     = history[_id][min].start;
            _stop[min]      = history[_id][min].stop;
            _to[min]        = history[_id][min].to;
        }
        return(_tradeId, _account, _value, _start, _stop, _to);
        }
    function getHistorySize(uint256 _id) public view returns(uint256) {
        require(_id < nftContract.totalSupply(), "Index has not been minted");
        return history[_id].length;
        }
    function getMyBids(address _address, uint256 min, uint256 max) public view returns(
        uint256[] memory _tradeId, 
        uint256[] memory _tokenId, 
        uint256[] memory _index, 
        uint256[] memory _amount
        ) {
        uint256 bidsLength = myBids[_address].length;
        require(min < bidsLength, "Min out of range");
        uint256 size = max > bidsLength ? bidsLength - min : max - min;
        _tradeId    = new uint256[](size);
        _tokenId    = new uint256[](size);
        _index      = new uint256[](size);
        _amount     = new uint256[](size);

        for(min; min < max; min++) {
            if(history[myListings[_address][min]].length > 0) {
                _tradeId[min]   = myBids[_address][min];
                _tokenId[min]   = tradeIdToken[_tradeId[min]];
                _index[min]     = getBid(myBids[_address][min], _address);
                _amount[min]    = bids[_tradeId[min]][_index[min]].amount;
            }
        }
        return(_tradeId, _tokenId, _index, _amount);
        }
    function getMyBidsSize(address _account) public view returns(uint256) { return myBids[_account].length; }
    function getMyListings1(address _address, uint256 min, uint256 max) public view returns (
        uint256[] memory _tradeId, 
        address[] memory _account, 
        uint256[] memory _value
        ) {
        uint256 listingsLength = myListings[_address].length;
        require(min < listingsLength, "Min out of range");
        uint256 size = max > listingsLength ? listingsLength - min : max - min;
        _tradeId    = new uint256[](size);
        _account    = new address[](size);
        _value      = new uint256[](size);

        for(min; min < max; min++) {
            if(history[myListings[_address][min]].length > 0) {
                _tradeId[min]   = history[myListings[_address][min]][history[myListings[_address][min]].length-1].tradeId;
                _account[min]   = history[myListings[_address][min]][history[myListings[_address][min]].length-1].account;
                _value[min]     = history[myListings[_address][min]][history[myListings[_address][min]].length-1].value;
            }
        }
        return(_tradeId, _account, _value);
        }
    function getMyListings2(address _address, uint256 min, uint256 max) public view returns (
        // uint256[] memory _tradeId, 
        // address[] memory _account, 
        // uint256[] memory _value, 
        uint256[] memory _start, 
        uint256[] memory _stop, 
        address[] memory _to
        ) {
        uint256 listingsLength = myListings[_address].length;
        require(min < listingsLength, "Min out of range");
        uint256 size = max > listingsLength ? listingsLength - min : max - min;
        // _tradeId    = new uint256[](size);
        // _account    = new address[](size);
        // _value      = new uint256[](size);
        _start      = new uint256[](size);
        _stop       = new uint256[](size);
        _to         = new address[](size);

        for(min; min < max; min++) {
            if(history[myListings[_address][min]].length > 0) {
                // _tradeId[min]   = history[myListings[_address][min]][history[myListings[_address][min]].length-1].tradeId;
                // _account[min]   = history[myListings[_address][min]][history[myListings[_address][min]].length-1].account;
                // _value[min]     = history[myListings[_address][min]][history[myListings[_address][min]].length-1].value;
                _start[min]     = history[myListings[_address][min]][history[myListings[_address][min]].length-1].start;
                _stop[min]      = history[myListings[_address][min]][history[myListings[_address][min]].length-1].stop;
                _to[min]        = history[myListings[_address][min]][history[myListings[_address][min]].length-1].to;
            }
        }
        //return(_tradeId, _account, _value, _start, _stop, _to);
        return(_start, _stop, _to);
        }
    function getMyListingsSize(address _account) public view returns(uint256) { return myListings[_account].length; }
    function getBid(uint256 _tradeId, address _account) public view returns(uint256) {
        for(uint256 i=1; i< bids[_tradeId].length; i++) { if(bids[_tradeId][i].account == _account) return i; }
        return 1000;
        }
//-----------------------------------------------------------------------------
// MAIN FUNCTIONS:
    // list sell / auction
    function listTrade(uint256 _id, uint256 _value, uint256 _duration) public noreentry tradingEnabled {
        require(nftContract.ownerOf(_id) == msg.sender, "NFT either in escrow or you are not the owner");
        sendNft(msg.sender, address(this), _id);

        /*
        // Change: force buyers to claim refunds
        if(history[_id].length > 0) {
            uint256 _tradeId = history[_id][history[_id].length-1].tradeId;
            if(bestOffer(_tradeId) > 0) escrowRefund(_tradeId);
        }
        */

        // Add listing to NFTs history
        listing memory _listing = block.timestamp.add(_duration) <= block.timestamp
            ? listing(listVolume, msg.sender, _value, block.timestamp, 1, address(0))
            : listing(listVolume, msg.sender, _value, block.timestamp, block.timestamp + _duration, address(0));
        history[_id].push(_listing);
        
        // Add listing to tradeId
        tradeId[listVolume++] = _listing;
        tradeIdToken[listVolume] = _id;
        myListings[msg.sender].push(listVolume);
        }
    // return current best offer for NFT
    function bestOffer(uint256 _tradeId) public view returns(uint256 index) {
        uint256 i;
        while(i<bids[_tradeId].length) { index = bids[_tradeId][index].amount < bids[_tradeId][i++].amount ? index : i; }
        }
    // accept best offer (auction or stray offers) -> swap tokens and NFT
    function acceptBestOffer(uint256 _id) public noreentry {
        listing storage _listing = history[_id][history[_id].length -1];
        require(_listing.stop < block.timestamp, "NFT in auction");
        require(msg.sender == _listing.account, "Not NFT owner");

        // Reentry blocked by setting bid state to zero
        bid memory _bestOffer = bids[_listing.tradeId][bestOffer(_listing.tradeId)];
        bids[_listing.tradeId][bestOffer(_listing.tradeId)].amount = 0;
        require(_bestOffer.amount != 0, "No offers");

        // Swap NFT and Tokens
        // If stop time is 0, nftId is assigned to a user
        uint256 _fee = _bestOffer.amount * fee / 1000;
        _listing.stop == 0
            ? sendNft(msg.sender, _bestOffer.account, _id)
            : sendNft(address(this), _bestOffer.account, _id);
        require(address(this).balance >= _bestOffer.amount, "Insufficent contract balance");
        msg.sender.call{value: _bestOffer.amount - _fee}("");
        owner().call{value: _fee}("");
        escrow -= _bestOffer.amount;
        
        // Refund unused bids and increment trade volume
        escrowRefund(_listing.tradeId);
        tradeVolume += _bestOffer.amount;

        // Complete trade by adding 'stop' and 'to' to the history and tradeId listings
        _listing.stop = block.timestamp;
        _listing.to = _bestOffer.account;
        tradeId[_listing.tradeId].stop = _listing.stop;
        tradeId[_listing.tradeId].to = _listing.to;

        // Create new history and tradeId for new owner to accept static offers
        listing memory newListing = listing(listVolume, _bestOffer.account, 0, block.timestamp, 1, address(0));
        tradeId[listVolume] = newListing;
        history[_id][history[_id].length] = newListing;
        listVolume++;
        }
    // let winner of auction swap tokens and NFT
    function claimWonAuction(uint256 _id) public noreentry {
        listing storage _listing = history[_id][history[_id].length -1];
        require(_listing.stop < block.timestamp, "NFT in auction");

        // Reentry blocked by setting bid state to zero
        bid memory _bestOffer = bids[_listing.tradeId][bestOffer(_listing.tradeId)];
        bids[_listing.tradeId][bestOffer(_listing.tradeId)].amount = 0;
        require(_bestOffer.amount != 0, "Invalid offer");
        require(msg.sender == _bestOffer.account, "Not bid owner");

        // Swap NFT and Tokens
        sendNft(address(this), _bestOffer.account, _id);
        uint256 _fee = _bestOffer.amount * fee / 1000;
        require(address(this).balance >= _bestOffer.amount, "Insufficent contract balance");
        _listing.account.call{value: _bestOffer.amount - _fee}("");
        owner().call{value: _fee}("");
        escrow -= _bestOffer.amount;

        // Refund unused bids and increment trade volume
        escrowRefund(_listing.tradeId);
        tradeVolume += _bestOffer.amount;

        // Complete trade by adding 'stop' and 'to' to the history and tradeId listings
        _listing.stop = block.timestamp;
        _listing.to = _bestOffer.account;
        tradeId[_listing.tradeId].stop = _listing.stop;
        tradeId[_listing.tradeId].to = _listing.to;

        // Create new history and tradeId for new owner to accept static offers
        listing memory newListing = listing(listVolume, _bestOffer.account, 0, block.timestamp, 1, address(0));
        tradeId[listVolume] = newListing;
        history[_id][history[_id].length] = newListing;
        listVolume++;
        }
    // bid on any NFT except: fixed price or in auction ended status
    function createBid(uint256 _id) public payable tradingEnabled {
        require(_id < nftContract.totalSupply(), "Index has not been minted");
        address ownerAccount = nftContract.ownerOf(_id);
        require(ownerAccount != msg.sender, "Already NFT owner");
        require(ownerAccount != address(0), "NFT already burned");

        // create new listing if none exists
        if(history[_id].length == 0) {
            listing memory newListing = listing(++listVolume, ownerAccount, 0, block.timestamp, 0, address(0));
            tradeId[listVolume] = newListing;
            tradeIdToken[listVolume] = _id;
            myListings[ownerAccount].push(listVolume);
            history[_id][history[_id].length] = newListing;
            listVolume;
        }

        listing memory _listing = history[_id][history[_id].length-1];
        require(_listing.stop < 2 || _listing.stop > block.timestamp, "Auction over");
        require(_listing.stop != 1, "Cannot bid on fixed prices");

        bid[] storage _bids = bids[_listing.tradeId];
        require(_bids.length < 999, "Max 1000 bids per listing");

        uint256 i = getBid(_listing.tradeId, msg.sender);
        require(i != 1000, "Account bid already exists");
        _bids.push(bid(msg.sender, msg.value));
        myBids[msg.sender].push(_listing.tradeId);
        escrow += msg.value;
        }
    // edit current bid (you can only have one bid)
    function updateBid(uint256 _id, bool _add) public payable tradingEnabled returns(bool success) {
        listing memory _listing = history[_id].length > 0 ? history[_id][0] : history[_id][history[_id].length-1];
        require(_listing.stop < 2 || _listing.stop > block.timestamp, "NFT sale complete");
        require(_listing.stop != 1, "Cannot bid on fixed prices");

        uint256 index = getBid(_listing.tradeId, msg.sender);
        require(index == 1000, "Bid does not exists");

        bid storage _bid = bids[_listing.tradeId][index];
        uint256 temp = _bid.amount;
        require(temp != msg.value, "Value already exists");
        _bid.amount = 0;
        
        if(_add) { 
            _bid.amount = temp + msg.value;
            escrow += msg.value;
        }
        else { 
            uint256 change = msg.value > temp ? temp : msg.value;
            escrow -= change;
            (success,) = msg.sender.call{value: change}("");
            _bid.amount = temp - change;
        }
        }
    // cancel your bid altogether
    function cancelBid(uint256 _id) public payable {
        listing memory _listing = history[_id].length > 0 ? history[_id][0] : history[_id][history[_id].length-1];
        require(_listing.stop <= 2 || _listing.stop > block.timestamp, "NFT sale complete");

        uint256 index = getBid(_listing.tradeId, msg.sender);
        require(index == 1000, "Bid does not exists");

        bid storage _bid = bids[_listing.tradeId][index];
        uint256 temp = _bid.amount;
        _bid.amount = 0;
        (bool success,) = msg.sender.call{value: temp}("");
        escrow -= temp;
        }
    // find list of active tradeId
    function buyTrade(uint256 _id) public payable noreentry tradingEnabled returns(bool success1, bool success2){
        listing memory _listing = history[_id].length > 0 ? history[_id][0] : history[_id][history[_id].length-1];
        
        require(_listing.tradeId != 0);
        require(msg.sender != _listing.account, "Already NFT owner");
        require(msg.value >= _listing.value, "MTV below sell price");
        require(_listing.stop == 1, "NFT not for sale");

        uint256 _fee = _listing.value.mul(fee).div(1000);
        (success1,) = _listing.account.call{value: _listing.value - _fee}("");
        (success2,) = owner().call{value: _fee}("");

        history[_id][history[_id].length-1].stop = block.timestamp;
        tradeVolume += _listing.value;

        // Create new history and tradeId for new owner to accept static offers
        listing memory newListing = listing(++listVolume, msg.sender, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = newListing;
        tradeIdToken[listVolume] = _id;
        myListings[msg.sender].push(listVolume);
        history[_id][history[_id].length] = newListing;
        listVolume;
        }
//-----------------------------------------------------------------------------
// INTERNAL FUNCTIONS:
    function escrowRefund(uint256 _tradeId) internal returns(bool success) {
        if(bids[_tradeId].length > 0) {
            for(uint256 i=0; i<bids[_tradeId].length; i++) {
                (success,) = bids[_tradeId][i].account.call{value: bids[_tradeId][i].amount}("");
                bids[_tradeId][i].amount = 0;
            }
        }
        }
    function sendNft(address _from, address _to, uint256 _id) internal {
        //bytes memory payload = abi.encodeWithSignature("safeTransferFrom(address, address, uint256)", _from, _to, _id);
        //(success,) = nftContract.call(payload);
        nftContract.approve(_to, _id);
        nftContract.safeTransferFrom(_from, _to, _id);
        }
//-----------------------------------------------------------------------------
// ADMIN FUNCTIONS:
    function adminCancelAuction(uint256 _id) public admin noreentry {
        listing memory _listing = history[_id].length > 0 ? history[_id][0] : history[_id][history[_id].length-1];
        
        require(_listing.tradeId != 0);
        require(_listing.stop != 2, "Sale already cancelled");
        require(_listing.stop > block.timestamp, "Auction over, bids locked");

        // Cancel trade by returning NFT and tokens
        sendNft(address(this), _listing.account, _id);
        adminRefundNft(_listing.tradeId);
        adminRefundBids(_listing.tradeId);
        _listing.stop = 2;
        tradeId[_listing.tradeId].stop = 2;

        // Create new history and tradeId for new owner to accept static offers
        listing memory newListing = listing(++listVolume, _listing.account, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = newListing;
        tradeIdToken[listVolume] = _id;
        myListings[_listing.account].push(listVolume);
        history[_id][history[_id].length] = newListing;
        listVolume;
        }
    function adminRefundBids(uint256 _tradeId) public admin noreentry { escrowRefund(_tradeId); }
    function adminRefundNft(uint256 _tradeId) public admin { 
        uint256 _id = tradeIdToken[_tradeId];
        if(nftContract.ownerOf(_id) == address(this)) sendNft(address(this), tradeId[_tradeId].account, _id);

        }
    function toggleMarket() public admin { MarketOnline = !MarketOnline; }
    function toggleUpgrade() public admin { isCurrentContract = !isCurrentContract; }
    function setUpgrade(address _contract) public admin { upgradeContract = _contract; }
    // Warning: kills escrow, only use upon porting
    function withdrawAll() public payable admin { require(payable(msg.sender).send(address(this).balance)); }
    // No tokens should be sent into the contract: burn / take them
    function burnRdnmTkn(address _token, address _to, uint256 _amount) external admin returns(bool success) { 
        bytes memory payload = abi.encodeWithSignature("transfer(address, uint256)", _to, _amount);
        (success,) = _token.call(payload);
        }
    function burnRdnmNft(address _token, address _to, uint256 _id) external admin { 
        IERC721_2(_token).approve(_to, _id);
        IERC721_2(_token).safeTransferFrom(address(this), _to, _id);
        }
}
