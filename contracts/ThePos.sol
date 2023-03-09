// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ThePos is ERC20 {
    constructor() ERC20("ThePos", "TPOS") {
        _mint(msg.sender, 12000000000 * 10 ** decimals());
    }
}