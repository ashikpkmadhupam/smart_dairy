// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Dairy {

    mapping(string => string) dailyDairy;
    mapping(address => mapping(string => string)) public myDairy;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function addDairy (string memory _date, string memory _content) payable public {
        require(msg.value >=0.0000005 ether , "Not enough fund sent");
        myDairy[msg.sender][_date]=_content;
        owner.transfer(msg.value);
    }

    function getDairy(string memory _date) public view returns(string memory) {
        return myDairy[msg.sender][_date];
    }
}