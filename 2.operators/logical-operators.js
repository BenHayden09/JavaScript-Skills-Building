
// Used to make decision on multiple conditions
//Boolean values
// Logical AND (&&)
//Returns TRUE if both operators are TRUE
console.log(true && true);

 //Context - approving for a loan
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//Logical OR (||)
//Returns TRUE if only one of the operands is TRUE
// To see this, change && for || in the operand above

//Logical NOT (!)
//refuse log
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);