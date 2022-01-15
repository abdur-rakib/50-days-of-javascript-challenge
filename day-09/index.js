const obj = {key: 1};

function isEmpty(obj) {
    return !Boolean(Object.keys(obj).length);
}

console.log(`is empty object: ${isEmpty(obj)}`)
