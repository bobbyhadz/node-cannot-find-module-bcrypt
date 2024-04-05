// Cannot find module 'bcrypt' error in Node.js [Solved]

import bcrypt from 'bcrypt';

const myPlaintextPassword = 'dogsandcats123';
const saltRounds = 10;

const someOtherPlaintextPassword = 'hi';

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

console.log(bcrypt.compareSync(myPlaintextPassword, hash)); // true
console.log(
  bcrypt.compareSync(someOtherPlaintextPassword, hash),
); // false
