contract TestContract {
    constructor(address _contract) { token = _contract; }
    address token;

    struct listing { uint256 tradeId; address account; uint256 value; uint256 start; uint256 stop; address to; }
    mapping(uint256 => listing) auctions;
    uint256 liveAuctions;
    uint256 endedAuctions;
}
