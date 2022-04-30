/*
BSC Testnet:
NFT: 0x328B697bb7a660B3a3fEC1c0913F1A1DD3fC7Bd9
Market: 0x531598bE2735D388Ae8df09bC7d8085B458c127f
*/

// SPDX-License-Identifier: MIT

pragma solidity >=0.8.12;

import "./Ownable.sol";
import "./SafeMath.sol";
import "./IERC721_2.sol";

contract TestContract is Ownable {
    using SafeMath for uint256;

    IERC721_2 public nftContract;
    constructor(address targetContract, uint256 _minIncrement) { 
        nftContract = IERC721_2(targetContract);
        minIncrement = _minIncrement * 10**18;
    }

    bool internal locked;
    bool isPaused;
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
    uint256 public floor;               // based off last listing/change
    uint256 public listVolume;
    uint256 public minIncrement;
    uint256 private escrow;
    uint256 fee = 50; // of 1000

    address feeReceiver      = 0x8c6c5C7e3b6F544A8B0c4540aF3DB339789626Fc;

    // accepting offers:    stop == 0
    // ongoing:             stop == 1 
    // canceled:            stop == 2
    // autioning:           stop > start
    struct listing { uint256 tokenId; uint256 tradeId; address account; uint256 value; uint256 start; uint256 stop; address to; }
    mapping(uint256 => listing[]) public history;          // specific NFT's history, also indicates current status
    mapping(uint256 => listing) public tradeId;            // iterator for ALL trades

    struct bid { address account; uint256 amount; }
    mapping(uint256 => bid[]) public bids;                 // bids for tradeId
    mapping(address => uint256[]) public myListings;       // address -> tradeId
    mapping(address => uint256[]) public myBids;           // address -> tradeId

//-----------------------------------------------------------------------------
// EVENTS:
    event ListTrade      (uint256 tokenId, uint256 tradeId, address account, uint256 start, uint256 stop);
    event SaleClaimed    (uint256 tokenId, uint256 tradeId, address seller, address winner, uint256 price);
    event SaleCanceled   (uint256 tokenId, uint256 tradeId, address seller);
    event BidCreation    (uint256 tokenId, uint256 tradeId, address account, uint256 value);
    event BidUpdate      (uint256 tokenId, uint256 tradeId, address account, uint256 oldValue, uint256 newValue);
//-----------------------------------------------------------------------------
// GET FUNCTIONS:
    // _state: true = history | false = bids
    function getLength(uint256 _tokenId, bool _state) public view returns(uint256) { return _state ? history[_tokenId].length : bids[_tokenId].length; }
    // _state: true = myListings | false = myBids
    function getMyLength(bool _state) public view returns(uint256) { return _state ? myListings[msg.sender].length : myBids[msg.sender].length; }
    //get sales
    //get auctions
    //get static sales
    //get staic blocked
    function getBid(uint256 _tradeId, address _account) public view returns(uint256) {
        for(uint256 i=1; i< bids[_tradeId].length; i++) { if(bids[_tradeId][i].account == _account) return i; }
        return 1000;
        }
    function getHistory(uint256 _tokenId, uint256 min, uint256 max) public view returns (
        uint256[] memory _tradeId, 
        address[] memory _account, 
        uint256[] memory _value, 
        uint256[] memory _start, 
        uint256[] memory _stop, 
        address[] memory _to
        ) {
        uint256 historyLength = history[_tokenId].length;
        require(min < historyLength, "Min out of range");
        uint256 size = max > historyLength ? historyLength - min : max - min;
        _tradeId    = new uint256[](size);
        _account    = new address[](size);
        _value      = new uint256[](size);
        _start      = new uint256[](size);
        _stop       = new uint256[](size);
        _to         = new address[](size);

        if(historyLength > 0) {
            uint256 i=0;
            for(min; min < max; min++) {
                listing memory _listing = history[_tokenId][min];
                _tradeId[i]   = _listing.tradeId;
                _account[i]   = _listing.account;
                _value[i]     = _listing.value;
                _start[i]     = _listing.start;
                _stop[i]      = _listing.stop;
                _to[i]        = _listing.to;
                i++;
            }
        }
        return(_tradeId, _account, _value, _start, _stop, _to);
        }
    function getMyBids(address _address, uint256 min, uint256 max) public view returns(
        uint256[] memory _tokenId,
        uint256[] memory _tradeId,
        uint256[] memory _index,
        uint256[] memory _amount
        ) {
            //mapping(uint256 => bid[]) public bids;
            //mapping(address => uint256[]) public myBids;
        uint256 bidsLength = myBids[_address].length;
        require(min < bidsLength, "Min out of range");
        uint256 size = max > bidsLength ? bidsLength - min : max - min;
        _tokenId    = new uint256[](size);
        _tradeId    = new uint256[](size);
        _index      = new uint256[](size);
        _amount     = new uint256[](size);

        if(bidsLength > 0) {
            uint256 i=0;
            for(min; min < max; min++) {
                uint256 _tradeIdIndex = myBids[_address][min];
                uint256 _bidIndex = getBid(_tradeIdIndex, _address);
                _tokenId[i]   = tradeId[_tradeIdIndex].tokenId;
                _tradeId[i]   = _tradeIdIndex;
                _index[i]   = _bidIndex;
                _amount[i]  = bids[_tradeIdIndex][_bidIndex].amount;
                i++;
            }
        }
        return(_tokenId, _tradeId, _index, _amount);
        }
    function getMyListings(address _address, uint256 min, uint256 max) public view returns (
        uint256[] memory _tokenId, 
        uint256[] memory _tradeId, 
        address[] memory _account, 
        uint256[] memory _value, 
        uint256[] memory _start, 
        uint256[] memory _stop, 
        address[] memory _to
        ) {
        uint256 listingsLength = myListings[_address].length;
        require(min < listingsLength, "Min out of range");
        uint256 size = max > listingsLength ? listingsLength - min : max - min;
        _tokenId    = new uint256[](size);
        _tradeId    = new uint256[](size);
        _account    = new address[](size);
        _value      = new uint256[](size);
        _start      = new uint256[](size);
        _stop       = new uint256[](size);
        _to         = new address[](size);

        if(listingsLength > 0) {
            uint256 i=0;
            for(min; min < max; min++) {
                uint256 _index = myListings[_address][min];
                listing memory _listing = tradeId[_index];
                _tokenId[i]   = _listing.tokenId;
                _tradeId[i]   = _listing.tradeId;
                _account[i]   = _listing.account;
                _value[i]     = _listing.value;
                _start[i]     = _listing.start;
                _stop[i]      = _listing.stop;
                _to[i]        = _listing.to;
                i++;
            }
        }
        return(_tokenId, _tradeId, _account, _value, _start, _stop, _to);
        }
//-----------------------------------------------------------------------------
// MAIN FUNCTIONS:
    // list sell
    function listTrade(uint256 _tokenId, uint256 _value) public noreentry tradingEnabled {
        listing storage _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop != 1, "Sale ongoing");
        require(_listing.stop != 2, "Sale disabled");
        require(nftContract.ownerOf(_tokenId) == msg.sender, "Not NFT owner");
        _listing.stop = 2;
        sendNft(msg.sender, address(this), _tokenId);

        // New listing
        listing memory _new = listing(_tokenId, listVolume, msg.sender, _value, block.timestamp, 1, address(0));
        history[_tokenId].push(_new);
        
        // New tradeId
        tradeId[listVolume] = _new;
        myListings[msg.sender].push(listVolume);
        listVolume++;
        }
    // list cancel
    function listCancel(uint256 _tokenId) public noreentry tradingEnabled {
        listing storage _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop == 1, "Sale not found");
        require(nftContract.ownerOf(_tokenId) == address(this), "NFT not in escrow");
        require(msg.sender == _listing.account, "Not NFT owner");
        _listing.stop = 2;
        sendNft(address(this), msg.sender, _tokenId);

        // Create new history and tradeId for new owner to accept static offers
        listing memory _new = listing(_tokenId, listVolume, msg.sender, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = _new;
        history[_tokenId].push(_new);
        myListings[msg.sender].push(listVolume);
        listVolume++;
        }
    function listUpdate(uint256 _tokenId, uint256 _value) public noreentry tradingEnabled {
        listing storage _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop == 1, "Sale not found");
        require(nftContract.ownerOf(_tokenId) == address(this), "NFT not in escrow");
        require(msg.sender == _listing.account, "Not NFT owner");
        _listing.value = _value;
        }
    // return current best offer for NFT
    function bestOffer(uint256 _tradeId) public view returns(uint256 index) {
        uint256 i;
        while(i<bids[_tradeId].length) { index = bids[_tradeId][index].amount < bids[_tradeId][i++].amount ? index : i; }
        }
    // accept best offer (auction or stray offers) -> swap tokens and NFT
    function acceptBestOffer(uint256 _tokenId) public noreentry {
        listing storage _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop != 1, "Sale ongoing");
        require(_listing.stop != 2, "Sale disabled");
        require(msg.sender == _listing.account, "Not NFT owner");
        _listing.stop = 2;

        uint256 _tradeId = _listing.tradeId;

        // Reentry blocked by setting bid state to zero
        bid memory _bestOffer = bids[_tradeId][bestOffer(_tradeId)];
        uint256 _bestOfferAmount = _bestOffer.amount;
        address _bestOfferAccount = _bestOffer.account;

        bids[_tradeId][bestOffer(_tradeId)].amount = 0;
        require(_bestOfferAmount != 0, "No offers");

        // Swap NFT and Tokens
        uint256 _fee = _bestOfferAmount * fee / 1000;
        require(address(this).balance >= _bestOfferAmount, "Insufficent contract balance");
        sendNft(msg.sender, _bestOfferAccount, _tokenId);
        msg.sender.call{value: _bestOfferAmount - _fee}("");
        feeReceiver.call{value: _fee}("");
        escrow -= _bestOfferAmount;
        
        // Refund unused bids and increment trade volume
        escrowRefund(_tradeId);
        tradeVolume += _bestOfferAmount;

        // Complete trade by adding 'stop' and 'to' to the history and tradeId listings
        _listing.value = _bestOfferAmount;
        _listing.stop  = block.timestamp;
        _listing.to    = _bestOfferAccount;
        tradeId[_tradeId].value = _bestOfferAmount;
        tradeId[_tradeId].stop  = block.timestamp;
        tradeId[_tradeId].to    = _bestOfferAccount;

        // Create new history and tradeId for new owner to accept static offers
        listing memory _new = listing(_tokenId, listVolume, _bestOfferAccount, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = _new;
        history[_tokenId].push(_new);
        myListings[_bestOfferAccount].push(listVolume);
        listVolume++;
        }
    // bid on any NFT except: fixed price or in auction ended status
    function createBid(uint256 _tokenId) public payable tradingEnabled {
        address ownerAccount = nftContract.ownerOf(_tokenId);
        require(ownerAccount != msg.sender, "Already NFT owner");
        require(ownerAccount != address(0)); // not minted or burned

        uint256 _historyLength = history[_tokenId].length;
        listing memory _listing;

        // create listing if none exists
        if(_historyLength == 0) {
            _listing = listing(_tokenId, listVolume, ownerAccount, 0, block.timestamp, 0, address(0));
            history[_tokenId].push(_listing);
            tradeId[listVolume] = _listing;
            myListings[ownerAccount].push(listVolume);
            listVolume++;
        } else { _listing = history[_tokenId][_historyLength-1]; }

        uint256 _tradeId = _listing.tradeId;
        require(_listing.stop != 1, "Sale ongoing");
        require(_listing.stop != 2, "Sale disabled");

        uint256 _bestOffer = bestOffer(_tradeId);
        require(msg.value >= _bestOffer + minIncrement, "Min bet increase not met");
        bid[] storage _bids = bids[_tradeId];
        require(_bids.length <= 1000, "Max 1000 bids per listing");

        uint256 i = getBid(_tradeId, msg.sender);
        require(i != 1000, "Account bid already exists");
        _bids.push(bid(msg.sender, msg.value));
        myBids[msg.sender].push(_tradeId);
        escrow += msg.value;
        }
    // update current bid (you can only have one bid)
    function updateBid(uint256 _tokenId, uint256 _amount, bool _add) public payable tradingEnabled returns(bool success) {
        listing memory _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop != 1, "Sale ongoing");
        require(_listing.stop != 2, "Sale disabled");
        require(msg.sender == _listing.account, "Not NFT owner");

        uint256 _tradeId = _listing.tradeId;
        uint256 index = getBid(_tradeId, msg.sender);
        require(index == 1000, "Bid does not exist");

        bid storage _bid = bids[_tradeId][index];
        uint256 temp = _bid.amount;
        
        
        _bid.amount = 0;
        if(_add) {
            uint256 _bestOffer = bestOffer(_tradeId);
            require(msg.value >= _amount);
            require(_amount >= _bestOffer + minIncrement - temp, "Min bet increase not met");
            _bid.amount = temp + _amount;
            escrow += _amount;
        }
        else { 
            uint256 change = _amount > temp ? temp : _amount;
            escrow -= change;
            (success,) = msg.sender.call{value: change}("");
            _bid.amount = temp - change;
        }
        }
    // cancel your bid altogether
    function cancelBid(uint256 _tokenId) public {
        listing memory _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop != 1, "Sale ongoing");
        require(_listing.stop != 2, "Sale disabled");
        require(msg.sender == _listing.account, "Not NFT owner");

        uint256 _tradeId = _listing.tradeId;
        uint256 index = getBid(_tradeId, msg.sender);
        require(index == 1000, "Bid does not exist");

        bid storage _bid = bids[_tradeId][index];
        require(_bid.amount > 0, "Bid does not exist");

        uint256 temp = _bid.amount;
        _bid.amount = 0;
        (bool success,) = msg.sender.call{value: temp}("");
        escrow -= temp;
        }
    // find list of active tradeId
    function buyTrade(uint256 _tokenId) public payable noreentry tradingEnabled {
        listing storage _listing = history[_tokenId][history[_tokenId].length > 0 ? history[_tokenId].length - 1 : 0];
        require(_listing.stop == 1, "Sale not found");
        require(nftContract.ownerOf(_tokenId) == address(this), "NFT not in escrow");
        require(msg.sender != _listing.account, "Already NFT owner");

        uint256 _value = _listing.value;
        require(msg.value >= _value, "Input below sell price");

        uint256 _fee = _value.mul(fee).div(1000);
        (bool success1,) = _listing.account.call{value: _value - _fee}("");
        (bool success2,) = feeReceiver.call{value: _fee}("");

        _listing.stop = block.timestamp;
        _listing.to   = msg.sender;
        tradeVolume  += _value;

        // Create new history and tradeId for new owner to accept static offers
        listing memory _new = listing(_tokenId, listVolume, msg.sender, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = _new;
        history[_tokenId].push(_new);
        myListings[msg.sender].push(listVolume);
        listVolume++;
        }
//-----------------------------------------------------------------------------
// INTERNAL FUNCTIONS:
    function escrowRefund(uint256 _tradeId) internal {
        uint256 bidsLength = bids[_tradeId].length;
        if(bidsLength > 0) {
            for(uint256 i=0; i<bidsLength; i++) {
                (bool success,) = bids[_tradeId][i].account.call{value: bids[_tradeId][i].amount}("");
                bids[_tradeId][i].amount = 0;
            }
        }
        }
    function sendNft(address _from, address _to, uint256 _tokenId) internal {
        //bytes memory payload = abi.encodeWithSignature("safeTransferFrom(address, address, uint256)", _from, _to, _tokenId);
        //(success,) = nftContract.call(payload);
        nftContract.approve(_to, _tokenId);
        nftContract.safeTransferFrom(_from, _to, _tokenId);
        }
//-----------------------------------------------------------------------------
// ADMIN FUNCTIONS:
    function adminCancelAuction(uint256 _tokenId) public admin noreentry {
        uint256 len = history[_tokenId].length;
        listing memory _listing = len > 0 ? history[_tokenId][0] : history[_tokenId][len-1];
        uint256 _tradeId = _listing.tradeId;
        address _account = _listing.account;
        
        require(_tradeId != 0);
        require(_listing.stop != 2, "Sale already cancelled");
        require(_listing.stop > block.timestamp, "Auction over, bids locked");

        // Cancel trade by returning NFT and tokens
        sendNft(address(this), _account, _tokenId);
        adminRefundNft(_tradeId);
        adminRefundBids(_tradeId);
        _listing.stop = 2;
        tradeId[_tradeId].stop = 2;

        // Create new history and tradeId for new owner to accept static offers
        listing memory newListing = listing(_tokenId, listVolume, _account, 0, block.timestamp, 0, address(0));
        tradeId[listVolume] = newListing;
        myListings[_account].push(listVolume);
        history[_tokenId][history[_tokenId].length] = newListing;
        listVolume++;
        }
    function adminRefundBids(uint256 _tradeId) public admin noreentry { escrowRefund(_tradeId); }
    function adminRefundNft(uint256 _tradeId) public admin { 
        if(nftContract.ownerOf(tradeId[_tradeId].tokenId) == address(this)) sendNft(address(this), tradeId[_tradeId].account, tradeId[_tradeId].tokenId);
        }
    // Warning: kills escrow, only use upon porting
    function withdrawAll() public admin { require(payable(msg.sender).send(address(this).balance)); }
    // No tokens should be sent into the contract: burn / take them
    function burnRdnmTkn(address _token, address _to, uint256 _value, bool NFT) external admin { 
        if(NFT) {
            sendNft(address(this), _to, _value);
        }
        else {
            bytes memory payload = abi.encodeWithSignature("transfer(address, uint256)", _to, _value);
            (bool success,) = _token.call(payload);
        }
        }
}
