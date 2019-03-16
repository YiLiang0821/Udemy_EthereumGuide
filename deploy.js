const HDWalletProvidr = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvidr(
    'about penalty banner throw next item bright improve layer tonight slim scan',
    'https://rinkeby.infura.io/v3/21ad69b5d52e4bac83b304ee85316f33'
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemp to deploy contract from account:', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
     .send({from: accounts[0]});
    console.log('Contract deployedt to:',result.options.address);

};
deploy();