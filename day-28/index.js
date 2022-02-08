function toWeirdCase(string) {
    let result = "";
    for (var i = 0; i < string.length; i++) {
        if(i%2 === 0) {
            result += (string.charAt(i).toUpperCase())
        } else {
            result += (string.charAt(i).toLowerCase())
        }
    }
    return result;
}

console.log(
    `The weird case of ${"This"} is ${toWeirdCase("This")}`
);
