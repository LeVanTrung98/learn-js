function calcSum(a, b) {
	let result = 1;

	for (let i = 0; i < 10; i++) {
		result *= i;
	}

	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
	console.log(n);
} else {
	alert( calcSum(x, n) );
}

// line 1 : No space between the function name and parentheses between the parentheses and the parameter
// line 1 : A space between parameters
//Indentation 4 spaces
// line 4, 14 : A space after for/if/while…
// line 16 : } else { without a line break
// line 17 : Spaces around a nested call
// line 14 : An empty line between logical blocks
// line 4 : Spaces around operators
// line 1 : Curly brace { on the same line, after a space
//A semicolon ; is mandatory