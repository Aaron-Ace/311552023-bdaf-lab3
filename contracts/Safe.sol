// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Safe {

  mapping(address => mapping(address => uint256)) accountBalances;
  event transfer(address from, address to, address token, uint256 amount);
  constructor() {
  }

  function depositTokens(uint256 amount, address symbol) external {
    accountBalances[msg.sender][symbol] += amount;
    emit transfer(msg.sender, address(this), symbol, amount);
  }

  function withdrawTokens(uint256 amount, address symbol) external {
    require(accountBalances[msg.sender][symbol] >= amount, 'Insufficent funds');
    accountBalances[msg.sender][symbol] -= amount;
    emit transfer(msg.sender, address(this), symbol, amount);
  }
}

