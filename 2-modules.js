//Common JS, every file in node is module(by default)
//Modules - encapsulated Code (only share minimum)
//EVERY FILE BY DEFAULT IS A MODULE
//connect with the module
//When u import your module u actually invoke it
const names = require('./3-names');
const sayHi = require('./4-util');
const alternate = require('./5-alternative-flavor' )
console.log(alternate);

//if we have a function inside of our module
//that we invoke,that code will run even if we do not assign it to a variable
require('./6-mind-grenade')

sayHi('mohit')
sayHi(names.john)
sayHi(names.peter)