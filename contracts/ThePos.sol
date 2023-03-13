// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ThePos is ERC20, Ownable {
    constructor() ERC20("ThePos", "TPOS") {}

    function setContractToOwner(address _thePosStakingContract) external {
        transferOwnership(_thePosStakingContract);
    }
    
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}