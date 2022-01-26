function findOutlier(integers) {
    const isOdd = integers.filter(el => el % 2 !== 0);
    const isEven = integers.filter(el => el % 2 === 0);
    if (isOdd.length === 1) return isOdd[0];
    else return isEven[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))