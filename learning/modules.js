// const x = require('./people')
// const {hello, world} = require('./people')
const {people, ages} = require('./people')

console.log(people,ages);

const os = require('os')
// console.log(os)
console.log(os.platform(), os.homedir())