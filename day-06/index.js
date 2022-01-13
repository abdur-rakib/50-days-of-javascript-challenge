const str = 'Codedamn is the best place to learn to code';
const wordLimit = 5

function truncateWithWordLimit(str, wordLimit) {
    const array = str.split(' ');
    const resArray = (array.slice(0, wordLimit));
    return resArray.join(' ');
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
