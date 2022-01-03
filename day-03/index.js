const num = 3849;

function reverseGivenInteger(num) {
    const numToString = num.toString();
    return parseInt([...numToString].reverse().join``);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
