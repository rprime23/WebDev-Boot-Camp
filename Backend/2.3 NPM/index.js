// var generateName = require('sillyname');

import generateName from "sillyname"
import {randomSuperhero} from 'superheroes';
import superheroes from 'superheroes';
var sillyName = generateName();
var heroname = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${heroname}!`);
console.log(superheroes.length);