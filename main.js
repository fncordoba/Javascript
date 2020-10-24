// first exercise : Variables and Operators
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
var blankStrWord = strWord.indexOf(" ");
console.log(blankStrWord);
// f)
var strWord = "javascript javascript";
var strBlank = strWord.indexOf(" ");
var firstWord = strWord.substring(0, 1).toUpperCase() + strWord.substring(1, strBlank).toLowerCase();
var secondWord = strWord.substring(strBlank, (strBlank+2)).toUpperCase() + strWord.substring((strBlank+2)).toLowerCase();
var totalStrWord = firstWord + secondWord;
console.log(totalStrWord);

// third exercise : arrays
// a)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);
// b)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesReOrdered = meses.sort();
console.log(mesesReOrdered);
// c)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift("Enero-1");
meses.push("Diciembre+1");
console.log(meses);
// d)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift();
meses.pop();
console.log(meses);
// e)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log(meses);
// f)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = meses.join("");
console.log(meses2);
// g)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = meses.slice(4, 11);
console.log(meses2);


