// First exercise : Variables and Operators
// a)
var num1 = 5;
var num2 = 15;
var suma = num1 + num2;
console.log(suma);
// b)
var firstWord = "java";
var secondWord = "script";
var concatenation = firstWord + secondWord;
console.log(concatenation);
// c)
var firstWord = "java";
var secondWord = "script";
var concatenation = Number(firstWord.length) + Number(secondWord.length);
console.log(concatenation);

// second exercise : Strings
// a)
var strWord = "javascript";
var upperStrWord = strWord.toUpperCase();
console.log(upperStrWord);
// b)
var strWord = "javascript";
var fiveStrWord = strWord.substring(0, 5);
console.log(fiveStrWord);
// c)
var strWord = "javascript";
var threeStrWord = strWord.substring(7);
console.log(threeStrWord);
// d)
var strWord = "javascript";
var upperLowerStr = strWord.substring(0, 1).toUpperCase() + strWord.substring(1).toLowerCase();
console.log(upperLowerStr);
// e)
var strWord = "javascr ipt";
var blankStrWord = 
console.log(blankStrWord)
// f)
var strWord = "javascript javascript";
var strBlank = strWord.indexOf(" ");
var firstWord = strWord.substring(0, 1).toUpperCase() + strWord.substring(1, strBlank).toLowerCase();
var secondWord = strWord.substring(strBlank, (strBlank+2)).toUpperCase() + strWord.substring((strBlank+2)).toLowerCase();
var totalStrWord = firstWord + secondWord;
