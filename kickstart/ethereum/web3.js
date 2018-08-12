import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/69545e0ca70b46ffb0c49a2d9a0e3345'
  );
  web3 = new Web3(provider);
}

export default web3;
