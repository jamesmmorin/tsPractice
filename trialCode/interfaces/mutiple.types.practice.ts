import { Bear, Person, Pig } from './index'

let person: Person | Pig;
let bear: Bear;
let pig: Pig;

let manBearpig!: Bear & Person & Pig;
 
manBearpig.firstName = 'James';
manBearpig.Claws = 3;
manBearpig.Hooves = 3;