// 1. What are the final values of all variables a, b, c and d after the code below?
let auno = 1, buno = 1;

let c = ++auno; // first a increases to 2, then c get his value that is 2
let d = buno++; // first d gets the original value of b that means he gets 1, then b increases his value to 2

/*
a = 2;
c = 2;

d = 1;
b = 2;
*/


// 2. What are the values of a and x after the code below?
let ados = 2;
let x = 1 + (ados *= 2);

/*
a = 2^2 -> 4;
x = 1+4 -> 5;
*/

// What will be the result for these expressions?
console.log(5 > 4); // true, 5 is bigger than 4
console.log("apple" > "pineapple"); // false, the letter "a" comes first on the alphabet than "p"
console.log("2" > "12"); // true, on the character list "2" comes first than "12"
console.log(undefined == null); // true, undefined is the same value as null
console.log(undefined === null); // false, they match at values but not their type
console.log(null == "\n0\n"); // false, they dont have the same value
console.log(null === +"\n0\n"); // false, they dont have the same type neither values
console.log("" + 1 + 0); // 10, it concatenate the empty string with the number 1 and the number 0 becoming 10
console.log("" - 1 + 0); // -1, the empty string becomes the number 0, so the count is 0-1 which gives -1, adding 0 does nothing so is -1
console.log(true + false); // 1, true becomes 1 and false 0, 1+0 is 1
console.log(6 / "3"); // 2, the string 3 becomes number 3, 6/3 gives 2
console.log("2" * "3"); // 6, both strings become a number so it does the calc and gives 6
console.log(4 + 5 + "px"); // 9px, it calcs 4+5 which gives 9 and this is concatenated with px giving 9px
console.log("$" + 4 + 5); // $45, the dollar concatenates with 4 and 5 giving $45
console.log("4" - 2); // 2, the string 4 becomes the said number so it can calc 4-2 which gives 2
console.log("4px" - 2); // NaN, 4px cannot be changed to a number because the program says is a string Not-a-Number
console.log(" -9 " + 5); // -9 5, the string " -9 " concatenates with the number 5 giving " -9 5"
console.log(" -9 " - 5); // -14, the string -9 becomes the number -9 then calcs with 5 and gives -14
console.log(null + 1); // 1, null is 0 so 0+1 is 1
console.log(undefined + 1); // NaN, undefined cannot be converted to number so is Not-a-Number
console.log(" \t \n" - 2); // -2, the string is filled with whitespaces as tabs or jumps which means 0, then 0-2 gives -2


// 4. Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly. The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3.
let atres = Number(prompt("First number?", 1));
let bdos = Number(prompt("Second number?", 2));

alert(atres + bdos); // Now gives 3
// We only need to change the type of the prompt to only take numbers so they won't concatenate and gives a real sum