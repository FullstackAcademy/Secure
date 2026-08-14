// Step 1: Declare code1
let code1;

// Step 2: Assign code1 to an expression using 7 and 3
code1 = 7 + 3;

// Step 3: Initialize code2 using 3 numbers, subtraction, and division
const code2 = (100 - 20) / 2;

// Step 4: Initialize code3 using the remainder operator
const code3 = 79 % 40;

// Step 5: Initialize message
const message = "The vault has been secured. The combination is:";

// Step 6: Create codeA using string concatenation (+)
const codeA = code1 + "-" + code2 + "-" + code3;

// Step 7: Create codeB using a template literal (${})
const codeB = `${code1}-${code2}-${code3}`;

// Step 8: Print to browser console
console.log(message, codeA, codeB);