
// 8-bits = 1 byte of information in a computer

// 1 = 00000001
// 2 = 00000010
// R = 00000011

// Binary is read vertically 

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND = result will be 0 becuase both are not equal to 1

// --------------

// Real world example on Bitwise use: implement an access control system
// Read. Write. Execute

// Permitted action is based on relation between binary number and action position

// 00000100 = Read
// 00000110 = read and write
// 00000111 = read, write and execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission


let message = 
    (myPermission & readPermission) ? 'yes': 'no';

console.log(message);
