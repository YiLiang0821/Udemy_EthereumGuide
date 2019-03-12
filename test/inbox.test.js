const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //to be use as a constructor function
const web3 = new Web3(ganache.provider()); //provider is a interface to different network













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