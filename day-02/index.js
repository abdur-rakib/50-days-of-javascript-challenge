const str = "JavaScript is awesome"

const reverse = str => [...str].reverse().join``;

function reverseAString(str) {
    // write your solution here
    const strToArray = str.split(" ");
    let resString = [];
    for (let i = strToArray.length - 1; i >= 0; i--) { 
        resString.push(`${reverse(strToArray[i])}`);
    }
    return resString.join(" ");
}

console.log(`Reversed string is: ${reverseAString(str)}`)
