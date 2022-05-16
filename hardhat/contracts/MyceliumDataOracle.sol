// SPDX-License-Identifier: minimatch
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";

address public owner;
unit256 public value = 0
string public unit = "none"

contract MyceliumDataOracle is Ownable {
    
    function writeData(uint _value, string _unit) public onlyOwner {
        value = _value
        unit = _unit 
    }

    function getData() public view returns (uint256 value, string unit) public onlyOwner {
        return (value, unit);
    }
}