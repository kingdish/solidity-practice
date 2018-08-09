pragma solidity ^0.4.7;

contract Inbox {
  string public message;

  constructor (string initialMessage) public {
    message = initialMessage;
  }
  
  /* Deprecated
  function Inbox(string initialMessage) public {
    message = initialMessage;
  } */

  function setMessage(string newMessage) public {
    message = newMessage;
  }
}
