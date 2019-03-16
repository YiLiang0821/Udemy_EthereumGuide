const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //to be use as a constructor function
const web3 = new Web3(ganache.provider()); //provider is a interface to different network
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;

beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({from: accounts[0], gas: '1000000'});
    
});

describe('Inbox',() => {
    it('deploy a contract', () => {
        assert.ok(inbox.options.address);
    });
    it('has a default message', async() => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can it change', async() => {
        await inbox.methods.setMessage('Change!').send({ from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Change!');
    });
});










/*
class Car{
    park() {
        return 'Stop!';
    }
    drive() {
        return 'Vroom';
    }
}

//test

let car;

beforeEach(() => {
    car = new Car();
});
describe('Car class test', () => {
    it('test the string_park', () => {
        //const car = new Car();
        assert.equal(car.park(), 'Stop!');
    });

    it('it can drive',() =>{
        //const car = new Car();
        assert.equal(car.drive(), 'Vroom')
    });
});
*/