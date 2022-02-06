function mostFreq(arr) {
    const obj = {}
    arr.forEach(el => {
        obj[el] = obj[el] ? obj[el] + 1 : 1;
    })
    let keys = Object.values(obj).sort((a,b) => b-a);
    return `${Object.keys(obj).find(key => obj[key] === keys[0])} ${keys[0]}`;
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFreq(arr));
