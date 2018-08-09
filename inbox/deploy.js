const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'hero above chat divert loud torch hold service gorilla ritual drive crack',
  'https://rinkeby.infura.io/69545e0ca70b46ffb0c49a2d9a0e3345'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( {data: '0x' + bytecode, arguments: ['Hello world!']} )
    .send({ gas: '1000000', gasPrice: web3.utils.toWei('2', 'gwei'), from: accounts[0]} );
  console.log('Contract deployed to ', result.options.address);
};
deploy();
