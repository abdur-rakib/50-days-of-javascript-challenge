function gcd(a, b) {
	let r;
    while((a%b) > 0) {
        r = a % b;
        a = b;
        b = r
    }
    return b;
}

const a = 36
const b = 60

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));