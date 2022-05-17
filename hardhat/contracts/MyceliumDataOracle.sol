// SPDX-License-Identifier: minimatch
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MyceliumDataOracle is Ownable {

    uint256 public value = 0;
    string public unit = "none";
    
    function setData(uint _value, string memory _unit) public onlyOwner {
        value = _value;
        unit = _unit;
    }

    function getData() public view onlyOwner returns (uint256, string memory) {
        return (value, unit);
    }
}