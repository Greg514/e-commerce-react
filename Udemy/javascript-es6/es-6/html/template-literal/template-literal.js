//  Template literals are sometimes informally called template strings.
//  but they aren't string literals and can't be used everywhere a string literal can be used. 
// Also, a tagged template literal may not result in a string; it's up to the tag function what it creates (if anything).



// Description

// Variable Substitutions
// Template literals allow variables in strings:

// Example

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);


// Expression Substitution
// Template literals allow expressions in strings:

// Example
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)

// // HTML Templates

// Example
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log(html)


// example

let greg = 'husband';
let melissa = 'wife';
let gregAge = 31;
let melissaAge=28;

console.log(`Greg is the ${greg} and he's ${gregAge} years old , and melissa is the ${melissa} and she is ${melissaAge} years old`);

