/*// first exercise : Variables and Operators
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


// fourth exercise : If Else
// a)

var age = Number (prompt("how old are you?"));

if(age < 2) {
    alert("baby");
} else if(age >= 2 && age <= 12) {
    alert("child");
} else if(age >= 13 && age <= 19) {
    alert("teenager");
} else if(age >= 20 && age <= 30) {
    alert("young");
} else if(age >= 31 && age <= 60) {
    alert("adult");
} else if(age >= 61 && age <= 75) {
    alert("Elderly");
} else {
    alert("old man");
};


// fifth exercise : for
// a)

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

for (var index = 0; index < meses.length; index++) {
    var element = meses[index];
    alert(element);
};
// b)

var meses = ["enero", "febrero", "marzo", "abril", "mayo"];

for (var index = 0; index < meses.length; index++) {
    var element = (meses[index]).substring(0, 1).toUpperCase() + (meses[index]).substring(1, meses.length);
    alert(element);
};
c)

var sentence = "";
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

for (var index = 0; index < meses.length; index++) {
    sentence = meses.join(", ");
};

alert(sentence);
// d)

var array = [];
var aux = 0;
for (var index = 0; index <= 9; index++) { 
    array.push(aux);
    aux = aux + 1;
   
}

console.log(array);

sixth exercise : functions
a)

var add = function(num1, num2) {
    return result = num1 + num2;
};

var addresult = add(1, 6);
console.log(addresult);
b)

var add = function(num1, num2) {
    
    if(isNaN(num1)) {
        alert("num1 is not a number");
        return NaN
    } else if(isNaN(num2)) {
        alert("num2 is not a number");
        return NaN
    };
    return result = num1 + num2;
};

var addresult = add(5, "i");
console.log(addresult);

c)

var num1 = Number(prompt("choose a number: "));

var validate = function(num1) {
    if(Number.isInteger(num1)) {
        return alert("is an integer")
    } else {
        return alert("isn´t an integer")
    };
};

// validate(num1);

// d, e)
var num1 = parseInt(prompt("choose a first num: "));
var num2 = parseInt(prompt("choose a second num: "));
var add = function(num1, num2) {
    num1 = numValidate(num1);
    num2 = numValidate(num2);
    return num1 + num2;
}; 

var numValidate = function(number) {
    if(Number.isNaN(number)) {
        alert("a parameter is not a number");
        return NaN;
    };
        return isFloat(number);
    
}; 

var isFloat = function(number) {
    if(Number.parseFloat(number)) {
        number = Math.round(number);
        alert(`number is a float- should be ${number}`); 
        return number
    };
};


var addresult = add(num1, num2);
console.log(addresult);*/