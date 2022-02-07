function factorial(n) {
	if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

let n = 5;
console.log("The factorial of " + n + " is " + factorial(n));